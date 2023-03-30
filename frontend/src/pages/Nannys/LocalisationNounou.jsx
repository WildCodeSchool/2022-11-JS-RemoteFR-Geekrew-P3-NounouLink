import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import userAPI from "../../services/userAPI";
import locAPI from "../../services/locApi";

import { useUserContext } from "../../contexts/UserContext";
import arrow from "../../assets/pro/arrowRight.svg";
import creerAnnonce from "../../assets/pro/creerAnnonce.svg";
import back from "../../assets/pro/chevron-left.svg";

import NavbarNounou from "../../components/NavbarNounou";

function LocalisationNounou() {
  const [adresse, setAdresse] = useState([]);
  const [zip, setZip] = useState([]);
  const [city, setCity] = useState([]);
  const { setUserId, userId, nannyId } = useUserContext();

  const navigate = useNavigate();
  useEffect(() => {
    userAPI.get(`/api/nounous/${nannyId}`).then((res) => {
      setUserId(res.data.users_idusers);
    });
  }, []);

  useEffect(() => {
    userAPI.get(`/api/users/${userId}`).then((response) => {
      setAdresse(`${response.data.adress}`.split(",")[0]);
      setZip(`${response.data.adress}`.split(",")[1]);
      setCity(`${response.data.adress}`.split(",")[2]);
    });
  }, [userId]);

  const handleGeoLoc = () => {
    navigator.geolocation.getCurrentPosition((position) =>
      locAPI
        .get(
          `?lon=${position.coords.longitude}&lat=${position.coords.latitude}`
        )
        .then((res) => {
          setAdresse(res.data.features[0].properties.name);
          setZip(res.data.features[0].properties.postcode);
          setCity(res.data.features[0].properties.city);
        })
    );
  };

  const locFormat = [`${adresse}, ${zip}, ${city}`].join(",");

  const handleSubmit = (e) => {
    e.preventDefault();
    userAPI.put(`/api/users/${userId}`, { adress: locFormat });
    navigate("/pro-photos");
  };

  return (
    <div className="font-red-hat flex flex-col w-full h-full grow">
      <NavbarNounou progress="w-4/12" link="Localisation" />
      <div className="flex flex-row w-full h-full">
        <div className="font-red-hat flex flex-col justify-evenly w-full min-h-fit px-8">
          <h3 className="text-black font-medium text-lg ">
            Où se situe votre structure ?
          </h3>
          <p className="text-black font-regular text-base">
            Les parents n’obtiendront l’adresse exacte qu’après avoir effectué
            la réservation
          </p>
          <button
            type="button"
            className="border border-purple-pro text-purple-pro rounded-full py-2 min-w-fit"
            onClick={handleGeoLoc}
          >
            Utiliser l’emplacement actuel
          </button>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full justify-around px-8"
          >
            <label
              htmlFor="adresse"
              className="flex flex-col w-full justify-evenly text-base"
            >
              Adresse postale:
              <input
                type="text"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                name="adresse"
                className="rounded-xl p-2 max-w-max ring ring-teal-500 my-2"
              />
            </label>
            <label
              htmlFor="ZIP"
              className="flex flex-col w-full justify-evenly text-base"
            >
              Code Postal:
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                name="ZIP"
                className="rounded-xl p-2 max-w-max ring ring-teal-500 my-2"
              />
            </label>
            <label
              htmlFor="city"
              className="flex flex-col w-full justify-evenly text-base"
            >
              Ville:
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                name="city"
                className="rounded-xl p-2 max-w-max ring ring-teal-500 my-2"
              />
            </label>
          </form>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate("/pro-modeaccueil")}
              className="text-purple flex items-center"
            >
              <img src={back} alt="chevron retour en arrière" />
              Retour
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className=" flex items-center justify-between gap-2 self-end rounded-full bg-purple text-white font-nunito font-semibold text-base py-2 px-6 max-w-max"
            >
              Suivant
              <img src={arrow} alt="fleche" />
            </button>
          </div>
        </div>
        <div className="max-lg:hidden font-red-hat flex flex-col justify-between w-full grow h-full bg-greyish-blue">
          <div className="rounded-3xl bg-white flex flex-col justify-center w-4/6 p-4 text-center self-center mt-8">
            <img
              src={creerAnnonce}
              alt="créer une annonce"
              className="justify-self-center "
            />
            <h2 className="font-medium text-base">Créer votre annonce</h2>
            <p className=" ">
              En sélectionnant les catégories adéquates, vous aidez les parents
              à savoir à quoi s'attendre concernant l’accueil de leur enfant au
              sein de votre structure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocalisationNounou;
