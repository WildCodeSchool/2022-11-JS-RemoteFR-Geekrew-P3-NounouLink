import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

// import { useUserContext } from "../contexts/UserContext";

import back from "../assets/chevron-white.svg";

function NannyInfoCard() {
  const [nannyCard, setNannyCard] = useState([]);
  const [nannyServices, setNannyServices] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

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

  const matchSearch = JSON.parse(localStorage.getItem("matchSearch"));
  const beginParent = new Date(matchSearch[2]).getTime();

  const endParent = new Date(matchSearch[3]).getTime();

  const hourlyRate = nannyCard.map((prix) => parseInt(prix.hourly_rate, 10));

  const total = ((endParent - beginParent) / 1000 / 60 / 60) * hourlyRate;

  return (
    <main className="gradient-linear">
      <header className="text-white font-bold font-nunito text-3xl flex justify-center">
        <button type="button" onClick={() => navigate(-1)}>
          <img src={back} alt="Revenir en arrière" />{" "}
        </button>
        <h2 className="px-auto"> {nannyCard.map((nanny) => nanny.ad_name)}</h2>
      </header>
      <div className="bg-white h-full m-7 rounded-2xl">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
            nannyCard[0]?.pictures
          }`}
          alt="annonce"
          className="aspect-video rounded-t-2xl"
        />
        <div className="p-2">
          <h3 className="font-nunito font-bold text-2xl text-black">
            Présentation
          </h3>
          <p className="font-normal text-base text-grey px-4 py-1">
            {nannyCard.map((nanny) => nanny.presentation)}
          </p>
          <h3 className="font-nunito font-bold text-2xl text-black">Accueil</h3>
          <h4 className="font-normal text-base text-grey">
            {nannyServices
              .filter(
                (service) =>
                  service.services_idservices === 3 ||
                  service.services_idservices === 1 ||
                  service.services_idservices === 5
              )
              .map((service) => (
                <p className="px-4 py-1">{service.serviceName}</p>
              ))}
          </h4>
          <h3 className="font-nunito font-bold text-2xl text-black">
            Activité
          </h3>
          <h4 className="font-normal text-base text-grey">
            {nannyServices
              .filter(
                (service) =>
                  service.services_idservices === 7 ||
                  service.services_idservices === 8 ||
                  service.services_idservices === 9
              )
              .map((service) => (
                <p className="px-4 py-1">{service.serviceName}</p>
              ))}
          </h4>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-black font-semibold text-2xl">
            Coût Total : {parseInt(total, 10)}€
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
