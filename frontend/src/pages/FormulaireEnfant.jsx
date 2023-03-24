import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
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
  const { userId, parentId, childrenId } = useUserContext();

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
    userAPI
      .post(`/api/enfants`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        navigate("/recherche");
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
      <p className="ml-9 text-xl font-nunito text-gradient-purple font-semibold py-8 lg:ml-20  ">
        Dossier enfants
      </p>
      <div className="flex flex-row justify-evenly pb-5 mx-5 lg:mx-24 lg:pb-10 lg:justify-evenly">
        <img src={btnbaby1} alt="button baby 1" />
        <img src={btnbaby2} alt="button baby 2" />
        <img src={plusCircle} alt="plus circle" />
      </div>
      <form className=" text-grey-input grid  gap-7 space-between justify-center lg:grid lg:grid-cols-1 lg:gap-10 lg:w-4/5 ml-auto mr-auto">
        <label
          htmlFor="firstname"
          className="flex flex-row items-center mr-2 ml-7 lg:ml-24 lg:mr-4"
        >
          <Validation isValid={firstname !== ""} />
          <input
            className=" w-4/6 p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12 placeholder-gray-500"
            type="text"
            id="firstname"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
            required
            placeholder="Prénom"
          />
        </label>
        <label
          htmlFor="lastname"
          className="flex flex-row items-center mr-2 ml-7 lg:ml-24 lg:mr-4"
        >
          <Validation isValid={lastname !== ""} />
          <input
            className=" w-4/6 p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12 placeholder-gray-500"
            type="text"
            id="lastname"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
            required
            placeholder="Nom"
          />
        </label>
        <label
          htmlFor="birthdate"
          className="flex flex-row items-center mr-2 ml-7 lg:ml-24 lg:mr-4 "
        >
          <Validation isValid={birthdate !== ""} />
          <input
            className=" w-4/6 p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12 placeholder-gray-500"
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
          className="flex flex-row items-center mr-2 ml-7 lg:ml-24 lg:mr-4 "
        >
          <Validation isValid={canwalk !== ""} />{" "}
          <input
            className="w-4/6 p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12 placeholder-gray-500 "
            type="text"
            id="canWalk"
            checked={canwalk}
            onChange={(event) => setCanWalk(event.target.checked)}
            placeholder="marche"
          />
        </label>
        <label
          htmlFor="allergie"
          className="flex flex-row items-center mr-2 ml-7 lg:ml-24 lg:mr-4"
        >
          <Validation isValid={allergie !== ""} />
          <input
            className="w-4/6 p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12 placeholder-gray-500"
            type="text"
            id="allergie"
            value={allergie}
            onChange={(event) => setAllergie(event.target.value)}
            placeholder="allergies"
          />
        </label>
        <div className="flex flex-row items-center mr-2 ml-7 lg:ml-24 lg:mr-4">
          <Validation isValid={insurance !== null} />
          <label
            htmlFor="insurance"
            className="w-4/6 p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12"
          >
            <span className="text-grey"> Assurance </span>
            <input
              className="w-4/6 p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12 hidden"
              type="file"
              id="insurance"
              onChange={(evt) => setInsurance(evt.target.files[0])}
              title="Assurance"
              name="Assurance"
            />
          </label>
          <UploadValidation isValidate={insurance !== null} />
        </div>
        <div className="flex flex-row items-center mr-2 ml-7 lg:ml-24 lg:mr-4">
          <Validation isValid={healthbook !== null} />
          <label
            htmlFor="healthbook"
            className="w-4/6 p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12"
          >
            <span className="text-grey"> Carnet de santé </span>
            <input
              className="hidden"
              type="file"
              id="healthbook"
              name="healthbook"
              onChange={(evt) => setHealthBook(evt.target.files[0])}
            />
          </label>
          <UploadValidation isValidate={insurance !== null} />
        </div>
        <button
          className="btn-rounded-purple "
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
