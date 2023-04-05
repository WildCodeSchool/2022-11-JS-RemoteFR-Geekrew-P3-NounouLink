import { NavLink } from "react-router-dom";

import Trombone from "../assets/trombone.svg";
import Loupe from "../assets/Loupe.svg";
import EnfantAdd from "../assets/enfantAdd.svg";
import ImageDeco from "../assets/ImageDeco.svg";
import logo from "../assets/logo.svg";

function Menu() {
  return (
    <div className="flex flex-row h-full ">
      <div className=" hidden md:block md:w-1/2 md:bg-gray-100 ">
        {" "}
        <img alt="documents" src={ImageDeco} className=" scale-100 mr-14 " />
        <p className=" mt-20 pr-10 pl-10 font-semibold  text-3xl fontfamily:nunito">
          Réservez une place auprès de professionnelles de la petite enfance
          gratuitement en quelques clics.{" "}
        </p>
      </div>
      <div className="w-full grow h-full gradient-linear flex flex-col max-lg:landscape:h-full  md:h-full md:w-1/2 ">
        <div className=" flex flex-col h-full items-center mt-20 ">
          <img
            src={logo}
            alt="logo NounouLink"
            className="max-md:landscape:scale-150 max-lg:landscape:scale-75 scale-125 justify-self-center   lg:p-8 row-start-1  lg:col-start-1 lg:col-span-1 "
          />
          <div className="flex flex-col mt-16">
            <nav className="flex shadow-xl btn-gradient xl:col-start-2 xl:row-start-5 max-md:landscape:scale-75 max-lg:landscape:scale-75 mt-10 text-center text-base items-center justify-center ">
              <img
                alt="documents"
                src={Trombone}
                className=" scale-150 mr-14"
              />{" "}
              <NavLink to="/formulaireparent">Mes documents</NavLink>
            </nav>
            <nav className="flex shadow-xl btn-gradient xl:col-start-2 xl:row-start-5 max-md:landscape:scale-75 max-lg:landscape:scale-75 mt-10 text-center text-base items-center justify-center">
              <img
                alt="ajouter un enfant"
                src={EnfantAdd}
                className=" scale-150 mr-12 "
              />
              <NavLink to="/formulaireenfant">Ajouter un enfant</NavLink>
            </nav>
            <nav className="btn-gradient shadow-xl flex xl:col-start-2 xl:row-start-5 max-md:landscape:scale-75 max-lg:landscape:scale-75 mt-10 text-center text-base items-center justify-center">
              <img
                alt="rechercher une nounou"
                src={Loupe}
                className=" scale-150 mr-1 "
              />
              <NavLink to="/recherche">Trouver une nounou</NavLink>
            </nav>
            <nav className="btn-gradient shadow-xl flex xl:col-start-2 xl:row-start-5 max-md:landscape:scale-75 max-lg:landscape:scale-75 mt-10 text-center text-base items-center justify-center">
              <img
                alt="rechercher une nounou"
                src={Loupe}
                className=" scale-150 mr-20 "
              />
              <NavLink to="/reservation">Reservations</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
