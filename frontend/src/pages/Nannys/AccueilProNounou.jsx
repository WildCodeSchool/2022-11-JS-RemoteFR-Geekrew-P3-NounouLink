import React from "react";
import { NavLink } from "react-router-dom";

import logoPro from "../../assets/pro/nounouLinkPro.svg";
import home from "../../assets/pro/home.svg";
import localisation from "../../assets/pro/map-pin.svg";
import camera from "../../assets/pro/camera.svg";
import presentation from "../../assets/pro/user.svg";
import calendar from "../../assets/pro/calendar.svg";
import admin from "../../assets/pro/archive.svg";
import logoWhite from "../../assets/pro/nounouLinkProWhite.svg";
import hero from "../../assets/pro/heroNounou.svg";

function AccueilProNounou() {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="p-8 flex flex-col gap-12 w-full">
        <img className="max-w-[200px]" src={logoPro} alt="NounouLink Pro" />
        <div className="flex flex-col gap-4">
          <h2 className="text-dark-blue font-red-hat font-medium text-base">
            Paramétrez votre profil et gérez vos annonces pour gagner de
            l’argent !
          </h2>
          <h3 className="text-dark-blue font-red-hat font-medium text-xs">
            Une fois votre profil créé et votre annonce publiée, vous pourrez la
            modifier à tout moment.
          </h3>
        </div>
        <div className="font-nunito font-semibold text-xl text-black flex flex-col justify-evenly w-full gap-8">
          <div>
            <NavLink to="/pro-modeaccueil" className="flex w-full">
              <img src={home} alt="maison" />{" "}
              <h4 className="pl-8">Mode d’accueil</h4>
            </NavLink>
          </div>

          <div>
            <NavLink to="/pro-localisation" className="flex w-full">
              <img src={localisation} alt="localisation" />{" "}
              <h4 className="pl-8">Localisation</h4>
            </NavLink>
          </div>
          <div>
            <NavLink to="/pro-localisation" className="flex w-full">
              <img src={camera} alt="appareil" />{" "}
              <h4 className="pl-8">Photo</h4>
            </NavLink>
          </div>
          <div className="flex  w-full">
            <img src={presentation} alt="avatar" />{" "}
            <h4 className="pl-8">Présentation</h4>
          </div>
          <div className="flex  w-full">
            <img src={calendar} alt="calendrier" />{" "}
            <h4 className="pl-8">Calendrier et disponibilités</h4>
          </div>
          <div className="flex  w-full">
            <img src={admin} alt="boîte à dossier" />{" "}
            <h4 className="pl-8">Administratif</h4>
          </div>
        </div>
      </div>
      <div className="hidden gradient-linear w-full lg:flex flex-col justify-between h-full p-8 grow">
        <img className="max-w-[200px]" src={logoWhite} alt="NounouLink Pro" />
        <h3 className="text-white flex flex-col gap-2">
          <span className="bg-white max-w-fit text-purple-pro p-1 w-auto">
            Gérez votre
          </span>
          <span className="bg-white max-w-fit text-purple-pro p-1 block">
            Agenda professionnel
          </span>
          24h/24 7j/7
        </h3>
        <img
          src={hero}
          alt="fille avec des lunettes travaillant"
          className=" lg:max-w-lg 2xl:max-w-xl"
        />
      </div>
    </div>
  );
}

export default AccueilProNounou;
