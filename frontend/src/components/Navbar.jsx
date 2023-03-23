import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import blocParent from "../assets/formulaire/Brique-Parents.svg";
import blocEnfant from "../assets/formulaire/Brique-Enfants.svg";

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
          className="flex flex-row justify-center  text-white  pt-10"
          activeclassname="active"
          navigate="-1"
        >
          <p className="text-2xl">
            Menu Principal <br />
            {`${lastname}  ${firstname}`}
          </p>
        </NavLink>

        <div className="flex flex-row justify-evenly pb-8 pt-2">
          <NavLink
            style={getActiveLinkStyle(
              location.pathname === "/FormulaireParent"
            )}
            activeclassname="active"
            to="/FormulaireParent"
          >
            <img src={blocParent} alt="bloc parent" />
          </NavLink>

          <NavLink
            style={getActiveLinkStyle(
              location.pathname === "/FormulaireEnfant"
            )}
            to="/FormulaireEnfant"
          >
            <img src={blocEnfant} alt="bloc enfant" />
          </NavLink>
          <NavLink
            style={getActiveLinkStyle(location.pathname === "/Search")}
            to="/recherche"
          >
            recherche
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
