import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import Trombone from "../assets/trombone.svg";
import Loupe from "../assets/Loupe.svg";
import EnfantAdd from "../assets/enfantAdd.svg";
import home from "../assets/home.svg";

function Navbar() {
  const [blur, setBlur] = useState(false);
  const location = useLocation();

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

        <div className="mb-8 mt-8">
          <div className="flex flex-row justify-evenly pb-2 pt-2 ">
            <NavLink
              style={getActiveLinkStyle(location.pathname === "/Menu")}
              to="/menu"
            >
              <img alt="Menu principal" src={home} className="scale-150" />
            </NavLink>
            <NavLink
              style={getActiveLinkStyle(
                location.pathname === "/FormulaireParent"
              )}
              activeclassname="active"
              to="/FormulaireParent"
            >
              <img alt="documents" src={Trombone} className="scale-150 " />
            </NavLink>

            <NavLink
              style={getActiveLinkStyle(
                location.pathname === "/FormulaireEnfant"
              )}
              to="/FormulaireEnfant"
            >
              <img
                alt="ajouter un enfant"
                src={EnfantAdd}
                className="scale-150"
              />
            </NavLink>
            <NavLink
              style={getActiveLinkStyle(location.pathname === "/Search")}
              to="/recherche"
            >
              <img
                alt="rechercher une nounou"
                src={Loupe}
                className="scale-150 "
              />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
