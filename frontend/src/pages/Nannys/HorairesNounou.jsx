import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import arrow from "../../assets/pro/arrowRight.svg";
import creerAnnonce from "../../assets/pro/heroAnnonce.svg";
import back from "../../assets/pro/chevron-left.svg";

import NavbarNounou from "../../components/NavbarNounou";
import DayList from "../../components/DayList";

function HorairesNounou() {
  const [dayList, setDayList] = useState([
    {
      id: 1,
      value: "1",
      label: "Lundi",
      pass: false,
    },
    {
      id: 2,
      value: "2",
      label: "Mardi",
      pass: false,
    },
    {
      id: 3,
      value: "3",
      label: "Mercredi",
      pass: false,
    },
    {
      id: 4,
      value: "4",
      label: "Jeudi",
      pass: false,
    },
    {
      id: 5,
      value: "5",
      label: "Vendredi",
      pass: false,
    },
    {
      id: 6,
      value: "6",
      label: "Samedi",
      pass: false,
    },
    {
      id: 0,
      value: "0",
      label: "Dimanche",
      pass: false,
    },
  ]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/pro-tarif");
  };

  const handleToggleDay = (dayId, nextPass) => {
    setDayList(
      dayList.map((day) => {
        if (day.id === dayId) {
          // Create a *new* object with changes
          return { ...day, pass: nextPass };
        }
        return day;
      })
    );
  };

  return (
    <div className="font-red-hat flex flex-col w-full h-full grow">
      <NavbarNounou progress="w-10/12" link="Horaires" />
      <div className="flex flex-row w-full h-full">
        <div className="font-red-hat flex flex-col justify-evenly w-full min-h-fit px-8">
          <h3 className="text-black font-medium text-lg ">
            Quels sont vos horaires pour les prochains jours ?
          </h3>
          <p className="text-black font-regular text-base">
            Renseignez ici les horaires d’accueil habituels, cet horaire sera
            renseigné sur votre fiche de présentation. Cela ne concerne pas vos
            disponibilités et vos plages de réservation.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-row justify-evenly items-center w-full"
          >
            <DayList days={dayList} onToggle={handleToggleDay} />
            <div className="flex-col">
              <p className="">Mêmes horaires pour tous les jours:</p>
              <label
                className="text-purple-pro flex flex-col "
                htmlFor="startDate"
              >
                <input type="time" name="startDate" />
              </label>
              <label
                className="text-purple-pro flex flex-col"
                htmlFor="endDate"
              >
                <input type="time" name="endDate" />
              </label>
            </div>
          </form>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate("/pro-photos")}
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
              Inspirez vous des annonces Babyplace
            </h2>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="h-10 w-10 bg-grey rounded-full" />
              <p>
                Anne Testons
                <br />
                Assistante maternelle
                <br />
                Membre depuis 2019
              </p>
            </div>
            <p className="w-5/6 self-center text-justify">
              Assistante maternelle agrée 2013, je vous propose mes services
              pour garder votre ou vos enfants à mon domicile, rez de chaussée
              avec jardin, proche du tram. <br /> Je suis maman de 3 enfants et
              mamie de 5 petits enfants de 3 mois à 12 ans. J'ai une expérience
              en garde d'enfants de quelques années .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorairesNounou;
