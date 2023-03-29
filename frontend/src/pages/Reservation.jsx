import React, { useEffect, useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import userAPI from "../services/userAPI";

function Reservation() {
  const { parentId } = useUserContext();
  const [reservation, setReservation] = useState([]);
  const [children, setChildren] = useState([]);
  const [nannyKind, setNannykind] = useState([]);

  useEffect(() => {
    userAPI.get(`/api/reservations`).then((response) => {
      setReservation(
        response.data.filter((resa) => resa.parents_idparents === parentId)
      );
    });
  }, []);

  useEffect(() => {
    userAPI.get(`/api/enfants`).then((response) => {
      setChildren(response.data);
    });
  }, []);

  useEffect(() => {
    userAPI.get(`/api/users`).then((response) => {
      setNannykind(response.data.filter((nanny) => nanny.kind === "ass_mat"));
    });
  }, []);
  const getChildInfo = (childId) => {
    const child = children.find((e) => e.childrenId === childId);
    return child ? `${child.firstname} ${child.lastname} ` : "";
  };

  // console.log(reservation);
  // console.log(` je veux un tableau ici${Object.values(nannyKind)}`);
  // console.log(nannyKind);
  return (
    <div className=" flex flex-col justify-center">
      {reservation.map((resa) => (
        <div
          className="flex flex-row  border-2  rounded-lg drop-shadow-md gap-8"
          key={resa.idreservation}
        >
          <p className="">Enfant: {getChildInfo(reservation.childrenId)}</p>
          <p>{resa.reservationok}</p>
          <p>
            {" "}
            Date d'arrivée :
            {new Date(resa.startdate).toLocaleString("fr-FR", {
              timeZone: "Europe/Paris",
            })}
          </p>{" "}
          <p>
            {" "}
            Date de départ :
            {new Date(resa.enddate).toLocaleString("fr-FR", {
              timeZone: "Europe/Paris",
            })}
          </p>
          <p>
            {" "}
            Nom de la nounou :
            {
              nannyKind.filter(
                (nanny) => nanny.idusers === resa.nannies_users_idusers
              )[0]?.firstname
            }
            {
              nannyKind.filter(
                (nanny) => nanny.idusers === resa.nannies_users_idusers
              )[0]?.lastname
            }
          </p>
        </div>
      ))}
    </div>
  );
}

export default Reservation;
