import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/fr";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Button, Modal, Form, DatePicker } from "antd";
import userAPI from "../services/userAPI";
import { useUserContext } from "../contexts/UserContext";

import "react-tabs/style/react-tabs.css";

moment.locale("fr");

const localizer = momentLocalizer(moment);
function Agenda() {
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("events")) || []
  );
  const [beginningHour, setBeginningHour] = useState("");
  const [endTime, setEndTime] = useState("");
  const [placeNumber, setPlaceNumber] = useState(0);

  const { userId, nannyId } = useUserContext();

  useEffect(() => {
    try {
      localStorage.setItem("events", JSON.stringify(events));
    } catch (error) {
      console.error(error);
    }
  }, [events]);

  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(moment());
  const [startTime, setStartTime] = useState("");

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

    setStartTime(moment(startTime).format("LT"));
    showModal();
  };

  const handleSlot = () => {
    const startDateTime = moment(date)
      .utc()
      .set({
        hour: moment(startTime, "LT").hours(),
        minute: moment(startTime, "LT").minutes(),
      })
      .local();
    const endDateTime = moment(date)
      .utc()
      .set({
        hour: moment(endTime, "LT").hours(),
        minute: moment(endTime, "LT").minutes(),
      })
      .local();
    // const dateFormatted = moment(date).format("YYYY-MM-DD");
    // const formatHour = () => {
    //   const hour2 = (
    //     parseInt(dateFormatted.toISOString().substring(11, 12), 10) + 2
    //   )
    //     .toString()
    //     .padStart(2, "0");

    //   return hour2.toString().padStart;
    // };

    userAPI
      .post("/api/creneaux", {
        nanniesIdnannies: nannyId,
        nanniesUsersIdusers: userId,
        beginningHour: `${startDateTime.toISOString().substring(0, 10)} 
${new Date(startDateTime.toISOString().substring(11, 19)).toLocaleTimeString(
  "fr-FR",
  {
    timeZone: "Europe/Paris",
  }
)}`.toString(),

        endTime: `${endDateTime.toISOString().substring(0, 10)} 
          ${endDateTime.toISOString().substring(11, 19)}`,
        placeNumber,
        title: "Disponibilité",
      })
      .then(() => {
        setVisible(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleOk = () => {
    const newEvent = {
      id: uuidv4(),
      start: moment(date).set({
        hour: moment(startTime, "LT").hours(),
        minute: moment(startTime, "LT").minutes(),
      }),
      end: moment(date).set({
        hour: moment(endTime, "LT").hours(),
        minute: moment(endTime, "LT").minutes(),
      }),
      title: "Disponibilité",
    };

    handleSlot(newEvent);
    setEvents([...events, newEvent]);
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDateChange = (value) => {
    setDate(new Date(value));
  };

  const handleStartTimeChange = (time) => {
    const startDateTime = new Date(date);
    startDateTime.setHours(new Date(time).getHours());
    startDateTime.setMinutes(new Date(time).getMinutes());
    setStartTime(moment(startDateTime).format("LT"));
    setBeginningHour(startDateTime.toISOString());
  };

  const handleEndTimeChange = (time) => {
    const endDateTime = new Date(date);
    endDateTime.setHours(new Date(time).getHours());
    endDateTime.setMinutes(new Date(time).getMinutes());
    setEndTime(moment(endDateTime).format("LT"));
  };

  return (
    <div>
      <div className="bg-gray-100 h-screen">
        <Button onClick={() => setEvents([])}>Clear</Button>

        <Calendar
          className=""
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          views={["month", "agenda"]}
          onSelectSlot={handleSelect}
        />
      </div>

      <Modal
        title="Ajouter une disponibilité"
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="bg-white"
      >
        <Form>
          <Form.Item label="Date">
            <DatePicker onChange={handleDateChange} defaultValue={date} />
          </Form.Item>
          <Form.Item label="Heure de début">
            <DatePicker.TimePicker
              localizer={localizer}
              onChange={handleStartTimeChange}
              defaultVvalue={moment(startTime, "LT")}
            />
          </Form.Item>
          <Form.Item label="Heure de fin">
            <DatePicker.TimePicker
              localizer={localizer}
              onChange={handleEndTimeChange}
              defaulValue={moment(endTime, "LT")}
            />
          </Form.Item>
          <Form.Item label="Nombre de places">
            <input
              type="number"
              min="1"
              max="10"
              value={placeNumber}
              onChange={(e) => setPlaceNumber(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
      <Button
        className="gradient-linear text-white"
        type="button"
        onClick={showModal}
      >
        Disponibilité
      </Button>
      <p className="hidden">{beginningHour}</p>
    </div>
  );
}

export default Agenda;
