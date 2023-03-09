import React, { useEffect, useState } from "react";
import axios from "axios";

import back from "../assets/chevron-white.svg";

function NannyInfoCard() {
  const [nannyCard, setNannyCard] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/nounous/`)
      .then((res) => setNannyCard(res.data));
  }, []);

  return (
    <main className="gradient-linear">
      <header className="text-white font-bold font-nunito text-3xl flex justify-center">
        <img src={back} alt="Revenir en arrière" />
        <h2 className="px-auto"> {nannyCard.map((nanny) => nanny.ad_name)}</h2>
      </header>
      <div className="bg-white h-full m-7 rounded-2xl">
        {/* <img /> */}
        <div>
          <h3 className="font-nunito font-bold text-2xl text-black">
            Présentation
          </h3>
          <p>{nannyCard.map((nanny) => nanny.presentation)}</p>
          <h3 className="font-nunito font-bold text-2xl text-black">Accueil</h3>
          {/* <p></p> */}
          <h3 className="font-nunito font-bold text-2xl text-black">
            Activité
          </h3>
          {/* <p></p> */}
        </div>
      </div>
    </main>
  );
}

export default NannyInfoCard;
