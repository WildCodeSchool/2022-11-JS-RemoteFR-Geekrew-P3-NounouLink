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
import NannyReservation from "../components/NannyReservation";

import Gris from "../assets/dashboard/Gris.svg";
import Orange from "../assets/dashboard/Orange.svg";
import Vert from "../assets/dashboard/Vert.svg";
import Rose from "../assets/dashboard/Rose.svg";

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
  const [tabIndex, setTabIndex] = useState(0); // Index de l'onglet actif
  const endTime = moment();
  const startTime = moment();
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

  return (
    <div className="flex">
      <div className="w-1/4">
        <SideBar />
      </div>
      <div className="flex flex-col w-full">
        <div className="">
          <SearchBar />
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
                <div className="flex flex-row  border-2  rounded-lg drop-shadow-md gap-8">
                  <img
                    className="flex justify-start h-20"
                    src={Gris}
                    alt="rectangle"
                  />
                  <p>
                    Bébé 1 <br />
                    18 mois
                  </p>
                  <NannyReservation />
                  <p>Nombre d'heure : </p>
                  <p>Prix total :</p>
                </div>
                <div className="flex flex-row  border-2  rounded-lg drop-shadow-md gap-8">
                  <img
                    className="flex justify-start h-20"
                    src={Orange}
                    alt="rectangle"
                  />
                  <p>
                    Bébé 1 <br />
                    18 mois
                  </p>
                  <NannyReservation />
                  <p>Nombre d'heure : </p>
                  <p>Prix total :</p>
                </div>
                <div className="flex flex-row  border-2  rounded-lg drop-shadow-md gap-8">
                  <img
                    className="flex justify-start h-20"
                    src={Vert}
                    alt="rectangle"
                  />
                  <p>
                    Bébé 1 <br />
                    18 mois
                  </p>
                  <NannyReservation />
                  <p>Nombre d'heure : </p>
                  <p>Prix total :</p>
                </div>
                <div className="flex flex-row  border-2  rounded-lg drop-shadow-md gap-8">
                  <img
                    className="flex justify-start h-20"
                    src={Rose}
                    alt="rectangle"
                  />
                  <p>
                    Bébé 1 <br />
                    18 mois
                  </p>
                  <NannyReservation />
                  <p>Nombre d'heure : </p>
                  <p>Prix total :</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="bg-gray-100 h-screen">
                <Button onClick={() => setEvents([])}>Clear</Button>
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
                      setEvents((preEvents) =>
                        preEvents.filter((e) => e.id !== event.id)
                      );
                    }}
                  />
                ))}
              </div>
              <Button
                className="gradient-linear text-white"
                type="button"
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
                    <input
                      className="border-2  rounded-lg"
                      type="time"
                      id="appt"
                      name="appt"
                      min="09:00"
                      max="18:00"
                      required
                    />
                  </Form.Item>
                  <Form.Item label="Heure de fin">
                    <input
                      className="border-2  rounded-lg"
                      type="time"
                      id="appt"
                      name="appt"
                      min="09:00"
                      max="18:00"
                      required
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
