import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
// import { useUserContext } from "../contexts/UserContext";

function Menu() {
  // const { firstname, lastname } = useUserContext();

  return (
    <div className="flex flex-col h-full  ">
      <Navbar />
      <nav>
        <NavLink to="/formulaireparent">Mettre à jour mes documents</NavLink>
      </nav>
      <nav>
        <NavLink to="/formulaireenfant">ajouter un enfant</NavLink>
      </nav>
      <nav>
        <NavLink to="/recherche">rechercher une nounou</NavLink>
      </nav>
    </div>
  );
}

export default Menu;
