import React, { useEffect, useState } from "react";
import axios from "axios";
import filter from "../assets/filter.svg";
import trier from "../assets/trier.svg";
import star from "../assets/star.svg";

function SearchResults() {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [infosNanny, setInfosNanny] = useState([]);
  const test = [];
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/creneaux`)
      .then((response) => {
        const matchSearch = JSON.parse(localStorage.getItem("matchSearch"));
        const beginParent = new Date(matchSearch[2]).toLocaleString("fr-FR", {
          timeZone: "Europe/Paris",
        });
        const endParent = new Date(matchSearch[3]).toLocaleString("fr-FR", {
          timeZone: "Europe/Paris",
        });

        const slots = [];
        for (let i = 0; i < response.data.length; i += 1) {
          const beginNanny = new Date(
            response.data[i].beginning_hour
          ).toLocaleString("fr-FR", { timeZone: "Europe/Paris" });

          const endNanny = new Date(response.data[i].end_time).toLocaleString(
            "fr-FR",
            { timeZone: "Europe/Paris" }
          );

          if (beginNanny <= beginParent && endNanny >= endParent) {
            slots.push(response.data[i].idslots);
          }
        }

        setAvailableSlots(slots);
      });

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/match`)
      .then((response) => {
        for (let i = 0; i < response.data.length; i += 1) {
          if (availableSlots.includes(response.data[i].idslots)) {
            test.push(response.data[i]);
          }
        }
        setInfosNanny(test);
      });
  }, [infosNanny]);

  return (
    <>
      <label htmlFor="child">
        <select
          name="child"
          id="child"
          className="text-black font-nunito text-md flex w-full drop-shadow-filter"
        >
          <option className="">Ville - Date - heure début</option>
        </select>
      </label>
      <div className="flex flex-row justify-between w-full px-2 py-4">
        <div className="flex flex-row justify-between sm:w-5/12 md:w-1/6">
          <button type="button" className="flex items-center">
            <img src={filter} alt="filtrer" className="px-2" />
            <p>Filtrer</p>
          </button>

          <button type="button" className="flex items-center">
            <img src={trier} alt="filtrer" className="px-2" />
            <p>Trier</p>
          </button>
        </div>
        <p> Carte</p>
      </div>
      <div className="gradient-blue h-full py-4">
        <div className="grid grid-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 flex-col justify-center">
          {" "}
          {infosNanny.map((nannyCard) => {
            return (
              <div
                className="bg-white rounded-3xl w-4/5 justify-self-center flex flex-col p-4 max-w-sm"
                key={nannyCard.id}
              >
                <img
                  src={nannyCard.pictures}
                  alt={nannyCard.pictures}
                  className="aspect-video"
                />
                <div className="flex flex-row w-full justify-between items-center">
                  <h1 className="text-xl">{`${nannyCard.firstname} ${nannyCard.lastname}`}</h1>
                  <div className="bg-purple flex flex-row rounded-full text-white justify-between px-2">
                    <p>{nannyCard.ranking}</p>
                    <img src={star} alt="rating" />
                  </div>
                </div>
                <div className="flex flex-row w-full justify-between items-center">
                  {nannyCard.place_number > 1 ? (
                    <p className="text-green font-semibold text-lg">
                      {`${nannyCard.place_number} places disponibles`}
                    </p>
                  ) : (
                    <p className="text-green font-semibold text-lg">
                      {`${nannyCard.place_number} place disponible`}
                    </p>
                  )}
                  <h3 className="text-black font-extrabold text-2xl">
                    {nannyCard.hourly_rate}€
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SearchResults;
