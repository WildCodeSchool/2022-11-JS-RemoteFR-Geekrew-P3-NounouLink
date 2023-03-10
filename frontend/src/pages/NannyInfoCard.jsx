import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// import { useUserContext } from "../contexts/UserContext";

import back from "../assets/chevron-white.svg";

function NannyInfoCard() {
  const [nannyCard, setNannyCard] = useState([]);
  const [nannyServices, setNannyServices] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/nounous/${id}`)
      .then((res) => setNannyCard([res.data]));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/servicesNounous/${id}`)
      .then((res) => setNannyServices(res.data));
  }, []);

  return (
    <main className="gradient-linear">
      <header className="text-white font-bold font-nunito text-3xl flex justify-center">
        <img src={back} alt="Revenir en arrière" />
        <h2 className="px-auto"> {nannyCard.map((nanny) => nanny.ad_name)}</h2>
      </header>
      <div className="bg-white h-full m-7 rounded-2xl">
        <img
          src={nannyCard.map((img) => `/resultat/2/${img.pictures}`)}
          alt="annonce"
        />
        <div>
          <h3 className="font-nunito font-bold text-2xl text-black">
            Présentation
          </h3>
          <p className="font-normal text-base text-grey">
            {nannyCard.map((nanny) => nanny.presentation)}
          </p>
          <h3 className="font-nunito font-bold text-2xl text-black">Accueil</h3>
          <p className="font-normal text-base text-grey">
            {nannyServices
              .filter(
                (service) =>
                  service.services_idservices === 3 ||
                  service.services_idservices === 1 ||
                  service.services_idservices === 5
              )
              .map((service) => (
                <p>{service.serviceName}</p>
              ))}
          </p>
          <h3 className="font-nunito font-bold text-2xl text-black">
            Activité
          </h3>
          <p className="font-normal text-base text-grey">
            {nannyServices
              .filter(
                (service) =>
                  service.services_idservices === 7 ||
                  service.services_idservices === 8 ||
                  service.services_idservices === 9
              )
              .map((service) => (
                <p>{service.serviceName}</p>
              ))}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-black font-semibold text-2xl">
            {nannyCard.map((prix) => prix.hourly_rate)}€
          </p>
          <button type="button" className="btn-purple max-w-[200px]">
            Réserver
          </button>
        </div>
      </div>
    </main>
  );
}

export default NannyInfoCard;
