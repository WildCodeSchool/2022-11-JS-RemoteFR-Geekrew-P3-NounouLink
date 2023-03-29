import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { useNavigate, NavLink } from "react-router-dom";
=======
import { useNavigate } from "react-router-dom";

>>>>>>> dev
import logo from "../assets/logo.svg";
import hero from "../assets/hero-lg.svg";
import userAPI from "../services/userAPI";
import chevron from "../assets/chevron-left.svg";

import { useUserContext } from "../contexts/UserContext";

function Search() {
  const [type, setType] = useState("text");
  const [dataChildren, setDataChildren] = useState([]);

  const [childName, setChildName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { parentId, adress, setAdress, setChildrenId } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    userAPI.get(`/api/enfants`).then((response) => {
      setDataChildren(
        response.data.filter((child) => child.parents_idparents === parentId)
      );
      setChildrenId(
        response.data.filter((child) => child.parents_idparents === parentId)
      );
      // console.log(
      //   response.data.filter((child) => child.parents_idparents === parentId)
      // );
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
      JSON.stringify([childName, adress, startDate, endDate])
    );
    navigate("/resultat");
  };

  const handleChangeName = (e) => {
    setChildName(e.target.value);
  };

  return (
    <div className="gradient-linear grid grid-cols-10 grid-rows-10  lg:grid-cols-3 h-full text-white font-nunito lg:p-8">
      <NavLink to="/menu">
        <button type="button" className="flex flex-row">
          <img src={chevron} alt="chevron" />
          <p className="flex flex-row">Retour</p>
        </button>
      </NavLink>
      <h1 className="font-bold text-3xl col-start-2 lg:col-start-3 col-end-10 row-start-2 lg:row-start-1 lg:row-end-3 justify-self-center lg:self-center">
        Garde d’enfant à la demande. <br /> {`Enfant concerné: ${childName}`}
      </h1>
      <NavLink to="/menu">
        <img
          src={logo}
          alt="logo NounouLink"
          className="hidden lg:flex max-md:landscape:scale-50 max-lg:landscape:scale-75 justify-self-center lg:self-start lg:justify-self-start row-start-1 lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-span-1  "
        />
      </NavLink>
      <img
        src={hero}
        alt="hero NounouLink"
        className="hidden lg:flex max-lg:landscape:scale-50 justify-self-center row-start-1  scale-75 lg:row-start-3 lg:row-end-11 lg:self-end lg:col-start-1 lg:col-span-2"
      />
      <form className=" col-start-2 col-end-10 row-start-3 row-end-9 lg:col-start-3 flex flex-col h-full lg:self-center justify-evenly justify-self-center ">
        <label className="landscape:mt-5 " htmlFor="child">
          <select
            onChange={handleChangeName}
            className="text-black rounded-md font-family:nunito"
          >
            <option value="">---</option>

            {dataChildren.map((child) => (
              <option
                className="text-black"
                value={child.firstname}
                key={child.idchildren}
              >
                {child.firstname}
                <span className="hidden">
                  {setChildrenId(child.idchildren)}
                </span>
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="address">
          <input
            name="address"
            id="address"
            placeholder="Adresse"
            className="input "
            value={adress}
            onChange={(event) => setAdress(event.target.value)}
          />
        </label>
        <label htmlFor="starting-date">
          <input
            type={type}
            step="1800"
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
      </form>
      <button
        className="btn-gradient col-start-2 lg:col-start-3 col-end-10 row-start-9 lg:row-start-10 lg:row-end-11 justify-self-center lg:self-end"
        type="button"
        onClick={handleSubmitSearch}
      >
        Rechercher
      </button>
    </div>
  );
}

export default Search;
