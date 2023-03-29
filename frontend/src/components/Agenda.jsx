// import { useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "moment/locale/fr";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { Button, Modal, Form, DatePicker, TimePicker } from "antd";
// import userAPI from "../services/userAPI";

// import "react-tabs/style/react-tabs.css";

// import EventCard from "../components/EventCard";
// moment.locale("fr");

// const localizer = momentLocalizer(moment);

// function Agenda() {
//   const [events, setEvents] = useState(
//     JSON.parse(localStorage.getItem("events")) || []
//   );
//   const [nannyId, setNannyId] = useState("");
//   const [idSlots, setIdslots] = useState("");
//   const [captionDay, setCaptionDay] = useState("");
//   const [beginningHour, setBeginningHour] = useState("");
//   const [endTime, setEndTime] = useState("");
//   const [placeNumber, setPlaceNumber] = useState("");

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

//   const handleSelect = ({ start, end }) => {
//     const title = window.prompt("Nouvel événement :");
//     if (title) {
//       userAPI.get("/api/users").then((res) => {
//         const userId = res.data.idusers;
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

//   const handleSlot = (event) => {
//     event.preventDefault();
//     if (nannyId === null) {
//       if (
//         nanniesUsersIdusers &&
//         captionDay &&
//         beginningHour &&
//         endTime &&
//         placeNumber
//       )
//         userAPI
//           .post("/api/creneaux", {
//             nanniesUsersIdusers,
//             captionDay,
//             beginningHour,
//             endTime,
//             placeNumber,
//           })
//           .then((response) => {
//             setNannyId(response.data.nannyId);
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//     } else {
//       {
//         if (
//           nanniesUsersIdusers &&
//           captionDay &&
//           beginningHour &&
//           endTime &&
//           placeNumber
//         )
//           userAPI
//             .put(`/api/creneaux/:${idSlots}`, {
//               nanniesUsersIdusers,
//               captionDay,
//               beginningHour,
//               endTime,
//               placeNumber,
//             })
//             .then((response) => {
//               setNannyId(response.data.nannyId);
//             })
//             .catch((error) => {
//               console.error(error);
//             });
//       }
//     }
//     const showModal = () => {
//       setVisible(true);
//     };

//     const handleOk = () => {
//       const endTimevalue = document.getElementById("endTime").value;
//       const endTime = moment(endTimevalue, "HH:mm");
//       const newEvent = {
//         id: uuidv4(),
//         start: moment(date).set({
//           hour: moment(startTime, "LT").hours(),
//           minute: moment(startTime, "LT").minutes(),
//         }),
//         end: moment(date).set({
//           hour: endTime.hours(),
//           minute: endTime.minutes(),
//         }),
//         title: "Disponibilité",
//       };

//       setEvents([...events, newEvent]);
//       setVisible(false);
//     };
//   };

//   const handleCancel = () => {
//     setVisible(false);
//   };

//   const handleDateChange = (value) => {
//     setDate(value);
//   };

//   const handleStartTimeChange = (time) => {
//     setStartTime(moment(time).format("LT"));
//   };

//   const handleEndTimeChange = (time) => {
//     setEndTime(moment(time).format("LT"));
//   };
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
//           onSelectSlot={handleSelect}
//         />
//         {events.map((event) => (
//           <EventCard
//             key={event.id}
//             title={event.title}
//             date={moment(event.start).format("L")}
//             time={`${moment(event.start).format("LT")} - ${moment(
//               event.end
//             ).format("LT")}`}
//             onDelete={() => {
//               setEvents((preEvents) =>
//                 preEvents.filter((e) => e.id !== event.id)
//               );
//             }}
//           />
//         ))}
//       </div>
//       <Button
//         className="gradient-linear text-white"
//         type="button"
//         onClick={showModal}
//       >
//         Disponibilité
//       </Button>
//       <Modal
//         title="Ajouter une disponibilité"
//         open={visible}
//         onClick={handleSlot}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         className="bg-white"
//       >
//         <Form>
//           <Form.Item label="Date">
//             <DatePicker value={date} onChange={handleDateChange} />
//           </Form.Item>
//           <Form.Item label="Date">
//             <DatePicker value={date} onChange={handleDateChange} />
//           </Form.Item>
//           <Form.Item label="Heure de début">
//             <TimePicker
//               format="HH:mm"
//               defaultValue={moment()}
//               onChange={(time) => setStartTime(moment(time).format("LT"))}
//             />
//           </Form.Item>
//           <Form.Item label="Heure de fin">
//             <TimePicker
//               format="HH:mm"
//               defaultValue={moment()}
//               onChange={(time) => setEndTime(moment(time).format("LT"))}
//             />
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// }

// export default Agenda;
