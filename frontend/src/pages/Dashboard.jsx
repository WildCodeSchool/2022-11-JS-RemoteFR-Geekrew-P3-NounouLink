import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/fr";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Button, Modal, Form, DatePicker } from "antd";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import EventCard from "../components/EventCard";
import SideBar from "../components/Sidebar";
import SearchBar from "../components/Searchbar";

import menu2 from "../assets/menu-2-line.svg";

moment.locale("fr");

const localizer = momentLocalizer(moment);

function Dashbord() {
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("events")) || []
  );

  useEffect(() => {
    try {
      localStorage.setItem("events", JSON.stringify(events));
    } catch (error) {
      console.error(error);
    }
  }, [events]);

  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(moment());
  const [startTime, setStartTime] = useState(moment());
  const [endTime, setEndTime] = useState(moment());
  const [tabIndex, setTabIndex] = useState(0); // Index de l'onglet actif

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("Nouvel événement :");
    if (title) {
      const newEvent = {
        id: uuidv4(),
        start,
        end,
        title,
      };
      setEvents((preEvents) => [...preEvents, newEvent]);
    }
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    const newEvent = {
      id: uuidv4(),
      start: moment(date).set({
        hour: startTime.hour(),
        minute: startTime.minute(),
      }),
      end: moment(date).set({
        hour: endTime.hour(),
        minute: endTime.minute(),
      }),
      title: "Disponible",
    };
    setEvents((preEvents) => [...preEvents, newEvent]);
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDateChange = () => {
    setDate(date);
  };

  const handleStartTimeChange = () => {
    setStartTime(startTime);
  };

  const handleEndTimeChange = () => {
    setEndTime(endTime);
  };

  return (
    <div className="flex ">
      <div className="w-1/4">
        <SideBar />
      </div>
      <div className="flex flex-col w-full">
        <div className="">
          <SearchBar />
          <img src={menu2} alt="menu2" />
        </div>

        <div className="p-6 w-full overflow-hidden">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Liste des demande</Tab>
              <Tab>Agenda</Tab>
              <Tab>Ajouter une place</Tab>
              <Tab>Tarif</Tab>
            </TabList>

            <TabPanel>
              <div>
                <ul>
                  <li className="border-8">hello</li>
                  <li className="border-8">world</li>
                  <li>H1</li>
                  <li>H2</li>
                </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="bg-gray-100 h-screen">
                <Calendar
                  className=""
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  selectable
                  onSelectSlot={handleSelect}
                />
                {events.map((event) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    date={moment(event.start).format("L")}
                    time={`${moment(event.start).format("LT")} - ${moment(
                      event.end
                    ).format("LT")}`}
                    onDelete={() => {
                      const newEvents = events.filter((e) => e.id !== event.id);
                      setEvents(newEvents);
                    }}
                  />
                ))}
              </div>
              <Button
                className="bg-blue-500 text-white"
                type="primary"
                onClick={showModal}
              >
                Disponibilité
              </Button>
              <Modal
                title="Ajouter une disponibilité"
                open={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                className="bg-white"
              >
                <Form>
                  <Form.Item label="Date">
                    <DatePicker
                      onChange={handleDateChange}
                      defaultValue={date}
                    />
                  </Form.Item>
                  <Form.Item label="Heure de début">
                    <DatePicker.TimePicker
                      onChange={handleStartTimeChange}
                      defaultValue={startTime}
                    />
                  </Form.Item>
                  <Form.Item label="Heure de fin">
                    <DatePicker.TimePicker
                      onChange={handleEndTimeChange}
                      defaultValue={endTime}
                    />
                  </Form.Item>
                </Form>
              </Modal>
            </TabPanel>
            <TabPanel />
            <TabPanel />
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
