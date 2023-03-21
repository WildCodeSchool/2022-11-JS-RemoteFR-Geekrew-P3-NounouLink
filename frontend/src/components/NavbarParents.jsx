import React from "react";
import { NavLink } from "react-router-dom";
import search from "../assets/search.svg";
import file from "../assets/file-text.svg";
import heart from "../assets/heart.svg";
import calendar from "../assets/calendar.svg";

function NavbarParents() {
  return (
    <div className="flex justify-between w-full items-center p-4">
      <NavLink>
        <img src={search} alt="Recherche" />
      </NavLink>
      <NavLink>
        <img src={file} alt="Dossier d'inscription" />
      </NavLink>
      <NavLink>
        <img src={heart} alt="Favoris" className="scale-150" />
      </NavLink>
      <NavLink>
        <img src={calendar} alt="Calendrier" />
      </NavLink>
    </div>
  );
}

export default NavbarParents;
