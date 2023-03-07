import React, { useEffect } from "react";
import axios from "axios";
import filter from "../assets/filter.svg";
import trier from "../assets/trier.svg";

function SearchResults() {
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/creneaux`)
      .then((response) => {
        const matchSearch = JSON.parse(localStorage.getItem("matchSearch"));
        // console.log(`matchsearch : ${matchSearch}`);
        // console.log(`creneaux debut nanny: ${response.data[0].beginning_hour}`);
        // console.log(`creneaux fin nanny: ${response.data[0].end_time}`);

        // const beginNanny = Date.parse(response.data[0].beginning_hour);

        // .getTimezoneOffset() c est ca qui deconne
        // et si on tente getTime()
        const beginNanny = new Date(
          response.data[0].beginning_hour
        ).toLocaleString("fr-FR", { timeZone: "Europe/Paris" });

        const endNanny = new Date(response.data[0].end_time).toLocaleString(
          "fr-FR",
          { timeZone: "Europe/Paris" }
        );

        const beginParent = new Date(matchSearch[2]).toLocaleString("fr-FR", {
          timeZone: "Europe/Paris",
        });
        const endParent = new Date(matchSearch[3]).toLocaleString("fr-FR", {
          timeZone: "Europe/Paris",
        });

        // console.log(`beginNanny: ${beginNanny}`);
        // console.log(`endNanny: ${endNanny}`);
        // console.log(`beginParent: ${beginParent}`);
        // console.log(`endParent: ${endParent}`);

        // console.log(beginNanny, endNanny, beginParent, endParent);

        if (beginNanny <= beginParent && endNanny >= endParent) {
          alert("Youpi go faire un brunch");
        } else {
          alert("bon ben on commande un pizza");
        }
        // return response.data

        // tu y arrives? oui mais il faut voir avec le decalage horaire
        // t'es un génie
        // c est toi le genie

        // tu obtiens un GTM +2 pour la nounou ?
        // je crois pas, enfin je sais pas , le time de la nounou est entre 6h et 10h au lieu de 8h 12h
        // Avec new Date(response.blabla) j'arrive à obtenir 8h et 12h mais avec un GTM+2 ...
      });
  }, []);

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
      <div className="gradient-blue h-full">
        <div className="grid grid-rows-auto grid-cols-1 gap-2 h-full flex-col justify-center">
          <div className="bg-white rounded-3xl w-4/5 justify-self-center" />
          <div>card</div>
          <div>card</div>
        </div>
      </div>
    </>
  );
}

export default SearchResults;
