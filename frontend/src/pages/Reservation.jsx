// import React, { useEffect, useState } from "react";
// import { useUserContext } from "../contexts/UserContext";
// import userAPI from "../services/userAPI";

// function Reservation() {
//   const { parentId, firstname } = useUserContext();
//   const [reservation, setReservation] = useState();

//   useEffect(() => {
//     userAPI.get(`/api/reservations`).then((response) => {
//       // console.log(response.data);
//       console.log(
//         response.data.filter((resa) => resa.parents_idparents === parentId)
//       );
//     });
//   }, []);

//   return (
//     <div>
//     {firstname}

//     </div>
//   );
// }

// export default Reservation;
