import React from "react";
import filter from "../assets/filter.svg";
import trier from "../assets/trier.svg";

function SearchResults() {
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
