import React from "react";
import logo from "./assets/logo.svg";
import next from "./assets/next.svg";

function App() {
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
          />
        </label>
        <label className="mix-blend-screen" htmlFor="password">
          <input
            className="bg-grey-input rounded-lg w-[300px] h-[60px] bg-opacity-30 placeholder-white pl-4"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
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
