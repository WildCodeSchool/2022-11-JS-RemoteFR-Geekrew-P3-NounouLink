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
        <img
          className="lg:justify-self-start 2xl:w-6/12"
          src={logo}
          alt="logo"
        />
        <h1 className="text-xl md:text-2xl lg:landscape:text-3xl xl:text-4xl 2xl:hidden">
          Garde d'enfant à la demande
        </h1>
      </div>
      {/* <h1 className="max-2xl:hidden 2xl:flex 2xl:text-5xl col-start-5 col-end-8 row-start-2 row-end-2 w-full justify-self-center justify-center self-start">
        Garde d'enfant à la demande
      </h1> */}
      <img
        className="col-span-3 md:col-start-2 lg:landscape:col-start-1 lg:landscape:col-end-5 row-start-2 row-end-2 lg:landscape:row-end-4 flex w-full lg:landscape:w-10/12 self-center justify-self-center lg:landscape:justify-self-start"
        src={hero}
        alt="hero"
      />

      <div className="col-start-2 md:col-start-2 md:col-span-3 lg:landscape:col-start-5 row-start-3 row-end-5 lg:landscape:row-start-2 lg:landscape:row-end-4 lg:landscape:self-end lg:landscape:justify-self-center flex flex-col justify-evenly lg:landscape:justify-betwwen w-full lg:landscape:landscape:w-3/4 2xl:landscape:w-full lg:landscape:h-3/4 2xl:landscape:items-center">
        <h1 className="hidden 2xl:flex 2xl:text-5xl 3xl:text-6xl 2xl:w-full 2xl:justify-center ">
          Garde d'enfant à la demande
        </h1>
        <button
          type="button"
          className="btn-purple 2xl:landscape:w-3/4"
          onClick={handleConnect}
        >
          Me connecter
        </button>
        <button
          type="button"
          className="btn-orange 2xl:landscape:2xl:w-3/4"
          onClick={handleCreate}
        >
          Créer mon compte
        </button>
      </div>
    </div>
  );
}

export default Accueil;
