import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Validation from "../components/Validation";
import btnbaby1 from "../assets/formulaire/Baby1.svg";
import btnbaby2 from "../assets/formulaire/Baby2.svg";
import plusCircle from "../assets/formulaire/plus-circle.svg";

function FormulaireParent() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [ville, setVille] = useState("");
  const [telephone, setTelephone] = useState("");
  const [idparents, setIdParents] = useState(null);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/FormulaireInscription");
  };

  useEffect(() => {
    if (idparents) {
      axios
        .get(`/api/parents/${idparents}`)
        .then((response) => {
          const { data } = response;
          setFirstname(data.firstname);
          setLastname(data.lastname);
          setEmail(data.email);
          setAdress(data.adress);
          setCodePostal(data.codePostal);
          setVille(data.ville);
          setTelephone(data.telephone);
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

    const parentFile = {
      firstname,
      lastname,
      email,
      adress,
      codePostal,
      ville,
      telephone,
    };

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/parents`, parentFile)
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
      <Navbar />
      <p className="ml-9 text-xl font-nunito text-gradient-purple font-semibold py-8 lg:ml-20 ">
        Dossier Parent
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
          <Validation isValid={email !== ""} />
          <input
            className="w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem] "
            type="text"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="Email"
          />
        </label>
        <label
          htmlFor="adress"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4 "
        >
          <Validation isValid={adress !== ""} />{" "}
          <input
            className="w-4/6 ml-7 p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem] "
            type="text"
            id="adress"
            checked={adress}
            onChange={(event) => setAdress(event.target.value)}
            placeholder="N°et nom de rue"
          />
        </label>
        <label
          htmlFor="codePostal"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4"
        >
          <Validation isValid={codePostal !== ""} />
          <input
            className="w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem] "
            type="text"
            id="codePostal"
            value={codePostal}
            onChange={(event) => setCodePostal(event.target.value)}
            placeholder="Code Postal"
          />
        </label>

        <label
          htmlFor="ville"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4 "
        >
          <Validation isValid={ville !== ""} />
          <input
            className=" w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem] "
            type="text"
            id="ville"
            value={ville}
            onChange={(event) => setVille(event.target.value)}
            placeholder="Ville"
          />
        </label>

        <label
          htmlFor="telephone"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4 "
        >
          <Validation isValid={telephone !== ""} />
          <input
            className=" w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem] "
            type="text"
            id="telephone"
            value={telephone}
            onChange={(event) => setTelephone(event.target.value)}
            placeholder="Numéro de téléphone"
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
