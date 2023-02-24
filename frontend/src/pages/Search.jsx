import React, { useState } from "react";

function Search() {
  const [type, setType] = useState("text");

  const handleTypeFocus = (e) => {
    setType((e.target.type = "datetime-local"));
  };
  const handleTypeBlur = (e) => {
    setType((e.target.type = "text"));
  };

  return (
    <div className="gradient-linear grid grid-cols-10 grid-rows-10  h-full text-white font-nunito">
      <h1 className="font-bold text-3xl col-start-2 col-end-10 row-start-2 justify-self-center">
        Garde d’enfant à la demande
      </h1>
      <form className=" col-start-2 col-end-10 row-start-3 row-end-9 flex flex-col h-full justify-evenly justify-self-center">
        <label htmlFor="child">
          <select name="child" id="child" className="input">
            <option className="text-white">Enfant concerné</option>
          </select>
        </label>
        <label htmlFor="address">
          <input
            name="address"
            id="address"
            placeholder="Adresse"
            className="input"
          />
        </label>
        <label htmlFor="frequency">
          <select name="frequency" id="frequency" className="input">
            <option className="text-white">Récurrent</option>
          </select>
        </label>
        <label htmlFor="starting-date">
          <input
            type={type}
            name="starting-date"
            id="starting-date"
            placeholder="Date & heure de début"
            onFocus={handleTypeFocus}
            onBlur={handleTypeBlur}
            className="input"
          />
        </label>
        <label htmlFor="ending-date">
          <input
            type={type}
            name="ending-date"
            id="ending-date"
            placeholder="Date & heure de fin"
            onFocus={handleTypeFocus}
            onBlur={handleTypeBlur}
            className="input"
          />
        </label>
        <label
          className="flex justify-between justify-self-center"
          htmlFor="flexibility"
        >
          <input
            name="flexibility"
            id="flexibility"
            type="checkbox"
            className="bg-grey-input bg-opacity-30 mix-blend-screen placeholder:text-white"
          />
          <p>Mes dates ou horaires sont flexibles</p>
        </label>
      </form>
      <button
        className="btn-purple col-start-2 col-end-10 row-start-9 justify-self-center"
        type="button"
      >
        Rechercher
      </button>
    </div>
  );
}

export default Search;
