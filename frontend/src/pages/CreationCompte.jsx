import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

import chevron from "../assets/chevron-left.svg";

function CreationCompte() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");

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
        alert("La création a réussi !");
      })
      .catch((error) => {
        console.error(error);
        alert("Une erreur est survenue lors de l'enregistrement du compte.");
      });
  };

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-center text-center font-nunito text-black font-semibold text-3xl py-8">
        <img src={chevron} alt="chevron" />
        <p>Création de compte</p>
      </div>

      <div>
        <form
          className="text-grey-input grid gap-7 space-between justify-center"
          onSubmit={handleSubmit}
        >
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
          <button className="btn-purple" type="submit">
            Créer mon compte
          </button>
        </form>
      </div>
    </div>
  );
}
export default CreationCompte;
