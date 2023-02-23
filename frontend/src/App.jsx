import React, { useState } from "react";
import logo from "./assets/logo.svg";
import next from "./assets/next.svg";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");

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

  return (
    <div className="gradient-linear flex flex-col items-center justify-between py-8 h-full w-full font-nunito text-white">
      <img src={logo} alt="logo NounouLink" />
      <form className="flex flex-col items-center justify-evenly w-full h-full ">
        <label className="mix-blend-screen" htmlFor="email">
          <input
            className="bg-grey-input rounded-lg w-[300px] h-[60px] bg-opacity-30 placeholder-white pl-4"
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
            className="bg-grey-input rounded-lg w-[300px] h-[60px] bg-opacity-30 placeholder-white pl-4"
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
      <div className="flex flex-row items-center justify-between w-6/12">
        <p>Créer mon compte</p>
        <button type="button">
          <img src={next} alt="go next" />
        </button>
      </div>
    </div>
  );
}

export default App;
