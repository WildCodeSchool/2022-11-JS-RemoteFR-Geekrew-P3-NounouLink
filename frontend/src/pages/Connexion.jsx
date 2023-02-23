import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import next from "../assets/next.svg";

function Connexion() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const isValidEmail = (mail) => {
    return /^[\w-_.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(mail);
  };

  const handleEmailChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    navigate("/creation-compte");
  };

  return (
    <div className="gradient-linear grid grid-rows-connexion max-lg:landscape:grid-rows-5 items-center justify-center h-full w-full font-nunito text-white">
      <img
        src={logo}
        alt="logo NounouLink"
        className="max-lg:landscape:scale-50 justify-self-center row-start-1 "
      />
      <form className="flex flex-col items-center justify-evenly w-full h-full row-start-2 max-lg:landscape:row-span-3">
        <label className="mix-blend-screen" htmlFor="email">
          <input
            className="bg-grey-input rounded-lg w-[300px] h-[60px] max-md:landscape:h-[40px] bg-opacity-30 placeholder-white pl-4"
            type="email"
            name="email"
            id="email"
            placeholder="Adresse mail"
            value={email}
            onChange={handleEmailChange}
          />
          {error && <h2 className="text-red-500">{error}</h2>}
        </label>
        <label className="mix-blend-screen" htmlFor="password">
          <input
            className="bg-grey-input rounded-lg w-[300px] h-[60px] max-md:landscape:h-[40px] bg-opacity-30 placeholder-white pl-4"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button className="btn-purple" type="button">
          Me connecter
        </button>
        <p>J'ai oublié mon mot de passe</p>
      </form>
      <div className="flex flex-row items-center justify-center gap-4">
        <p>Créer mon compte</p>
        <button type="submit" onClick={handleSubmit}>
          <img src={next} alt="go next" />
        </button>
      </div>
    </div>
  );
}

export default Connexion;
