import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import userAPI from "../../services/userAPI";

import { useUserContext } from "../../contexts/UserContext";
import arrow from "../../assets/pro/arrowRight.svg";
import creerAnnonce from "../../assets/pro/creerAnnonce.svg";
import back from "../../assets/pro/chevron-left.svg";

import NavbarNounou from "../../components/NavbarNounou";

function PhotosNounou() {
  // const [profilePicNanny, setProfilePicNanny] = useState([]);
  const [profilePicNanny, setProfilePicNanny] = useState([]);

  const { nannyId, setNannyId } = useUserContext();

  setNannyId(2);

  const navigate = useNavigate();

  useEffect(
    () => (nannyId !== null ? userAPI.get(`/api/nounous/${nannyId}`) : null),
    [nannyId]
  );

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files;
    setProfilePicNanny(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profilePicNanny", profilePicNanny[0]);

    userAPI
      .put(`/api/nounous/${nannyId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => res.data);
  };

  return (
    <div className="font-red-hat flex flex-col w-full h-full grow">
      <NavbarNounou progress="20%" link="Photos" />
      <div className="flex flex-row w-full h-full">
        <div className="font-red-hat flex flex-col justify-evenly w-full min-h-fit px-8">
          <h3 className="text-black font-medium text-lg ">
            Ajoutez votre photo de profil
          </h3>
          <p className="text-black font-regular text-base">
            Veillez à ce que votre photo montre clairement votre visage
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between items-center w-full"
          >
            <div className=" border-4 border-purple-pro text-purple-pro rounded-full h-28 w-28 flex items-center justify-center">
              {profilePicNanny.length && (
                <img
                  className="max-h-24 max-w-24 self-center  rounded-full"
                  src={URL.createObjectURL(profilePicNanny[0])}
                  alt="test"
                />
              )}
            </div>
            <label className="text-purple-pro flex flex-col" htmlFor="">
              Télécharger une photo
              <input
                type="file"
                className=" border-2 border-purple-pro text-purple-pro rounded-full "
                onChange={handleFileUpload}
              />
            </label>
          </form>

          {/* <form
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
          </form> */}
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
            <p>Veillez à ce que votre photo montre clairement votre visage</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotosNounou;
