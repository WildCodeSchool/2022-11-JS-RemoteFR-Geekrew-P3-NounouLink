import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import hero from "../assets/hero.svg";

const navigate = useNavigate();

function Accueil() {
  const handleConnect = () => {
    navigate("/connexion");
  };
  const handleCreate = () => {
    navigate("/creation-compte");
  };

  return (
    <div className="flex flex-col justify-evenly items-center gradient-linear h-full">
      <img className="scale-105" src={hero} alt="logo" />
      <img className="scale-105" src={logo} alt="hero" />

      <h1 className="scale-105 font-nunito font-bold text-white text-lg">
        Garde d'enfant à la demande
      </h1>

      <button type="button" className="btn-purple" onClick={handleConnect}>
        Me connecter
      </button>
      <button type="button" className="btn-orange " onClick={handleCreate}>
        Créer mon compte
      </button>
    </div>
  );
}

export default Accueil;
