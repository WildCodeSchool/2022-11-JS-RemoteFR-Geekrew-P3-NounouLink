import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import userAPI from "../services/userAPI";

import image from "../assets/image1_1.svg";

import Validation from "../components/Validation";
import UploadValidation from "../components/UploadValidation";
import Navbar from "../components/Navbar";

function FormulaireEnfant() {
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [birthdate, setBirthDate] = useState(null);
  const [canwalk, setCanWalk] = useState(null);
  const [allergie, setAllergie] = useState(null);
  const [insurance, setInsurance] = useState([]);
  const [healthbook, setHealthBook] = useState([]);
  const [dataChildren, setDataChildren] = useState([]);
  const { userId, parentId, childrenId } = useUserContext();

  const parentsIdparents = parentId;
  const parentsUsersIdusers = userId;

  const navigate = useNavigate();

  useEffect(() => {
    userAPI.get(`/api/enfants`).then((response) => {
      setDataChildren(
        response.data.filter((child) => child.parents_idparents === parentId)
      );
    });
  }, []);

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

      .catch((error) => {
        console.error(error);
        toast.error(
          "Une erreur est survenue lors de l'enregistrement du dossier."
        );
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/recherche");
  };

  return (
    <div className="bg-gray-100 grow ">
      <Navbar />
      <div className="flex flex-col md:flex-row ">
        <div className="w-11/12">
          {" "}
          <p className="flex justify-center text-2xl font-nunito text-gradient-purple font-semibold py-8   ">
            Ajouter un enfant :
          </p>
          <form className=" flex flex-col  items-center  ">
            <div className="flex flex-col justify-center text-grey-input gap-7 lg:gap-10 ">
              <label
                htmlFor="firstname"
                className=" flex flex-row items-center  "
              >
                <Validation isValid={firstname !== null} />
                <input
                  className="  p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12 placeholder-gray-500"
                  type="text"
                  id="firstname"
                  value={firstname}
                  onChange={(event) => setFirstname(event.target.value)}
                  required
                  placeholder="Prénom"
                />
              </label>
              <label htmlFor="lastname" className="flex flex-row  ">
                <Validation isValid={lastname !== null} />
                <input
                  className="  p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12 placeholder-gray-500"
                  type="text"
                  id="lastname"
                  value={lastname}
                  onChange={(event) => setLastname(event.target.value)}
                  required
                  placeholder="Nom"
                />
              </label>
              <label htmlFor="canwalk" className="flex flex-row items-center  ">
                <Validation isValid={canwalk !== null} />
                <input
                  className=" p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12 placeholder-gray-500 "
                  type="text"
                  id="canWalk"
                  checked={canwalk}
                  onChange={(event) => setCanWalk(event.target.checked)}
                  placeholder="Marche"
                />
              </label>
              <label htmlFor="allergie" className="flex  w-full items-center ">
                <Validation isValid={allergie !== null} />
                <input
                  className=" w-full p-3 border-solid border-2 border-grey-input rounded-lg  placeholder-gray-500"
                  type="text"
                  id="allergie"
                  value={allergie}
                  onChange={(event) => setAllergie(event.target.value)}
                  placeholder="Allergies"
                />
              </label>
              <label
                htmlFor="birthdate"
                className="flex flex-row items-center  "
              >
                <Validation isValid={birthdate !== ""} />
                <input
                  className=" w-full p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12 placeholder-gray-500"
                  type="date"
                  id="birthdate"
                  value={birthdate}
                  onChange={(event) => setBirthDate(event.target.value)}
                  required
                  placeholder="date de naissance"
                />
              </label>
              <div className="flex items-center">
                <Validation isValid={insurance !== null} />
                <label
                  htmlFor="insurance"
                  className="  bg-white w-5/6 items-center p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12"
                >
                  <span className="text-grey"> Assurance </span>
                  <input
                    className=" mds:w-10/12 hidden"
                    type="file"
                    id="insurance"
                    onChange={(evt) => setInsurance(evt.target.files[0])}
                    title="Assurance"
                    name="Assurance"
                  />
                </label>
                <UploadValidation isValidate={insurance !== null} />
              </div>
              <div className="flex items-center  ">
                <Validation isValid={healthbook !== null} />
                <label
                  htmlFor="healthbook"
                  className=" bg-white w-full items-center p-3 border-solid border-2 border-grey-input rounded-lg mds:w-10/12"
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
                <UploadValidation isValidate={healthbook !== null} />
              </div>
              <div className="flex justify-center">
                <button
                  className="btn-rounded-purple"
                  type="submit"
                  onClick={uploadInsurance}
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </form>
        </div>
        <img
          alt="documents"
          src={image}
          className=" hidden lg:block scale-100 mr-14  "
        />
        <div className="flex flex-col md:w-8/12 mr-10">
          <h2 className="flex justify-center  text-2xl font-nunito text-gradient-purple font-semibold py-8">
            Enfants inscrits :
          </h2>{" "}
          {dataChildren.map((child) => (
            <div
              className="flex justify-center mb-8 text-xl border-solid border-2 border-grey-input rounded-lg text-black"
              value={child.firstname}
              key={child.idchildren}
            >
              {child.firstname} {child.lastname}
            </div>
          ))}
          <div className="flex md:justify-center mx-auto">
            <button
              type="submit"
              className="btn-rounded-purple"
              onClick={handleSearch}
            >
              chercher une nounou
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormulaireEnfant;
