import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Validation from "../components/Validation";
import UploadValidation from "../components/UploadValidation";
import btnbaby1 from "../assets/formulaire/Baby1.svg";
import btnbaby2 from "../assets/formulaire/Baby2.svg";
import plusCircle from "../assets/formulaire/plus-circle.svg";
import blocParent from "../assets/formulaire/Brique-Parents.svg";
import blocEnfant from "../assets/formulaire/Brique-Enfants.svg";
import blocInscription from "../assets/formulaire/Brique-Inscription.svg";
import chevronWhite from "../assets/chevron-white.svg";

function FormulaireEnfant() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [canwalk, setCanWalk] = useState("");
  const [allergie, setAllergie] = useState("");
  const [medecinTraitant, setMedecinTraitant] = useState("");
  const [assurance, setAssurance] = useState(null);
  const [carnetsante, setCarnetSante] = useState(null);
  const [idchildren, setIdChildren] = useState(null);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/FormulaireParent");
  };

  const dossierParent = {
    firstname,
    lastname,
    birthdate,
    canwalk,
    allergie,
    medecinTraitant,
    assurance,
    carnetsante,
  };

  useEffect(() => {
    if (idchildren) {
      axios
        .get(`/api/enfants/${idchildren}`, dossierParent)
        .then((response) => {
          const { data } = response;
          setFirstname(data.firstname);
          setLastname(data.lastname);
          setBirthDate(data.birthdate);
          setCanWalk(data.canwalk);
          setAllergie(data.allergie);
          setMedecinTraitant(data.medecinTraitant);
        })
        .catch((error) => {
          console.error(error);
          alert(
            "Une erreur est survenue lors de la récupération des données de l'enfant."
          );
        });
    }
  }, [idchildren]);

  useEffect(() => {
    const formData = new FormData();
    formData.append("assurance", assurance);

    if (idchildren && assurance) {
      axios
        .post(`/api/enfants/${idchildren}/upload`, formData)
        .then(() => alert("Le fichier a été enregistré avec succès !"))
        .catch((error) => {
          console.error(error);
          alert("Une erreur est survenue lors de l'enregistrement du fichier.");
        });
    }
  }, [idchildren, assurance]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const childrenFile = {
      firstname,
      lastname,
      birthdate,
      canwalk,
      allergie,
      assurance,
      carnetsante,
    };

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/enfants`, childrenFile)
      .then((response) => {
        setIdChildren(response.data.id);
        alert("Le dossier a été enregistré avec succès !");
      })
      .catch((error) => {
        console.error(error);
        alert("Une erreur est survenue lors de l'enregistrement du dossier.");
      });
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setAssurance(file);
    setCarnetSante(file);
  };

  return (
    <div>
      <div className="flex flex-col justify-center  text-white gradient-linear pt-10">
        <div className="flex flex-row justify-center">
          <img src={chevronWhite} alt="chevron" />
          <p className="text-2xl">
            {" "}
            Ed Canaan <br />
            Papa Poule
          </p>
        </div>

        <div className="flex flex-row justify-evenly  pb-8 pt-2">
          <img src={blocParent} alt="bloc parent" />
          <img src={blocEnfant} alt="block enfant" />
          <img src={blocInscription} alt="block inscription" />
        </div>
      </div>

      <p className="ml-9 text-xl font-nunito text-gradient-purple font-semibold py-8 lg:ml-20 ">
        Dossier enfants
      </p>
      <div className="flex flex-row justify-evenly pb-5 mx-5 lg:mx-24 lg:pb-10 lg:justify-evenly">
        <img src={btnbaby1} alt="button baby 1" />
        <img src={btnbaby2} alt="button baby 2" />
        <img src={plusCircle} alt="plus circle" />
      </div>
      <form
        className=" text-grey-input grid  gap-7 space-between justify-center lg:grid lg:grid-cols-1 lg:gap-10 lg:w-4/5 ml-auto mr-auto"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="firstname"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4"
        >
          <Validation isValid={firstname !== ""} />
          <input
            className=" w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12 mds:ml-[2.5rem] mds:mr-[1rem] lg:ml-[6.5rem]"
            type="text"
            id="firstname"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
            required
            placeholder="nom"
          />
        </label>
        <label
          htmlFor="lastname"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4"
        >
          <Validation isValid={lastname !== ""} />
          <input
            className=" w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12 mds:ml-[2.5rem] mds:mr-[1rem] lg:ml-[6.5rem]"
            type="text"
            id="lastname"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
            required
            placeholder="Prénom"
          />
        </label>
        <label
          htmlFor="birthdate"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4 "
        >
          <Validation isValid={birthdate !== ""} />
          <input
            className=" w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12 mds:ml-[2.5rem] mds:mr-[1rem] lg:ml-[6.5rem]"
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(event) => setBirthDate(event.target.value)}
            required
            placeholder="date de naissance"
          />
        </label>
        <label
          htmlFor="canwalk"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4 "
        >
          <Validation isValid={canwalk !== ""} />{" "}
          <p className="ml-6 lg:ml-[6.5rem]">MARCHE </p>
          <input
            className=" w-4/6 h-5 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12 mds:ml-[2.5rem] mds:mr-[1rem] lg:ml-[6.5rem] "
            type="checkbox"
            id="canWalk"
            checked={canwalk}
            onChange={(event) => setCanWalk(event.target.checked)}
            placeholder="marche"
          />
        </label>
        <label
          htmlFor="allergie"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4"
        >
          <Validation isValid={allergie !== ""} />
          <input
            className=" w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12 mds:ml-[2.5rem] mds:mr-[1rem] lg:ml-[6.5rem]"
            type="text"
            id="allergie"
            value={allergie}
            onChange={(event) => setAllergie(event.target.value)}
            placeholder="allergies"
          />
        </label>

        <label
          htmlFor="medecinTraitant"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4 "
        >
          <Validation isValid={medecinTraitant !== ""} />
          <input
            className=" w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12 mds:ml-[2.5rem] mds:mr-[1rem] lg:ml-[6.5rem] "
            type="text"
            id="medecinTraitant"
            value={medecinTraitant}
            onChange={(event) => setMedecinTraitant(event.target.value)}
            placeholder="médecin traitant"
          />
        </label>
        <label
          htmlFor="Assurance"
          className="flex flex-row justify-evenly md:ml-[1.75rem] mds:justify-evenky lg:ml-[5.75rem] "
        >
          <Validation isValid={assurance !== null} />
          <input
            className="w-3/5 p-3 border-solid border-2 border-grey-input rounded-lg md:ml-10 mds:w-10/12 lg:w-8/12 lg:ml-[7rem] lg:mr-[12rem] "
            type="file"
            id="assurance"
            onChange={handleUpload}
            placeholder="assurance"
          />
          <UploadValidation isValidate={assurance !== null} />
        </label>
        <label
          htmlFor="carnetsante"
          className="flex flex-row justify-evenly md:ml-[1.75rem] lg:ml-[5.75rem]"
        >
          <Validation isValid={carnetsante !== null} />
          <input
            className="w-3/5 p-3 border-solid border-2 border-grey-input rounded-lg md:ml-10 mds:w-10/12  lg:w-8/12 lg:ml-[7rem] lg:mr-[12rem]"
            type="file"
            id="carnetsante"
            onChange={handleUpload}
            placeholder="carnet santé"
          />
          <UploadValidation isValidate={carnetsante !== null} />
        </label>
        <button
          className="btn-rounded-purple ml-44 lg:ml-[75%]"
          type="submit"
          onClick={handleClick}
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
}
export default FormulaireEnfant;
