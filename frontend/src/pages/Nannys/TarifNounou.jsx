import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import userAPI from "../../services/userAPI";

import { useUserContext } from "../../contexts/UserContext";
import arrow from "../../assets/pro/arrowRight.svg";
import creerAnnonce from "../../assets/pro/heroAnnonce.svg";
import back from "../../assets/pro/chevron-left.svg";

import NavbarNounou from "../../components/NavbarNounou";

function TarifNounou() {
  const { nannyId } = useUserContext();

  const [hourlyRate, setHourlyRate] = useState([]);
  const [tariffMajor, setTariffMajor] = useState([]);
  const [overtime, setOvertime] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (nannyId !== null)
      userAPI.get(`/api/nounous/${nannyId}`).then((response) => {
        // console.log(response.data);
        setHourlyRate(`${response.data.hourly_rate}`);
        setTariffMajor(`${response.data.tariff_major}`);
        setOvertime(`${response.data.overtime}`);
      });
  }, [nannyId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    userAPI.put(`/api/nounous/${nannyId}`, {
      hourlyRate,
      tariffMajor,
      overtime,
    });
    navigate("/pro-localisation");
  };

  return (
    <div className="font-red-hat flex flex-col w-full h-full grow">
      <NavbarNounou progress="80%" link="Tarif" />
      <div className="flex flex-row w-full h-full">
        <div className="font-red-hat flex flex-col justify-evenly w-full min-h-fit px-8">
          <h3 className="text-black font-medium text-lg ">
            Renseignez votre tarif horaire
          </h3>
          <p className="text-black font-regular text-base">
            Vous pourrez changer ce tarif à tout moment dans votre compte.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full justify-around px-8"
          >
            <label
              htmlFor="tarif horaire"
              className="flex flex-col w-full justify-evenly text-base"
            >
              Tarif horaire:
              <input
                type="text"
                value={`${hourlyRate}€`}
                onChange={(e) => setHourlyRate(e.target.value)}
                name="tarif horaire"
                className="rounded-xl p-2 max-w-max ring ring-grey-input my-2"
              />
            </label>
            <label
              htmlFor="heures spécifiques"
              className="flex flex-col w-full justify-evenly text-base"
            >
              Heures spécifiques (horaire 22h-6h, dimanche,jour férié)
              <input
                type="text"
                value={`${tariffMajor}€`}
                onChange={(e) => setTariffMajor(e.target.value)}
                name="heures spécifiques"
                className="rounded-xl p-2 max-w-max ring ring-grey-input my-2"
              />
            </label>
            <label
              htmlFor="heures majorées"
              className="flex flex-col w-full justify-evenly text-base"
            >
              Heures complémentaires majorées (au delà de 45h/semaine)
              <input
                type="text"
                value={`${overtime}€`}
                onChange={(e) => setOvertime(e.target.value)}
                name="heures majorées"
                className="rounded-xl p-2 max-w-max ring ring-grey-input my-2"
              />
            </label>
          </form>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate("/pro-securite")}
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
          <div className="rounded-3xl bg-white flex flex-col justify-between w-4/6 gap-4 p-4 text-center self-center mt-8">
            <img
              src={creerAnnonce}
              alt="créer une annonce"
              className="justify-self-center "
            />
            <h2 className="font-medium text-base">
              Commencez avec un prix plus bas pour attirer les réservations{" "}
            </h2>
            <p className="w-5/6 self-center text-justify">
              Les nouveaux professionnels inscrits sur Babyplace commencent avec
              un prix plus bas pour attirer leurs premières réservations. <br />
              Ils ont ainsi plus d’avis de la part de parents, ce qui leur
              permet de gagner en crédibilité.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TarifNounou;
