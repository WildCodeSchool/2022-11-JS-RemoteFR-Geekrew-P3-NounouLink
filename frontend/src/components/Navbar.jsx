import React from "react";

import chevronWhite from "../assets/chevron-white.svg";
import blocParent from "../assets/formulaire/Brique-Parents.svg";
import blocEnfant from "../assets/formulaire/Brique-Enfants.svg";
import blocInscription from "../assets/formulaire/Brique-Inscription.svg";

function Navbar() {
  return (
    <div>
      <div className="flex flex-row justify-center  text-white bg-purple pt-10">
        <img src={chevronWhite} alt="chevron" />
        <p className="text-2xl">
          {" "}
          Ed Canaan <br />
          Papa Poule
        </p>
      </div>
      <div className="flex flex-row justify-evenly bg-gradient-purple pb-8 pt-2">
        <img src={blocParent} alt="bloc parent" />
        <img src={blocEnfant} alt="block enfant" />
        <img src={blocInscription} alt="block inscription" />
      </div>
    </div>
  );
}

export default Navbar;
