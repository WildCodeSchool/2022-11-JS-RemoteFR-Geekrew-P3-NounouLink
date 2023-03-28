import { useState, useEffect } from "react";
import userAPI from "../services/userAPI";
import moment from "moment";

function NannyReservation() {
  const [reservations, setReservations] = useState([]);
  const [children, setChildren] = useState([]);

  useEffect(() => {
    userAPI
      .get(`/api/reservations`)
      .then((res) => {
        setReservations(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    userAPI
      .get(`/api/enfants`)
      .then((res) => {
        setChildren(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const getChildInfo = (childId) => {
    const child = children.find((e) => e.childrenId === childId);
    return child
      ? `${child.firstname} ${child.lastname} (${new Date(
          child.birthdate
        ).toLocaleDateString("fr-FR", {
          timeZone: "Europe/Paris",
        })})`
      : "";
  };

  return (
    <div>
      {reservations.map((reservation, index) => (
        <div
          className="flex flex-row justify-"
          key={reservation.idreservations ?? index}
        >
          <p>{getChildInfo(reservation.childrenId)}</p>
          <p>{reservation.reservationok}</p>
          <p>
            Date d'arrivée :{moment(reservation.startdate).format("DD/MM/YYYY")}
          </p>

          <p>
            Date de départ :{moment(reservation.enddate).format("DD/MM/YYYY")}
          </p>
        </div>
      ))}
    </div>
  );
}

export default NannyReservation;
