import { useState, useEffect } from "react";
import moment from "moment";
import userAPI from "../services/userAPI";
import { useUserContext } from "../contexts/UserContext";

function NannyReservation() {
  const { nannyId } = useUserContext();
  const [reservations, setReservations] = useState([]);
  const [children, setChildren] = useState([]);

  useEffect(() => {
    userAPI
      .get(`/api/reservations`)
      .then((res) => {
        setReservations(
          res.data.filter((reservation) => reservation.nannyId === nannyId)
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, [nannyId]);

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
            Date d'arrivée :
            {moment(reservation.startdate).format("DD/MM/YYYY HH:mm:ss")}
          </p>

          <p>
            Date de départ :
            {moment(reservation.enddate).format("DD/MM/YYYY HH:mm:ss")}
          </p>
        </div>
      ))}
    </div>
  );
}

export default NannyReservation;
