import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import userAPI from "../../services/userAPI";

import { useUserContext } from "../../contexts/UserContext";
import arrow from "../../assets/pro/arrowRight.svg";
import creerAnnonce from "../../assets/pro/creerAnnonce.svg";
import back from "../../assets/pro/chevron-left.svg";

import NavbarNounou from "../../components/NavbarNounou";

function PhotosNounou() {
  const [profilePicture, setProfilePicture] = useState([]);
  const { nannyId, setProfilPicture, profilPicture } = useUserContext();

  const navigate = useNavigate();

  useEffect(() => {
    userAPI
      .get(`/api/nounous/${nannyId}`)
      .then((res) => setProfilPicture(res.data.profile_picture));
  }, [nannyId]);

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files;
    setProfilePicture(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profilePicture", profilePicture[0]);

    userAPI
      .put(`/api/nounous/${nannyId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => res.data);

    navigate("/pro-photosannonce");
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
              {!profilePicture.length ? (
                <img
                  className="max-h-24 max-w-24 self-center  rounded-full"
                  src={`${
                    import.meta.env.VITE_BACKEND_URL
                  }/uploads/${profilPicture}`}
                  alt="test"
                />
              ) : (
                <img
                  className="max-h-24 max-w-24 self-center  rounded-full"
                  src={URL.createObjectURL(profilePicture[0])}
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

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate("/pro-localisation")}
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
