import React from "react";
import { useNavigate } from "react-router-dom";

import userAPI from "../../services/userAPI";

import { useUserContext } from "../../contexts/UserContext";
import arrow from "../../assets/pro/arrowRight.svg";
import creerAnnonce from "../../assets/pro/heroAnnonce.svg";
import back from "../../assets/pro/chevron-left.svg";

import NavbarNounou from "../../components/NavbarNounou";

function PresentationNounou() {
  const { nannyId, presentation, setPresentation } = useUserContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    userAPI
      .put(`/api/nounous/${nannyId}`, { presentation })
      .then((res) => res.data);

    navigate("/pro-diplome");
  };

  return (
    <div className="font-red-hat flex flex-col w-full h-full grow">
      <NavbarNounou progress="w-8/12" link="Présentation" />
      <div className="flex flex-row w-full h-full">
        <div className="font-red-hat flex flex-col justify-evenly w-full min-h-fit px-8">
          <h3 className="text-black font-medium text-lg ">
            Présentez vous auprès des parents{" "}
          </h3>
          <p className="text-black font-regular text-base">
            Présentez vous et décrivez votre expérience. Indiquez les activités
            d’éveil que vous proposez aux enfants, respect du rythme de
            l’enfant, activités, sorties, pédagogie... Décrivez les espaces de
            jeu, le lieu de sommeil, les équipements dont vous disposez
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between items-center w-full"
          >
            <label
              className="text-purple-pro flex flex-col w-full"
              htmlFor="presentation"
            >
              <input
                type="text"
                value={presentation}
                className=" border-2 border-purple-pro p-4 text-grey rounded-2xl w-full min-h-[10rem] md:min-h-[15rem]"
                onChange={(e) => setPresentation(e.target.value)}
              />
            </label>
          </form>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate("/pro-photosannonce")}
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
export default PresentationNounou;
