import React, { useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";
import userAPI from "../services/userAPI";

function Reservation() {
  const { parentId } = useUserContext();
  // const [reservation, setReservation] = useState();

  useEffect(() => {
    userAPI.get(`/api/reservations`).then((response) => {
      // console.log(response.data);
      response.data.filter((child) => child.parents_idparents === parentId);
    });
  }, []);
  return <div>Reservation</div>;
}

export default Reservation;
