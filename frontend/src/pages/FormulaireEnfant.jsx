import React, { useState, useEffect } from "react";
import axios from "axios";

import Validation from "../components/Validation";
import { UploadValidation } from "../components/UploadValidation";
import btnbaby1 from "../assets/formulaire/Baby1.svg";
import btnbaby2 from "../assets/formulaire/Baby2.svg";
import plusCircle from "../assets/formulaire/plus-circle.svg";
import blocParent from "../assets/formulaire/Brique-Parents.svg";
import blocEnfant from "../assets/formulaire/Brique-Enfants.svg";
import blocInscription from "../assets/formulaire/Brique-Inscription.svg";
import chevronWhite from "../assets/chevron-white.svg";

function FormulaireEnfant() {
  /* const [currentPage, setCurrentPage] = useState(1); 
  const [babyPage, setBabyPage] = useState(10); */
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [canwalk, setCanWalk] = useState("");
  const [allergie, setAllergie] = useState("");
  const [medecinTraitant, setMedecinTraitant] = useState("");
  const [assurance, setAssurance] = useState(null);
  const [carnetsante, setCarnetSante] = useState(null);
  const [idenfants, setIdEnfants] = useState(null);
  /* const [enfants, setEnfants] = useState([]); */

  useEffect(() => {
    if (idenfants) {
      axios
        .get(`/api/enfants/${idenfants}`)
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
  }, [idenfants]);

  useEffect(() => {
    const formData = new FormData();
    formData.append("assurance", assurance);

    if (idenfants && assurance) {
      axios
        .post(`/api/enfants/${idenfants}/upload`, formData)
        .then(() => alert("Le fichier a été enregistré avec succès !"))
        .catch((error) => {
          console.error(error);
          alert("Une erreur est survenue lors de l'enregistrement du fichier.");
        });
    }
  }, [idenfants, assurance]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const dossierEnfant = {
      firstname,
      lastname,
      birthdate,
      canwalk,
      allergie,
      assurance,
      carnetsante,
    };

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/enfants`, dossierEnfant)
      .then((response) => {
        setIdEnfants(response.data.id);
        alert("Le dossier a été enregistré avec succès !");
      })
      .catch((error) => {
        console.error(error);
        alert("Une erreur est survenue lors de l'enregistrement du dossier.");
      });
  };
  /* if (idenfants) {
      axios
        .put(
          `${import.meta.env.VITE_BACKEND_URL}/api/enfants/${idenfants}`,
          dossierEnfant
        )
        .then(() => alert("Le dossier a été modifié avec succès !"))
        .catch((error) => {
          console.error(error);
          alert("Une erreur est survenue lors de la modification du dossier.");
        }); */
  /* } else {
      window.confirm("Êtes-vous sûr de vouloir supprimer cet enfant ?");
      axios
        .delete(`/api/enfants/${idenfants}`)
        .then(() => alert("L'enfant a été supprimé avec succès !"))
        .catch((error) => {
          console.error(error);
          alert("Une erreur est survenue lors de la suppression de l'enfant.");
        });
    }
  }; */

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setAssurance(file);
    setCarnetSante(file);
  };

  return (
    <div>
      <div className="flex flex-row justify-center  text-white bg-purple pt-10">
        <img src={chevronWhite} alt="chevron" />
        <p className="text-2xl">
          {" "}
          Ed Canaan <br />
          Papa Poule
        </p>
      </div>
      <div className="flex flex-row justify-evenly bg-gradient-purple pb-8 pt-2">
        <img src={blocParent} alt="bloc parent" />
        <img src={blocEnfant} alt="block enfant" />
        <img src={blocInscription} alt="block inscription" />
      </div>
      <p className="ml-9 text-xl font-nunito text-gradient-purple font-semibold py-8 lg:ml-20 ">
        Dossier enfants
      </p>
      <div className="flex flex-row justify-between pb-5 mx-5 lg:mx-24 lg:pb-10 lg:justify-evenly">
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
            className="w-4/6 ml-6  p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem]"
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
            className="w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem]"
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
            className="w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem] "
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
          <p className="ml-6 lg:ml-[6.5rem]">marche : </p>
          <input
            className="w-4/6 ml-8 p-3 h-6 border-grey-input rounded-lg lg:ml-[6.5rem] "
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
            className="w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem] "
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
            className=" w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem] "
            type="text"
            id="medecinTraitant"
            value={medecinTraitant}
            onChange={(event) => setMedecinTraitant(event.target.value)}
            placeholder="médecin traitant"
          />
        </label>
        <label
          htmlFor="Assurance"
          className="flex flex-row justify-evenly md:ml-[1.75rem] xl:ml-[1.5rem]  "
        >
          <Validation isValid={assurance !== null} />
          <input
            className="w-3/5 p-3 border-solid border-2 border-grey-input rounded-lg md:ml-10 xl:ml-6 xl:mr-1 "
            type="file"
            id="assurance"
            onChange={handleUpload}
            placeholder="assurance"
          />
          <UploadValidation isValidate={assurance !== null} />
        </label>
        <label
          htmlFor="carnetsante"
          className="flex flex-row justify-evenly md:ml-[1.75rem] xl:ml-[1.5rem]"
        >
          <Validation isValid={carnetsante !== null} />
          <input
            className="w-3/5 p-3 border-solid border-2 border-grey-input rounded-lg md:ml-10 xl:ml-6 xl:mr-1"
            type="file"
            id="carnetsante"
            onChange={handleUpload}
            placeholder="carnet santé"
          />
          <UploadValidation isValidate={carnetsante !== null} />
        </label>
        <button className="btn-rounded-purple ml-44 lg:ml-[50%]" type="submit">
          Enregistrer
        </button>
      </form>
    </div>
  );
}
export default FormulaireEnfant;
