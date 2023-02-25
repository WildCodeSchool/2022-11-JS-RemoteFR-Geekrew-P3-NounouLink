import React from "react";
import { useNavigate as navigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import hero from "../assets/hero.svg";

function Accueil() {
  const handleConnect = () => {
    navigate("/connexion");
  };
  const handleCreate = () => {
    navigate("/creationcompte");
  };

  return (
    <div className="flex flex-col justify-evenly items-center gradient-linear h-full xl:grid xl:justify-items-center xl:grid-cols-2 xl:row-span-4 xl:items-center">
      <img
        className="scale-105 xl:scale-150  xl:row-start-1 xl:row-span-4 xl:col-start-1 "
        src={hero}
        alt="hero"
      />
      <img
        className="scale-105  xl:ml-14 xl:row-start-0 xl:row-span-2 xl:col-start-2 xl:scale-150 xl:pr-8"
        src={logo}
        alt="logo"
      />

      <h1 className="scale-105 font-nunito font-bold text-white text-lg xl:scale-125 xl:row-end-4 xl:col-start-2 ">
        Garde d'enfant à la demande
      </h1>

      <button
        type="button"
        className="btn-purple xl:col-start-2 xl:row-start-4"
        onClick={handleConnect}
      >
        Me connecter
      </button>
      <button
        type="button"
        className="btn-orange xl:col-start-2 xl:row-start-5"
        onClick={handleCreate}
      >
        Créer mon compte
      </button>
    </div>
  );
}

export default Accueil;
