import React from "react";
import { useNavigate } from "react-router-dom";
import logogroupe from "../assets/logogroupe.svg";
import hero from "../assets/hero.svg";
import next from "../assets/next.svg";

function Confirmationcréationcompte() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("formulaireenfants");
  };
  const linkTo = (e) => {
    e.preventDefault();
    navigate("");
  };
  return (
    <div className="gradient-linear flex flex-col  lg:flex lg:flex-row max-lg:landscape:flex-row lg:landscape:flex-row items-center justify-center h-full w-full font-nunito lg:landscape:text-xl  text-white">
      {" "}
      <div className="	h-3/6  flex flex-col items-center justify-evenly  text-white lg:landscape:w-4/5 lg:landscape:scale-120 max-lg:landscape:scale-120  md:landscape:scale-110">
        <div className="flex justify-center lg:landscape:scale-150 ">
          <img src={logogroupe} alt="logo" />
        </div>

        <p className="flex justify-center  text-white text-3xl lg:landscape:scale-150 lg:landscape:mb-5 md:landscape:scale-100">
          NounouLink
        </p>

        <div className="flex justify-center lg:landscape:scale-120 md:landscape:scale-100 ">
          <img src={hero} alt="hero" />
        </div>
      </div>
      <div className=" flex flex-col  lg:flex lg:flex-col max-lg:landscape:flex-col lg:landscape:flex-col items-center  h-full w-full max-lg:landscape:w-3/5 lg:landscape:w-3/5 lg:landscape:mr-40 lg:landscape:scale-120 lg:landscape:mt-40 font-nunito text-white">
        <h1 className="flex justify-around mt-10 mb-5 max-lg:landscape:mt-3 text-white text-3xl lg:landscape:text-6xl ">
          Bienvenue !
        </h1>
        <div>
          <p className="ml-10 max-lg:landscape:ml-20 lg:landscape: mb-10 text-left  text-white text-xl lg:landscape:text-5xl">
            Votre compte a été créé avec succès !
          </p>
          <p className=" ml-10 max-lg:landscape:ml-20 lg:landscape: mb-10 text-left  text-white text-m lg:landscape:text-3xl">
            L’accueil en structure collective nécessite que vous remplissiez des
            informations administratives obligatoires.
          </p>
        </div>
        <div className="flex justify-center mb-5  ">
          <button type="button" className="btn-orange" onClick={handleClick}>
            {"Compléter mon dossier "}
          </button>
        </div>
        <button type="button" onClick={linkTo}>
          {" "}
          <div className=" flex flex-row w-full justify-end align-middle">
            <p className="mr-2">Je complèterai plus tard</p>
            <img className="mr-5" src={next} alt="Next" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Confirmationcréationcompte;
