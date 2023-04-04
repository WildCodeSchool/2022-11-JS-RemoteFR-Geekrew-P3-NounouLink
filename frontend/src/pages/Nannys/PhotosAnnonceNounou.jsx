import React from "react";
import { useNavigate } from "react-router-dom";

import userAPI from "../../services/userAPI";

import { useUserContext } from "../../contexts/UserContext";
import arrow from "../../assets/pro/arrowRight.svg";
import creerAnnonce from "../../assets/pro/heroAnnonce.svg";
import back from "../../assets/pro/chevron-left.svg";

import NavbarNounou from "../../components/NavbarNounou";

function PhotosAnnonceNounou() {
  const { nannyId, pictures, setPictures } = useUserContext();

  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files;
    setPictures(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("pictures", pictures[0]);

    userAPI
      .put(`/api/nounous/${nannyId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => res.data);

    navigate("/pro-presentation");
  };

  return (
    <div className="font-red-hat flex flex-col w-full h-full grow">
      <NavbarNounou progress="w-7/12" link="Photos" />
      <div className="flex flex-row w-full h-full">
        <div className="font-red-hat flex flex-col justify-evenly w-full min-h-fit px-8">
          <h3 className="text-black font-medium text-lg ">
            Égayez votre annonce avec des photos
          </h3>
          <p className="text-black font-regular text-base">
            Prenez des photos avec un téléphone ou un appareil photo.
            Téléchargez au moins une photo pour publier votre annonce. Vous
            pourrez toujours en ajouter d'autres ou apporter des modifications
            par la suite.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between items-center w-full"
          >
            <label className="text-purple-pro flex flex-col" htmlFor="">
              Télécharger une photo
              <input
                type="file"
                className=" border-2 border-purple-pro text-purple-pro rounded-full "
                onChange={handleFileUpload}
              />
            </label>
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
          <div className="rounded-3xl bg-white flex flex-col justify-center w-4/6 p-4 text-center self-center mt-8">
            <img
              src={creerAnnonce}
              alt="créer une annonce"
              className="justify-self-center "
            />
            <h2 className="font-medium text-base">
              Conseils rapides pour des photos de qualité
            </h2>
            <p className=" ">
              Désencombrez votre pièce Utilisez la lumière naturelle du jour et
              évitez le flash Prenez des photos en mode paysage depuis les coins
              des pièces Centrez la prise de vue à égale distance entre le sol
              et le plafond Mettez en valeur les équipements et jeux d’éveil
              Ajoutez des photos de toutes les pièces auxquelles les enfants ont
              accès
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotosAnnonceNounou;
