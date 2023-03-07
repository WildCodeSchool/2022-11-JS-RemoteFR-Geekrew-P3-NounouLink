import React, { useState } from "react";
import { toast } from "react-toastify";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import chevron from "../assets/chevron-left.svg";
import hero from "../assets/hero-lg.svg";
import logo from "../assets/logo.svg";

function CreationCompte() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/connexion");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const dossierCreation = {
      firstname,
      lastname,
      email,
      adress,
      phone,
      password,
      type,
    };

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/users`, dossierCreation)
      .then(() => {
        toast.success("La création a réussi !");
      })
      .catch((error) => {
        console.error(error);
        toast.error(
          "Une erreur est survenue lors de l'enregistrement du compte."
        );
      });
    navigate("/formulaireenfant");
  };

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div className=" gradient-linear grow h-screen lg:grid lg:justify-items-center lg:grid-cols-2 lg:row-span-4 lg:items-center max-md:landscape:h-max max-lg:landscape:h-max lg:h-max ">
      <div className="flex justify-center text-center font-nunito text-black font-semibold text-3xl py-8 lg:col-start-2 lg:row-start-1 lg:mr-18">
        <button type="button" onClick={handleClick}>
          <img src={chevron} alt="chevron" />
        </button>
        <p>Création de compte</p>
      </div>
      <div className="lg:col-start-2 lg:row-start-2 lg:row-span-5 ">
        <form className="placeholder:text-grey-input text-black grid gap-3  space-between justify-center md:grid md:grid-cols-1 md:gap-10 md:w-4/5 ml-auto mr-auto lg:gap-7">
          <select
            className="p-3 border-solid border-2 border-grey-input rounded-lg"
            value={type}
            onChange={handleChange}
          >
            <option value="Vous êtes ?">Vous êtes ?</option>
            <option value="parent">Parent</option>
            <option value="assistanteMaternelle">Assistante maternelle</option>
            <option value="admin">Admin</option>
          </select>

          <input
            className="p-3 border-solid border-2 border-grey-input rounded-lg"
            type="text"
            id="firstname"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
            required
            placeholder="Nom"
          />
          <input
            className="p-3 border-solid border-2 border-grey-input rounded-lg"
            type="text"
            id="lastname"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
            required
            placeholder="Prénom"
          />
          <input
            className="p-3 border-solid border-2 border-grey-input rounded-lg"
            type="text"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="Email"
          />
          <input
            className="p-3 border-solid border-2 border-grey-input rounded-lg"
            type="text"
            id="adress"
            value={adress}
            onChange={(event) => setAdress(event.target.value)}
            required
            placeholder="Adresse, CP, Ville"
          />
          <input
            className="p-3 border-solid border-2 border-grey-input rounded-lg"
            type="text"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
            placeholder="Téléphone Mobile"
          />
          <input
            className="p-3 border-solid border-2 border-grey-input rounded-lg"
            type="text"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            placeholder="Mot de passe"
          />
          <button className="btn-purple md:ml-auto lg:hidden " type="submit">
            Créer mon compte
          </button>
        </form>
        <div className="lg:pt-8">
          <button
            className="btn-purple md:ml-auto hidden lg:block "
            type="submit"
            onClick={handleSubmit}
          >
            Créer mon compte
          </button>
        </div>
      </div>
      <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-6 lg:ml-8 ">
        <img src={logo} alt="logo" className="hidden lg:block " />
        <img
          src={hero}
          alt="hero"
          className="hidden lg:block lg:row-start-2 lg:row-span-4 lg:scale-90"
        />
      </div>
    </div>
  );
}
export default CreationCompte;
