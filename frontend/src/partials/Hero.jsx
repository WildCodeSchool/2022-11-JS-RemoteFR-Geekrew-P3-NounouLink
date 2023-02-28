import React from "react";
import hero from "../assets/hero-lg.svg";

function Hero() {
  return (
    <img
      src={hero}
      alt="hero NounouLink"
      className="hidden lg:flex max-lg:landscape:scale-50 justify-self-center row-start-1 lg:self-end lg:col-start-1 lg:col-span-2"
    />
  );
}

export default Hero;
