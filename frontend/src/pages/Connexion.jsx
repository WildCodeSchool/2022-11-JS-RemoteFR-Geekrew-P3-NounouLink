import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import next from "../assets/next.svg";
import hero from "../assets/hero-lg.svg";

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
    navigate("/creationcompte");
  };

  return (
    <div className="justify-center w-full grow grid grid-rows-mobile grid-cols-mobile md:grid-cols-5 lg:landscape:grid-cols-7 lg:landscape:grid-rows-desktop gradient-linear font-nunito text-white">
      <img
        className=" justify-self-center self-center col-start-1 col-end-4 md:col-start-2 lg:landscape:col-start-1 md:col-end-5 row-start-1 row-end-1 flex flex-col items-center justify-evenly"
        src={logo}
        alt="logo"
      />

      <img
        className="col-span-3 md:col-start-2 lg:landscape:col-start-1 lg:landscape:col-end-5 row-start-2 row-end-2 lg:landscape:row-end-4 flex w-full lg:landscape:w-11/12 self-center justify-self-center lg:landscape:justify-self-start"
        src={hero}
        alt="hero"
      />

      <form className="col-start-1 md:col-start-2 col-span-3 lg:landscape:col-start-5 row-start-3 row-end-5 lg:landscape:row-start-2 lg:landscape:row-end-4 justify-self-center lg:landscape:self-end lg:landscape:justify-self-center flex flex-col items-center justify-evenly lg:landscape:justify-betwwen w-full lg:landscape:landscape:w-3/4 lg:landscape:h-3/4">
        <label
          className="mix-blend-screen flex flex-col w-10/12 h-full"
          htmlFor="email"
        >
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="Adresse mail"
            value={email}
            onChange={handleEmailChange}
          />
          {error && <h2 className="text-red-500">{error}</h2>}
        </label>
        <label
          className="mix-blend-screen flex flex-col w-10/12 h-full"
          htmlFor="password"
        >
          <input
            className="input"
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
        <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-4 lg:mb-8">
          <p>Créer mon compte</p>
          <button type="submit" onClick={handleSubmit}>
            <img src={next} alt="go next" />
          </button>
        </div>
      </form>
      {/* <div className="lg:hidden flex flex-row items-center justify-center gap-4">
        <p>Créer mon compte</p>
        <button type="submit" onClick={handleSubmit}>
          <img src={next} alt="go next" />
        </button>
      </div> */}
    </div>

    // // <div className="gradient-linear grow grid grid-rows-connexion lg:grid-rows-none lg:grid-cols-3 max-lg:landscape:grid-rows-5 lg:landscape:grid-rows-none items-center justify-center h-full w-full font-nunito text-white">
    // //   <img
    // //     src={logo}
    // //     alt="logo NounouLink"
    // //     className="max-md:landscape:scale-50 max-lg:landscape:scale-75  justify-self-center  lg:self-start lg:p-8 row-start-1  lg:col-start-1 lg:col-span-1 "
    // //   />
    // //   <img
    // //     src={hero}
    // //     alt="hero NounouLink"
    // //     className="hidden lg:flex max-lg:landscape:scale-50 lg:scale-[0.7] justify-self-center row-start-1 lg:self-end lg:col-start-1 lg:col-span-2"
    // //   />
    //   // <form className="flex flex-col items-center justify-evenly w-full h-full lg:h-[60%]  row-start-2 lg:row-start-auto max-lg:landscape:row-span-3">
    //   //   <label className="mix-blend-screen" htmlFor="email">
    //       {/* <input
    //         className="bg-grey-input rounded-lg w-[300px] h-[60px] max-md:landscape:h-[40px] bg-opacity-30 placeholder-white pl-4"
    //         type="email"
    //         name="email"
    //         id="email"
    //         placeholder="Adresse mail"
    //         value={email}
    //         onChange={handleEmailChange}
    //       />
    //       {error && <h2 className="text-red-500">{error}</h2>}
    //     </label>
    //     <label className="mix-blend-screen" htmlFor="password">
    //       <input
    //         className="bg-grey-input rounded-lg w-[300px] h-[60px] max-md:landscape:h-[40px] bg-opacity-30 placeholder-white pl-4"
    //         type="password"
    //         name="password"
    //         id="password"
    //         placeholder="Mot de passe"
    //         value={password}
    //         onChange={handlePasswordChange}
    //       />
    //     </label>
    //     <button className="btn-purple" type="button">
    //       Me connecter
    //     </button>
    //     <p>J'ai oublié mon mot de passe</p>
    //     <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-4 lg:mb-8">
    //       <p>Créer mon compte</p>
    //       <button type="submit" onClick={handleSubmit}>
    //         <img src={next} alt="go next" />
    //       </button>
    //     </div>
    //   </form> */}
    // //   <div className="lg:hidden flex flex-row items-center justify-center gap-4">
    // //     <p>Créer mon compte</p>
    // //     <button type="submit" onClick={handleSubmit}>
    // //       <img src={next} alt="go next" />
    // //     </button>
    // //   </div>
    // // </div>
  );
}

export default Connexion;
