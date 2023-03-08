import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import hero from "../assets/hero-lg.svg";

import { useUserContext } from "../contexts/UserContext";

function Search() {
  const [type, setType] = useState("text");
  const [dataChildren, setDataChildren] = useState([]);
  const [dataAdress, setDataAdress] = useState([]);
  const [childName, setChildName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { parentId, userId } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/enfants`)
      .then((response) => {
        setDataChildren(
          response.data.filter((child) => child.parents_idparents === parentId)
        );
      });

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/${userId}`)
      .then((response) => {
        setDataAdress(response.data.adress);
      });
  }, []);

  const handleTypeFocus = (e) => {
    setType((e.target.type = "datetime-local"));
  };
  const handleTypeBlur = (e) => {
    setType((e.target.type = "text"));
  };

  const handleSubmitSearch = () => {
    localStorage.setItem(
      "matchSearch",
      JSON.stringify([childName, dataAdress, startDate, endDate])
    );
    navigate("/resultat");
  };

  const handleChangeName = (e) => {
    setChildName(e.target.value);
  };

  return (
    <div className="gradient-linear grid grid-cols-10 grid-rows-10  lg:grid-cols-3 h-full text-white font-nunito lg:p-8">
      <h1 className="font-bold text-3xl col-start-2 lg:col-start-3 col-end-10 row-start-2 lg:row-start-1 lg:row-end-3 justify-self-center lg:self-center">
        Garde d’enfant à la demande {childName}
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
          <select onChange={handleChangeName}>
            <option value="" className="text-black">
              ---
            </option>

            {dataChildren.map((child) => (
              <option
                className="text-black"
                value={child.firstname}
                key={child.idchildren}
              >
                {child.firstname}
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
            onChange={(event) => setDataAdress(event.target.value)}
          />
        </label>
        <label htmlFor="frequency">
          <select name="frequency" id="frequency" className="input">
            <option className="text-black">Récurrent</option>
            <option className="text-black">Flexible</option>
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
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
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
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
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
        onClick={handleSubmitSearch}
      >
        Rechercher
      </button>
    </div>
  );
}

export default Search;
