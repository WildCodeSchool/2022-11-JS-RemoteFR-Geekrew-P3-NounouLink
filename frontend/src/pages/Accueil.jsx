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
    <div className="justify-center w-full grow grid grid-rows-mobile grid-cols-mobile md:grid-cols-5 lg:landscape:grid-cols-7 lg:landscape:grid-rows-desktop gradient-linear font-nunito text-white">
      <div className="col-start-2 lg:landscape:col-start-1 md:col-end-5 row-start-1 row-end-1 flex flex-col items-center justify-evenly">
        <img className="lg:justify-self-start" src={logo} alt="logo" />
        <h1 className="text-xl md:text-2xl lg:landscape:text-3xl xl:text-4xl">
          Garde d'enfant à la demande
        </h1>
      </div>
      <img
        className="col-span-3 md:col-start-2 lg:landscape:col-start-1 lg:landscape:col-end-5 row-start-2 row-end-2 lg:landscape:row-end-4 flex w-full lg:landscape:w-11/12 self-center justify-self-center lg:landscape:justify-self-start"
        src={hero}
        alt="hero"
      />

      <div className="col-start-2 md:col-start-2 md:col-span-3 lg:landscape:col-start-5 row-start-3 row-end-5 lg:landscape:row-start-2 lg:landscape:row-end-4 lg:landscape:self-end lg:landscape:justify-self-center flex flex-col justify-evenly lg:landscape:justify-betwwen w-full lg:landscape:landscape:w-3/4 lg:landscape:h-3/4">
        <button type="button" className="btn-purple" onClick={handleConnect}>
          Me connecter
        </button>
        <button type="button" className="btn-orange" onClick={handleCreate}>
          Créer mon compte
        </button>
      </div>
    </div>
  );
}

export default Accueil;
