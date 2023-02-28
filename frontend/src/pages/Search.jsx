import React, { useState, useEffect } from "react";
import axios from "axios";

import logo from "../assets/logo.svg";
import hero from "../assets/hero-lg.svg";

function Search() {
  const [type, setType] = useState("text");
  const [dataChildren, setDataChildren] = useState([]);
  const [dataAdress, setDataAdress] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}api/children`)
      .then((response) => {
        return setDataChildren(response.name);
      });
    // .catch((error) => {
    //   console.log(error.request);
    // });

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}api/users`)
      .then((response) => {
        return setDataAdress(response.adress);
      });
    // .catch((error) => {
    //   console.log(error.request);
    // });

    axios.get(`${import.meta.env.VITE_BACKEND_URL}api/reservations`);
    // .then((response) => {
    //   console.log(response.data);
    // })
    // .catch((error) => {
    //   console.log(error.request);
    // });
  }, []);

  const handleTypeFocus = (e) => {
    setType((e.target.type = "datetime-local"));
  };
  const handleTypeBlur = (e) => {
    setType((e.target.type = "text"));
  };

  return (
    <div className="gradient-linear grid grid-cols-10 grid-rows-10  lg:grid-cols-3 h-full text-white font-nunito lg:p-8">
      <h1 className="font-bold text-3xl col-start-2 lg:col-start-3 col-end-10 row-start-2 lg:row-start-1 lg:row-end-3 justify-self-center lg:self-center">
        Garde d’enfant à la demande
      </h1>
      <img
        src={logo}
        alt="logo NounouLink"
        className="hidden lg:flex max-md:landscape:scale-50 max-lg:landscape:scale-75 justify-self-center lg:self-start lg:justify-self-start row-start-1 lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-span-1 "
      />
      <img
        src={hero}
        alt="hero NounouLink"
        className="hidden lg:flex max-lg:landscape:scale-50 justify-self-center row-start-1 lg:row-start-3 lg:row-end-11 lg:self-end lg:col-start-1 lg:col-span-2"
      />
      <form className=" col-start-2 col-end-10 row-start-3 row-end-9 lg:col-start-3 flex flex-col h-full lg:self-center justify-evenly justify-self-center">
        <label htmlFor="child">
          <select name="child" id="child" className="input">
            {dataChildren.name.map((child) => (
              <option className="text-white" value={child}>
                {child}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="address">
          <input
            name="address"
            id="address"
            placeholder="Adresse"
            className="input"
            value={dataAdress}
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
          className="flex justify-between justify-self-center xl:w-9/12"
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
        className="btn-purple col-start-2 lg:col-start-3 col-end-10 row-start-9 lg:row-start-10 lg:row-end-11 justify-self-center lg:self-end"
        type="button"
      >
        Rechercher
      </button>
    </div>
  );
}

export default Search;
