import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import userAPI from "../services/userAPI";

import { useUserContext } from "../contexts/UserContext";

import back from "../assets/chevron-white.svg";
import info from "../assets/pricing.svg";

function NannyInfoCard() {
  const [nannyCard, setNannyCard] = useState([]);
  const [nannyServices, setNannyServices] = useState([]);
  const [nannyDetails, setNannyDetails] = useState([]);

  const { parentId, userId, childrenId } = useUserContext();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    userAPI.get(`/api/nounous/${id}`).then((res) => setNannyCard([res.data]));
  }, []);

  useEffect(() => {
    userAPI
      .get(`/api/servicesNounous/${id}`)
      .then((res) => setNannyServices(res.data));

    userAPI
      .get(`/api/nounous/infos/${id}`)
      .then((res) => setNannyDetails([res.data]));
  }, []);

  const matchSearch = JSON.parse(localStorage.getItem("matchSearch"));
  const beginParent = new Date(matchSearch[2]).getTime();

  const endParent = new Date(matchSearch[3]).getTime();

  const hourlyRate = nannyCard.map((prix) => parseInt(prix.hourly_rate, 10));

  const total = ((endParent - beginParent) / 1000 / 60 / 60) * hourlyRate;

  const handleReservation = () => {
    userAPI
      .post(`/api/reservations`, {
        parentsIdparents: parentId,
        parentsUsersIdusers: userId,
        nanniesIdnannies: nannyCard[0].idnannies,
        nanniesUsersIdusers: nannyCard[0].users_idusers,
        reservationok: false,
        startdate: matchSearch[2],
        enddate: matchSearch[3],
        frequence: null,
        flexibility: null,
        childrenIdchildren: childrenId,
        childrenParentsIdparents: parentId,
        childrenParentsUsersIdusers: userId,
      })
      .then((res) => {
        console.warn(res);
      })
      .catch((error) => {
        console.error(error);
      });
    navigate("/confirmationReservation");
  };

  return (
    <main className="gradient-linear w-full flex flex-col items-center grow">
      <header className="text-white font-bold font-nunito text-3xl flex justify-center">
        <button type="button" onClick={() => navigate(-1)}>
          <img src={back} alt="Revenir en arrière" />{" "}
        </button>
        <h2 className="px-auto"> Revenir aux résultats</h2>
      </header>
      <div className="bg-white m-7 rounded-2xl flex flex-col h-full max-w-lg">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
            nannyCard[0]?.pictures
          }`}
          alt="annonce"
          className="aspect-video rounded-t-2xl"
        />
        <div className="p-2">
          <h3 className="font-nunito font-bold text-2xl text-black">
            Présentation
          </h3>
          <p className="font-normal font-nunito text-base text-grey px-4 py-1">
            {nannyCard.map((nanny) => nanny.presentation)}
          </p>

          {nannyDetails.map((details) => (
            <div
              className="flex w-full justify-evenly gradient-blue text-black font-nunito font-semibold"
              key={details.idnannies}
            >
              <img src={info} alt="personnal details" />
              <div className="flex flex-col">
                <p> Mail: {details.email}</p>
                <p> Tél: {details.phone}</p>
              </div>
            </div>
          ))}

          <h3 className="font-nunito font-bold text-2xl text-black">
            Expérience
          </h3>
          {nannyCard.map((nanny) => (
            <p className="font-normal font-nunito text-base text-grey px-4 py-1">
              {nanny.psc1 ? <p>Formation Premiers Secours</p> : null}
              {nanny.pedagogy ? <p>Pédagogie Montessori</p> : null}
            </p>
          ))}

          <h3 className="font-nunito font-bold text-2xl text-black">Accueil</h3>
          <h4 className="font-normal font-nunito text-base text-grey">
            {nannyServices
              .filter((service) => service.services_idservices <= 6)
              .map((service) => (
                <h6 className="px-4 py-1" key={service.services_idservices}>
                  {service.serviceName === "sortie" && (
                    <p>Sorties extérieures possibles</p>
                  )}
                  {service.serviceName === "jardin" && <p>Jardin</p>}
                  {service.serviceName === "animaux" && (
                    <p>Animal domestique</p>
                  )}
                  {service.serviceName === "repas" && <p>Repas proposés</p>}
                  {service.serviceName === "non_fumeur" && (
                    <p>Foyer Non-Fumeur</p>
                  )}
                  {service.serviceName === "hygiene" && <p>Couches fournies</p>}
                </h6>
              ))}
          </h4>
          <h3 className="font-nunito font-bold text-2xl text-black">
            Activité
          </h3>
          <h4 className="font-normal font-nunito text-base text-grey">
            {nannyServices
              .filter((service) => service.services_idservices > 6)
              .map((service) => (
                <p className="px-4 py-1" key={service.services_idservices}>
                  {service.serviceName === "promenade" && <p>Promenades</p>}
                  {service.serviceName === "art" && (
                    <p>Activités artistiques</p>
                  )}
                  {service.serviceName === "bibliothèque" && (
                    <p>Bibliothèque / Ludothèque / RAM</p>
                  )}
                  {service.serviceName === "transport" && <p>Transport</p>}
                  {service.serviceName === "langue" && (
                    <p>Possibilité d'échanger dans une autre langue</p>
                  )}
                  {service.serviceName === "eveil" && <p>Activités d'éveil</p>}
                  {service.serviceName === "musique" && (
                    <p>Ateliers de musique</p>
                  )}
                </p>
              ))}
          </h4>
        </div>
        <div className="flex font-nunito justify-between items-center w-full p-2">
          <div className="flex flex-col">
            <h5 className="text-black font-semibold text-lg flex">
              Coût Total:<p> {parseInt(total, 10)}€</p>
            </h5>
          </div>

          <button
            type="button"
            className="btn-purple max-w-[130px]"
            onClick={handleReservation}
          >
            Réserver
          </button>
        </div>
      </div>
      {nannyCard.map((options) => (
        <div
          className=" flex p-4 flex-wrap justify-between font-nunito"
          key={options.id}
        >
          <h5 className="text-black font-normal text-sm flex">
            Heures suppl.: {options.overtime}€
          </h5>
          <h5 className="text-black font-normal text-sm flex">
            Dimanches & jours fériés: {options.tariff_major}€
          </h5>
        </div>
      ))}
    </main>
  );
}

export default NannyInfoCard;
