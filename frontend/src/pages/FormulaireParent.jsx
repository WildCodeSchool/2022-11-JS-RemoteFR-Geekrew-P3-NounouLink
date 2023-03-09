import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Validation from "../components/Validation";

function FormulaireParent() {
  const [cafNumber, setCafNumber] = useState("");
  const [exitPermit, setExitPermit] = useState("");
  const [imageRights, setImageRights] = useState("");
  const [idparents, setIdParents] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/recherche");
  };

  const inscriptionFile = {
    cafNumber,
    exitPermit,
    imageRights,
  };

  useEffect(() => {
    if (idparents) {
      axios
        .get(`/api/parents/${idparents}`, inscriptionFile)
        .then((response) => {
          const { data } = response;
          setCafNumber(data.cafNumber);
          setExitPermit(data.exitPermit);
          setImageRights(data.imageRights);
          setIdParents(data.idparents);
        })
        .catch((error) => {
          console.error(error);
          toast.error(
            "Une erreur est survenue lors de la récupération des données de l'enfant."
          );
        });
    }
  }, [idparents]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const parentsFile = {
      cafNumber,
      exitPermit,
      imageRights,
    };

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/parents`, parentsFile)
      .then((response) => {
        setIdParents(response.data.id);
        toast.success("Le dossier a été enregistré avec succès !");
      })
      .catch((error) => {
        console.error(error);
        toast.error(
          "Une erreur est survenue lors de l'enregistrement du dossier."
        );
      });
  };

  return (
    <div>
      <Navbar />
      <p className="ml-9 text-xl font-nunito text-gradient-purple font-semibold py-8 lg:ml-20 ">
        Dossier Inscription
      </p>

      <form
        className=" text-grey-input grid  gap-7 space-between justify-center lg:grid lg:grid-cols-1 lg:gap-10 lg:w-4/5 ml-auto mr-auto"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="cafNumber"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4"
        >
          <Validation isValid={cafNumber !== ""} />
          <input
            className="w-4/6 ml-6  p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem]"
            type="text"
            id="cafNumber"
            value={cafNumber}
            onChange={(event) => setCafNumber(event.target.value)}
            required
            placeholder="Numéro Allocataire CAF"
          />
        </label>
        <label
          htmlFor="exitPermit"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4"
        >
          <Validation isValid={exitPermit !== ""} />
          <input
            className="w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem]"
            type="text"
            id="exitPermit"
            value={exitPermit}
            onChange={(event) => setExitPermit(event.target.value)}
            required
            placeholder="Autorisation de sortie"
          />
        </label>
        <label
          htmlFor="imageRights"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4"
        >
          <Validation isValid={imageRights !== ""} />
          <input
            className="w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem]"
            type="text"
            id="imageRights"
            value={imageRights}
            onChange={(event) => setImageRights(event.target.value)}
            required
            placeholder="Autorisation droit à l'image"
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
export default FormulaireParent;
