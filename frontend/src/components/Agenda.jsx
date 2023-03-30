// import { useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "moment/locale/fr";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { Button, Modal, Form, DatePicker } from "antd";
// import userAPI from "../services/userAPI";
// import { useUserContext } from "../contexts/UserContext";

// import "react-tabs/style/react-tabs.css";

// moment.locale("fr");

// const localizer = momentLocalizer(moment);
// function Agenda() {
//   const [events, setEvents] = useState(
//     JSON.parse(localStorage.getItem("events")) || []
//   );

//   const [idSlots, setIdslots] = useState(0);
//   const [nanniesUsersIdusers, setNanniesUsersIdusers] = useState(0);
//   const [captionDay, setCaptionDay] = useState("");
//   const [beginningHour, setBeginningHour] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [placeNumber, setPlaceNumber] = useState(0);

//   const { userId, nannyId } = useUserContext();

//   useEffect(() => {
//     try {
//       localStorage.setItem("events", JSON.stringify(events));
//     } catch (error) {
//       console.error(error);
//     }
//   }, [events]);

//   const [visible, setVisible] = useState(false);
//   const [date, setDate] = useState(moment());
//   const [startTime, setStartTime] = useState("");
//   const [endTime1, setEndTime1] = useState("");

//   const handleSelect = ({ start, end }) => {
//     const title = window.prompt("Nouvel événement :");
//     if (title) {
//       userAPI.get("/api/users").then((res) => {
//         cons(res.data.idusers);
//         const newEvent = {
//           id: uuidv4(),
//           start,
//           end,
//           title,
//         };
//         setEvents((preEvents) => [...preEvents, newEvent]);
//       });

//       setStartTime(moment(start).format("LT"));
//       showModal();
//     }
//   };

//   const handleSlot = (newEvent) => {
//     const startDateTime = newEvent.start.format("LT");
//     const endDateTime = newEvent.end.format("LT");
//     const dateFormatted = moment(date).format("YYYY-MM-DD");
//     userAPI
//       .post("/api/creneaux", {
//         nanniesUsersIdusers,
//         date: dateFormatted,
//         startTime,
//         endTime,
//         placeNumber,
//         title: "Disponibilité",
//       })
//       .then((response) => {
//         set(response);
//         setVisible(false);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
//   const showModal = () => {
//     setVisible(true);
//   };

//   const handleOk = () => {
//     const newEvent = {
//       id: uuidv4(),
//       start: moment(date).set({
//         hour: moment(startTime, "LT").hours(),
//         minute: moment(startTime, "LT").minutes(),
//       }),
//       end: moment(date).set({
//         hour: moment(endTime, "LT").hours(),
//         minute: moment(endTime, "LT").minutes(),
//       }),
//       title: "Disponibilité",
//     };

//     handleSlot(newEvent);
//     setEvents([...events, newEvent]);
//     setVisible(false);
//   };

//   const handleCancel = () => {
//     setVisible(false);
//   };

//   const handleDateChange = (value) => {
//     setDate(new Date(value));
//   };

//   const handleStartTimeChange = (time) => {
//     const startDateTime = new Date(date);
//     startDateTime.setHours(new Date(time).getHours());
//     startDateTime.setMinutes(new Date(time).getMinutes());
//     setStartTime(moment(startDateTime).format("LT"));
//     setBeginningHour(startDateTime.toISOString());
//   };

//   const handleEndTimeChange = (time) => {
//     const endDateTime = new Date(date);
//     endDateTime.setHours(new Date(time).getHours());
//     endDateTime.setMinutes(new Date(time).getMinutes());
//     setEndTime(moment(endDateTime).format("LT"));
//     setEndTime1(endDateTime.toISOString());
//   };
//   console.log(nanniesUsersIdusers);
//   return (
//     <div>
//       <div className="bg-gray-100 h-screen">
//         <Button onClick={() => setEvents([])}>Clear</Button>

//         <Calendar
//           className=""
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           selectable
//           views={["month", "agenda"]}
//           onSelectSlot={handleSelect}
//         />
//       </div>

//       <Modal
//         title="Ajouter une disponibilité"
//         open={visible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         className="bg-white"
//       >
//         <Form>
//           <Form.Item label="Date">
//             <DatePicker onChange={handleDateChange} defaultValue={date} />
//           </Form.Item>
//           <Form.Item label="Heure de début">
//             <DatePicker.TimePicker
//               localizer={localizer}
//               onChange={handleStartTimeChange}
//               defaultVvalue={moment(startTime, "LT")}
//             />
//           </Form.Item>
//           <Form.Item label="Heure de fin">
//             <DatePicker.TimePicker
//               localizer={localizer}
//               onChange={handleEndTimeChange}
//               defaulValue={moment(endTime, "LT")}
//             />
//           </Form.Item>
//           <Form.Item label="Nombre de places">
//             <input
//               type="number"
//               min="1"
//               max="10"
//               value={placeNumber}
//               onChange={(e) => setPlaceNumber(e.target.value)}
//             />
//           </Form.Item>
//         </Form>
//       </Modal>
//       <Button
//         className="gradient-linear text-white"
//         type="button"
//         onClick={showModal}
//       >
//         Disponibilité
//       </Button>
//     </div>
//   );
// }

// export default Agenda;
