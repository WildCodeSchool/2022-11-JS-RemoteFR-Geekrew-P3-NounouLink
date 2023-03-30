import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import userAPI from "../services/userAPI";

import logo from "../assets/logo.svg";
import next from "../assets/next.svg";
import hero from "../assets/hero-lg.svg";

function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    setUserId,
    setParentId,
    setNannyId,
    setFirstname,
    setLastname,
    setAdress,
    setAggregationNumber,
    setCafNumber,
    setCarInsurance,
    setUserEmail,
    setCustodyAdress,
    setDateAgrement,
    setDegreeLevel,
    setDiploma,
    setExitPermit,
    setExperience,
    setHomeInsurance,
    setHourlyRate,
    setHygiene,
    setImageRights,
    setKind,
    setMealPrice,
    setOvertime,
    setPedagogy,
    setPhone,
    setPictures,
    setPlacesMax,
    setPresentation,
    setPriceKilometre,
    setProfilPicture,
    setProofOfResidence,
    setPsc1,
    setRanking,
    setSecuCertificate,
    setTariffMajor,
  } = useUserContext();

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const res = await userAPI.post("/api/login", { email, password });

        const dataSet = () => {
          setUserId(res.data.idusers);
          setParentId(res.data.idparents);
          setNannyId(res.data.idnannies);
          setFirstname(res.data.firstname);
          setLastname(res.data.lastname);
          setAdress(res.data.adress);
          setAggregationNumber(res.data.aggregation_number);
          setCafNumber(res.data.caf_number);
          setCarInsurance(res.data.car_insurance);
          setUserEmail(res.data.email);
          setCustodyAdress(res.data.custody_address);
          setDateAgrement(res.data.date_agreement);
          setDegreeLevel(res.data.degree_level);
          setDiploma(res.data.diploma);
          setExitPermit(res.data.exit_permit);
          setExperience(res.data.experience);
          setHomeInsurance(res.data.home_insurance);
          setHourlyRate(res.data.hourly_rate);
          setHygiene(res.data.hygiene);
          setImageRights(res.data.image_rights);
          setKind(res.data.kind);
          setMealPrice(res.data.meal_price);
          setOvertime(res.data.overtime);
          setPedagogy(res.data.pedagogy);
          setPhone(res.data.phone);
          setPictures(res.data.pictures);
          setPlacesMax(res.data.places_max);
          setPresentation(res.data.presentation);
          setPriceKilometre(res.data.price_kilometre);
          setProfilPicture(res.data.profile_picture);
          setProofOfResidence(res.data.proof_of_residence);
          setPsc1(res.data.psc1);
          setRanking(res.data.ranking);
          setSecuCertificate(res.data.secu_certificate);
          setTariffMajor(res.data.tariff_major);
        };
        dataSet();
        if (res.data.kind === "parent") {
          navigate("/menu");
          toast.success("Bienvenue");
        }
        if (res.data.kind === "ass_mat") {
          navigate("/pro");
          toast.success("Bienvenue");
        }
      } catch (err) {
        console.error(err);
        toast.warning("Please specify a valid email and password");
      }
    }
  };
  const handleClick = () => {
    navigate("/creationcompte");
  };

  return (
    <div className="gradient-linear grow grid grid-rows-connexion lg:grid-rows-none lg:grid-cols-3 max-lg:landscape:grid-rows-5 lg:landscape:grid-rows-none items-center justify-center h-full w-full font-nunito text-white">
      <img
        src={logo}
        alt="logo NounouLink"
        className="max-md:landscape:scale-50 max-lg:landscape:scale-75  justify-self-center  lg:self-start lg:p-8 row-start-1  lg:col-start-1 lg:col-span-1 "
      />
      <img
        src={hero}
        alt="hero NounouLink"
        className="hidden lg:flex max-lg:landscape:scale-50 lg:scale-[0.7] justify-self-center row-start-1 lg:self-end lg:col-start-1 lg:col-span-2"
      />
      <form className="flex flex-col items-center justify-evenly w-full h-full lg:h-[60%]  row-start-2 lg:row-start-auto max-lg:landscape:row-span-3">
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
        <button className="btn-gradient" type="button" onClick={handleSubmit}>
          Me connecter
        </button>
        <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-4 lg:mb-8">
          <p>Créer mon compte</p>
          <button type="submit" onClick={handleClick}>
            <img src={next} alt="go next" />
          </button>
        </div>
      </form>
      <div className="lg:hidden flex flex-row items-center justify-center gap-4">
        <p>Créer mon compte</p>
        <button type="submit" onClick={handleClick}>
          <img src={next} alt="go next" />
        </button>
      </div>
    </div>
  );
}

export default Connexion;
