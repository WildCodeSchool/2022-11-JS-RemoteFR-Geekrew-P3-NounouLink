import { useState, useEffect } from "react";
import userAPI from "../services/userAPI";

function NannyReservation() {
  const [reservationCard, setReservationCard] = useState([]);

  useEffect(() => {
    userAPI
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/reservations`)
      .then((res) => setReservationCard(res.data));
  }, []);

  return (
    <div>
      <p>
        Ed Cannan <br />
        Profil 100%
      </p>
      {reservationCard.map((reservation, index) => {
        const formattedReservation = {
          ...reservation,
          startdate: new Date(reservation.startdate).toLocaleString("fr-FR", {
            timeZone: "Europe/Paris",
          }),
          enddate: new Date(reservation.enddate).toLocaleString("fr-FR", {
            timeZone: "Europe/Paris",
          }),
        };

        return (
          <div
            className="flex flex-row justify-around"
            key={reservation.id ?? index}
          >
            <p>{formattedReservation.reservationok}</p>
            <p>Date d'arrivée : {formattedReservation.startdate}</p>
            <p>Date de départ : {formattedReservation.enddate}</p>
            <p>{formattedReservation.frequence}</p>
            <p>{formattedReservation.flexibility}</p>
          </div>
        );
      })}
    </div>
  );
}

export default NannyReservation;
