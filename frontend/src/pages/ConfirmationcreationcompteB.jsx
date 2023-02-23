import React from "react";
import logogroupe from "../assets/logogroupe.svg";
import hero from "../assets/hero.svg";
import Next from "../assets/Next.svg";
// import { useNavigate } from "react-router-dom";

function ConfirmationcréationcompteB() {
  const handleClick = () => {};
  return (
    <div className="	h-full flex flex-col items-center justify-evenly gradient-linear text-white ">
      <div className="flex justify-center">
        <img src={logogroupe} alt="logo" />
      </div>

      <p className="flex justify-center text-white text-3xl">NounouLink</p>

      <div className="flex justify-center ">
        <img src={hero} alt="hero" />
      </div>

      <h1 className="flex justify-center text-white text-3xl  ">Bienvenue !</h1>
      <p className="mx-8 text-left text-white text-xl ">
        Votre compte a été créé avec succès !
      </p>
      <p className=" mx-8 text-left mb-20 text-white text-m">
        L’accueil en structure collective nécessite que vous remplissiez des
        informations administratives obligatoires.
      </p>
      <div className="flex justify-center  ">
        <button type="button" className="btn-orange" onClick={handleClick}>
          {"Compléter mon dossier "}
        </button>
      </div>
      <div className=" flex flex-row w-full justify-around">
        <p>Je complèterai plus tard</p>
        <img src={Next} alt="Next" />
      </div>
    </div>
  );
}

export default ConfirmationcréationcompteB;
