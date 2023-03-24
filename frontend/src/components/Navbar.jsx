import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import Trombone from "../assets/trombone.svg";
import Loupe from "../assets/Loupe.svg";
import EnfantAdd from "../assets/enfantAdd.svg";
import home from "../assets/home.svg";

function Navbar() {
  const [blur, setBlur] = useState(false);
  const location = useLocation();
  const { lastname, firstname } = useUserContext();
  const getActiveLinkStyle = (isActive) => {
    if (isActive) {
      return { filter: "blur(0px)" };
    }
    return { filter: `blur(${blur ? "0px" : "1px"})` };
  };

  return (
    <div className=" gradient-linear ">
      <nav>
        <NavLink
          className="focus:outline-none"
          activeclassname="active"
          onClick={() => setBlur(false)}
          to="/FormulaireEnfant"
        />

        <NavLink
          className="flex flex-row  justify-end text-white   text-left pr-5"
          activeclassname="active"
        >
          <p className="text-2xl ml-10 pb-5 ">{`${lastname}  ${firstname}`}</p>
        </NavLink>

        <div className="flex flex-row justify-evenly pb-2 pt-2 ">
          <NavLink
            style={getActiveLinkStyle(location.pathname === "/Menu")}
            to="/menu"
          >
            <img alt="Menu principal" src={home} />
          </NavLink>
          <NavLink
            style={getActiveLinkStyle(
              location.pathname === "/FormulaireParent"
            )}
            activeclassname="active"
            to="/FormulaireParent"
          >
            <img alt="documents" src={Trombone} />
          </NavLink>

          <NavLink
            style={getActiveLinkStyle(
              location.pathname === "/FormulaireEnfant"
            )}
            to="/FormulaireEnfant"
          >
            <img alt="ajouter un enfant" src={EnfantAdd} />
          </NavLink>
          <NavLink
            style={getActiveLinkStyle(location.pathname === "/Search")}
            to="/recherche"
          >
            <img alt="rechercher une nounou" src={Loupe} />
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
