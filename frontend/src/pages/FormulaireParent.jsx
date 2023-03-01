import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Validation from "../components/Validation";

function FormulaireParent() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [kind, setKind] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [idparents, setIdParents] = useState("");

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
          setKind(data.kind);
          setEmail(data.email);
          setAdress(data.adress);
          setPhone(data.phone);
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
      kind,
      email,
      adress,

      phone,
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
          htmlFor="kind"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4"
        >
          <Validation isValid={kind !== ""} />
          <input
            className="w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem] "
            type="text"
            id="kind"
            value={kind}
            onChange={(event) => setKind(event.target.value)}
            placeholder="civilité"
          />
        </label>
        <label
          htmlFor="email"
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
            placeholder="N°et nom de rue, Cp, Ville"
          />
        </label>

        <label
          htmlFor="phone"
          className="flex flex-row mr-2 ml-7 lg:ml-24 lg:mr-4 "
        >
          <Validation isValid={phone !== ""} />
          <input
            className=" w-4/6 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg lg:ml-[6.5rem] "
            type="text"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
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
