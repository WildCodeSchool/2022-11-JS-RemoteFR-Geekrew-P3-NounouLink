import React, { useEffect, useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import userAPI from "../services/userAPI";
import Navbar from "../components/Navbar";

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
    const child = children.find((e) => e.idchildren === childId);

    return child ? `${child.firstname} ${child.lastname} ` : "";
  };

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="flex flex-col  rounded justify-center mt-10  ">
        {reservation.map((resa) => (
          <div
            className={`flex flex-row items-center mx-10 mt-5 h-32 border-2 rounded-lg shadow-md gap-10 text-lg ${
              resa.reservationok === 0 ? "border-red-400" : "border-green-400"
            }`}
            key={resa.idreservation}
          >
            <div className="flex flex-col mx-2">
              <p>Enfant:</p>
              <p>{getChildInfo(resa.children_idchildren)}</p>
            </div>
            <div className="flex flex-col mx-2">
              <p> Date d'arrivée: </p>
              <p>
                {new Date(resa.startdate).toLocaleString("fr-FR", {
                  timeZone: "Europe/Paris",
                })}
              </p>
            </div>
            <p className="flex flex-col mx-2">
              <p> Date de départ :</p>
              <p>
                {new Date(resa.enddate).toLocaleString("fr-FR", {
                  timeZone: "Europe/Paris",
                })}
              </p>
            </p>
            <p className="flex flex-col mx-2">
              <p> Nounou: </p>
              <p>
                {
                  nannyKind.filter(
                    (nanny) => nanny.idusers === resa.nannies_users_idusers
                  )[0]?.firstname
                }{" "}
                {
                  nannyKind.filter(
                    (nanny) => nanny.idusers === resa.nannies_users_idusers
                  )[0]?.lastname
                }
              </p>
            </p>
            <p className="flex flex-col items-center justify-center mx-2 ">
              {" "}
              <p>
                {resa.reservationok === 0 ? (
                  <p className="bg-red-400 rounded">En attente</p>
                ) : (
                  <p className="bg-green-400 rounded">Validée</p>
                )}
              </p>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reservation;
