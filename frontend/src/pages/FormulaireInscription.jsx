import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Validation from "../components/Validation";
import btnbaby1 from "../assets/formulaire/Baby1.svg";
import btnbaby2 from "../assets/formulaire/Baby2.svg";
import plusCircle from "../assets/formulaire/plus-circle.svg";
import blocParent from "../assets/formulaire/Brique-Parents.svg";
import blocEnfant from "../assets/formulaire/Brique-Enfants.svg";
import blocInscription from "../assets/formulaire/Brique-Inscription.svg";
import chevronWhite from "../assets/chevron-white.svg";

function FormulaireInscription() {
  /* const [currentPage, setCurrentPage] = useState(1); 
  const [babyPage, setBabyPage] = useState(10); */
  const [numcaf, setNumcaf] = useState("");
  const [autsortie, setAutsortie] = useState("");
  const [droitimage, setDroitimage] = useState("");
  const [personneConfiance, setPersonneConfiance] = useState("");
  const [idparents, setIdParents] = useState(null);
  /* const [enfants, setEnfants] = useState([]); */
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Recherche");
  };

  const inscriptionFile = {
    numcaf,
    autsortie,
    droitimage,
    personneConfiance,
  };

  useEffect(() => {
    if (idparents) {
      axios
        .get(`/api/parents/${idparents}`, inscriptionFile)
        .then((response) => {
          const { data } = response;
          setNumcaf(data.numcaf);
          setAutsortie(data.autsortie);
          setDroitimage(data.droitimage);
          setPersonneConfiance(data.personneConfiance);
          setIdParents(data.idparents);
        })
        .catch((error) => {
          console.error(error);
          alert(
            "Une erreur est survenue lors de la récupération des données de l'enfant."
          );
        });
    }
  }, [idparents]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const parentsFile = {
      numcaf,
      autsortie,
      droitimage,
      personneConfiance,
    };

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/parents`, parentsFile)
      .then((response) => {
        setIdParents(response.data.id);
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
        Dossier Inscription
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
          htmlFor="numcaf"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4"
        >
          <Validation isValid={numcaf !== ""} />
          <input
            className="w-4/6 ml-6  p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem]"
            type="text"
            id="numcaf"
            value={numcaf}
            onChange={(event) => setNumcaf(event.target.value)}
            required
            placeholder="Numéro Allocataire CAF"
          />
        </label>
        <label
          htmlFor="droitimage"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4"
        >
          <Validation isValid={droitimage !== ""} />
          <input
            className="w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem]"
            type="text"
            id="droitimage"
            value={droitimage}
            onChange={(event) => setDroitimage(event.target.value)}
            required
            placeholder="Autorisation droit à l'image"
          />
        </label>
        <label
          htmlFor="autsortie"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4 "
        >
          <Validation isValid={autsortie !== ""} />
          <input
            className="w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem] "
            type="text"
            id="autsortie"
            value={autsortie}
            onChange={(event) => setAutsortie(event.target.value)}
            required
            placeholder="Autorisation de sortie"
          />
        </label>

        <label
          htmlFor="personneconfiance"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4 "
        >
          <Validation isValid={personneConfiance !== ""} />
          <input
            className=" w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem] "
            type="text"
            id="personneconfiance"
            value={personneConfiance}
            onChange={(event) => setPersonneConfiance(event.target.value)}
            placeholder="Personne de confiance"
          />
        </label>
        <button
          className="btn-rounded-purple ml-44 lg:ml-[50%]"
          type="submit"
          onClick={handleClick}
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
}
export default FormulaireInscription;
