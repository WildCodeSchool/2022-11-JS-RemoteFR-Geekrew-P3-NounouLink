import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
// import { useUserContext } from "../contexts/UserContext";

function Menu() {
  // const { firstname, lastname } = useUserContext();

  return (
    <div className="flex flex-col h-full ">
      <Navbar />

      <div className="flex flex-col  items-center mt-20 ">
        <nav className="flex btn-orange xl:col-start-2 xl:row-start-5 max-md:landscape:scale-75 max-lg:landscape:scale-75 mt-10 text-center text-base items-center justify-center ">
          <NavLink to="/formulaireparent">Mettre à jour mes documents</NavLink>
        </nav>
        <nav className="flex btn-orange xl:col-start-2 xl:row-start-5 max-md:landscape:scale-75 max-lg:landscape:scale-75 mt-10 text-center text-base items-center justify-center">
          <NavLink to="/formulaireenfant">ajouter un enfant</NavLink>
        </nav>
        <nav className=" flex btn-orange xl:col-start-2 xl:row-start-5 max-md:landscape:scale-75 max-lg:landscape:scale-75 mt-10 text-center text-base items-center justify-center">
          <NavLink to="/recherche">rechercher une nounou</NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
