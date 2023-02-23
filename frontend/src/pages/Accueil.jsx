import React from "react";
import logo from "../assets/logo.svg";
import hero from "../assets/hero.svg";

function Accueil() {
  const handleClick = () => {};
  return (
    <div className="flex flex-col justify-evenly items-center gradient-linear h-full">
      <img className="scale-105" src={hero} alt="logo" />
      <img className="scale-105" src={logo} alt="hero" />

      <h1 className="scale-105 font-nunito font-bold text-white text-lg">
        Garde d'enfant à la demande
      </h1>

      <button type="button" className="btn-purple" onClick={handleClick}>
        Me connecter
      </button>
      <button type="button" className="btn-orange ">
        Créer mon compte
      </button>
    </div>
  );
}

export default Accueil;
