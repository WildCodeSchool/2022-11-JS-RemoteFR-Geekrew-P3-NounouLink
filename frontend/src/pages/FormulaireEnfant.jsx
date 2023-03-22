import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import userAPI from "../services/userAPI";

import Validation from "../components/Validation";
import UploadValidation from "../components/UploadValidation";
import btnbaby1 from "../assets/formulaire/Baby1.svg";
import btnbaby2 from "../assets/formulaire/Baby2.svg";
import plusCircle from "../assets/formulaire/plus-circle.svg";
import Navbar from "../components/Navbar";

function FormulaireEnfant() {
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [birthdate, setBirthDate] = useState(null);
  const [canwalk, setCanWalk] = useState(null);
  const [allergie, setAllergie] = useState(null);
  const [insurance, setInsurance] = useState([]);
  const [healthbook, setHealthBook] = useState([]);

  const { userId, parentId, childrenId, setChildrenId } = useUserContext();

  const parentsIdparents = parentId;
  const parentsUsersIdusers = userId;

  const navigate = useNavigate();

  useEffect(() => {
    if (childrenId) {
      userAPI
        .get(`/api/enfants/${childrenId}`)
        .then((response) => {
          setFirstname(response.data.firstname);
          setLastname(response.data.lastname);
          setBirthDate(response.data.birthdate);
          setCanWalk(response.data.canwalk);
          setAllergie(response.data.allergie);
          setInsurance(response.data.insurance);
          setHealthBook(response.data.healthbook);
        })
        .catch((error) => {
          console.error(error);
          toast.error(
            "Une erreur est survenue lors de la récupération des données de l'enfant."
          );
        });
    }
  }, []);

  const childrenFile = {
    firstname,
    lastname,
    birthdate,
    canwalk,
    allergie,
    parentsIdparents,
    parentsUsersIdusers,
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/enfants`, childrenFile)
      .then((response) => {
        setChildrenId(response.data.childrenId);
        toast.success("Le dossier a été enregistré avec succès !");
        navigate("/recherche");
      })
      .catch((error) => {
        console.error(error);
        toast.error(
          "Une erreur est survenue lors de l'enregistrement du dossier."
        );
      });
  };
  const uploadInsurance = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("birthdate", birthdate);
    formData.append("canwalk", canwalk);
    formData.append("allergie", allergie);
    formData.append("insurance", insurance);
    formData.append("healthbook", healthbook);
    formData.append("parentsIdparents", parentsIdparents);
    formData.append("parentsUsersIdusers", parentsUsersIdusers);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/enfants`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        navigate("/recherche");
      });
  };

  return (
    <div>
      <Navbar />

      <p className="ml-9 text-xl font-nunito text-gradient-purple font-semibold py-8 lg:ml-20  ">
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
          <p className="ml-6 lg:ml-[6.5rem]" />
          <input
            className=" w-4/6 h-5 ml-6 p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12 mds:ml-[2.5rem] mds:mr-[1rem] lg:ml-[6.5rem] "
            type="text"
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
          htmlFor="insurance"
          className="flex flex-row justify-evenly md:ml-[1.75rem] mds:justify-evenky lg:ml-[5.75rem] "
        >
          <Validation isValid={insurance !== null} />
          <input
            className="w-3/5 p-3 border-solid border-2 border-grey-input rounded-lg md:ml-10 mds:w-10/12 lg:w-8/12 lg:ml-[7rem] lg:mr-[12rem] "
            type="file"
            id="insurance"
            onChange={(evt) => setInsurance(evt.target.files[0])}
            placeholder="Assurance"
          />

          <UploadValidation isValidate={insurance !== null} />
        </label>
        <label
          htmlFor="healthbook"
          className="flex flex-row justify-evenly md:ml-[1.75rem] lg:ml-[5.75rem]"
        >
          <Validation isValid={healthbook !== null} />
          <input
            className="w-3/5 p-3 border-solid border-2 border-grey-input rounded-lg md:ml-10 mds:w-10/12  lg:w-8/12 lg:ml-[7rem] lg:mr-[12rem]"
            type="file"
            id="healthbook"
            onChange={(evt) => setHealthBook(evt.target.files[0])}
            placeholder="carnet santé"
          />
          <UploadValidation isValidate={healthbook !== null} />
        </label>
        <button
          className="btn-rounded-purple ml-44 lg:ml-[75%] mt-1"
          type="submit"
          onClick={uploadInsurance}
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
}
export default FormulaireEnfant;
