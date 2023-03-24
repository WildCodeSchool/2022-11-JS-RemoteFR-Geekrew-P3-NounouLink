import React from "react";
import { NavLink } from "react-router-dom";
import Trombone from "../assets/trombone.svg";
import Loupe from "../assets/Loupe.svg";
import EnfantAdd from "../assets/enfantAdd.svg";
import slogan from "../assets/slogan.svg";
import logo from "../assets/logo.svg";
import cadenas from "../assets/imageCadenas.svg";
import loupe from "../assets/imageLoupe.svg";
import tailleur from "../assets/imageTailleur.svg";
function Menu() {
  return (
    <div className="flex flex-row ">
      <div className="w-1/2">
        {" "}
        <img alt="documents" src={slogan} className=" scale-100 mr-14 " />
       <div className="flex flex-row mt-15"> <img alt="documents" src={cadenas} className=" scale-100 mr-14 " />
        <img alt="documents" src={loupe} className=" scale-100 mr-14 " /></div>
        <div className="flex"><img alt="documents" src={tailleur} className="flex  scale-100 mr-14 " /></div>

      </div>
      <div className=" gradient-linear flex flex-col h-screen w-1/2 ">
        <div className=" flex flex-col  items-center mt-20 ">
          <img
            src={logo}
            alt="logo NounouLink"
            className="max-md:landscape:scale-50 max-lg:landscape:scale-75  justify-self-center   lg:p-8 row-start-1  lg:col-start-1 lg:col-span-1 "
          />
          <div className="flex flex-col ">
            <nav className="flex shadow-xl btn-orange xl:col-start-2 xl:row-start-5 max-md:landscape:scale-75 max-lg:landscape:scale-75 mt-10 text-center text-base items-center justify-center ">
              <img
                alt="documents"
                src={Trombone}
                className=" scale-150 mr-14"
              />{" "}
              <NavLink to="/formulaireparent">Mes documents</NavLink>
            </nav>
            <nav className="flex shadow-xl btn-orange xl:col-start-2 xl:row-start-5 max-md:landscape:scale-75 max-lg:landscape:scale-75 mt-10 text-center text-base items-center justify-center">
              <img
                alt="ajouter un enfant"
                src={EnfantAdd}
                className=" scale-150 mr-12 "
              />
              <NavLink to="/formulaireenfant">ajouter un enfant</NavLink>
            </nav>
            <nav className="btn-orange shadow-xl flex xl:col-start-2 xl:row-start-5 max-md:landscape:scale-75 max-lg:landscape:scale-75 mt-10 text-center text-base items-center justify-center">
              <img
                alt="rechercher une nounou"
                src={Loupe}
                className=" scale-150 mr-1 "
              />
              <NavLink to="/recherche">rechercher une nounou</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
