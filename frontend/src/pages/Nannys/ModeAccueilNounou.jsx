import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import userAPI from "../../services/userAPI";
import { useUserContext } from "../../contexts/UserContext";

import NavbarNounou from "../../components/NavbarNounou";
import arrow from "../../assets/pro/arrowRight.svg";
import creerAnnonce from "../../assets/pro/creerAnnonce.svg";

function ModeAccueilNounou() {
  const [lastname, setLastname] = useState([]);
  const [phone, setPhone] = useState([]);
  const { setUserId, userId } = useUserContext();

  const navigate = useNavigate();
  useEffect(() => {
    userAPI.get(`/api/nounous/${2}`).then((res) => {
      setUserId(res.data.users_idusers);
    });
  }, []);

  useEffect(() => {
    if (userId !== null)
      userAPI.get(`/api/users/${userId}`).then((response) => {
        setLastname(`${response.data.firstname} ${response.data.lastname}`);
        setPhone(response.data.phone);
      });
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    userAPI.put(`/api/users/${userId}`, { phone });
    navigate("/pro-localisation");
  };

  return (
    <div className="font-red-hat flex flex-col w-full h-full grow">
      <NavbarNounou progress="0%" link={"Mode d'accueil"} />
      <div className="flex flex-row w-full h-full">
        <div className="font-red-hat flex flex-col justify-evenly w-full min-h-fit">
          <h3 className="text-black font-medium text-lg px-8">
            Vérifiez vos informations
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full justify-around px-8"
          >
            <label
              htmlFor="name"
              className="flex flex-col w-full justify-evenly text-base"
            >
              Nom:
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                name="name"
                className="rounded-xl p-2 max-w-max ring ring-teal-500 my-2"
              />
            </label>
            <p className="text-sm">
              Ce nom sera celui qui s’affichera en titre de votre annonce
            </p>
          </form>
          <div className="flex flex-col justify-around w-full px-8">
            <label
              htmlFor="phone"
              className="flex flex-col justify-between w-full text-base"
            >
              Téléphone:
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
                className="rounded-xl p-2 max-w-max ring ring-teal-500 my-2"
              />
            </label>
            <p className="text-sm">
              Un sms vous sera envoyé pour confirmer votre compte
            </p>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className=" flex items-center justify-between gap-2 mx-6 self-end rounded-full bg-purple text-white font-nunito font-semibold text-base py-2 px-6 max-w-max"
          >
            Suivant
            <img src={arrow} alt="fleche" />
          </button>
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

export default ModeAccueilNounou;
