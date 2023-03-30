import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import hero from "../assets/hero.svg";

function Accueil() {
  const navigate = useNavigate();
  const handleConnect = () => {
    navigate("/connexion");
  };
  const handleCreate = () => {
    navigate("/creationcompte");
  };

  return (
    <div className="flex flex-col justify-evenly items-center gradient-linear h-screen xl:grid xl:justify-items-center xl:grid-cols-2 xl:row-span-4 xl:items-center max-md:h-f max-md:landscape:h-max max-lg:landscape:h-max">
      <img
        className="scale-105 xl:scale-150  xl:row-start-1 xl:row-span-4 xl:col-start-1 max-md:landscape:scale-75 max-lg:landscape:scale-90"
        src={hero}
        alt="hero"
      />
      <img
        className="scale-105  xl:ml-14 xl:row-start-0 xl:row-span-2 xl:col-start-2 xl:scale-150 xl:pr-8 max-md:landscape:scale-75 max-lg:landscape:scale-90"
        src={logo}
        alt="logo"
      />
      <h1 className="scale-105 font-nunito font-bold text-white text-lg xl:scale-110 xl:row-end-4 xl:col-start-2 max-md:landscape:scale-75 max-lg:landscape:scale-90">
        Garde d'enfant à la demande
      </h1>

      <button
        type="button"
        className="btn-gradient xl:col-start-2 xl:row-start-4 max-md:landscape:scale-75 max-lg:landscape:scale-75"
        onClick={handleConnect}
      >
        Me connecter
      </button>
      <button
        type="button"
        className="btn-gradient xl:col-start-2 xl:row-start-5 max-md:landscape:scale-75 max-lg:landscape:scale-75"
        onClick={handleCreate}
      >
        Créer mon compte
      </button>
    </div>
  );
}

export default Accueil;
