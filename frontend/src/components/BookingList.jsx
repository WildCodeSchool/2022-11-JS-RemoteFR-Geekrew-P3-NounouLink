import { useState, useEffect } from "react";
import userAPI from "../services/userAPI";
import BookingCards from "./BookingCards";

function BookingList() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    userAPI
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/creneaux`)
      .then((response) => {
        setReservations(response.data);
      });
  }, []);

  return (
    <div>
      {reservations.map((reservation) => (
        <BookingCards key={reservation.id} reservation={reservation} />
      ))}
    </div>
  );
}

export default BookingList;
