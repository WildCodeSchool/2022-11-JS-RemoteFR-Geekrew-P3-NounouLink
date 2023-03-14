import React, { useState } from "react";
import { toast } from "react-toastify";

// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import userAPI from "../services/userAPI";
import Navbar from "../components/Navbar";
import Validation from "../components/Validation";

function FormulaireParent() {
  const { userId, setParentId } = useUserContext();
  const [cafNumber, setCafNumber] = useState("");
  const [exitPermit, setExitPermit] = useState("");
  const [imageRights, setImageRights] = useState("");

  const usersIduser = userId;
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/formulaireenfant");
  // };

  // const inscriptionFile = {
  //   cafNumber,
  //   exitPermit,
  //   imageRights,
  // };

  // useEffect(() => {
  //   if (idparents) {
  //     axios
  //       .get(`/api/parents/${idparents}`, inscriptionFile)
  //       .then((response) => {
  //         const { data } = response;
  //         setCafNumber(data.cafNumber);
  //         setExitPermit(data.exitPermit);
  //         setImageRights(data.imageRights);
  //         setIdParents(data.idparents);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         toast.error(
  //           "Une erreur est survenue lors de la récupération des données de l'enfant."
  //         );
  //       });
  //   }
  // }, [idparents]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cafNumber && exitPermit && imageRights && usersIduser)
      userAPI
        .post("/api/parents", {
          cafNumber,
          exitPermit,
          imageRights,
          usersIduser,
        })
        .then((response) => {
          // console.log(response);
          setParentId(response.data.id);
          toast.success("Le dossier a été enregistré avec succès !");
        })
        .catch((error) => {
          console.error(error);
          toast.error(
            "Une erreur est survenue lors de l'enregistrement du dossier."
          );
        });
    // navigate("/formulaireenfant");
  };

  // console.log(parentId);
  // console.log(userId);

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

        <button className="btn-rounded-purple ml-44 lg:ml-[50%]" type="submit">
          Enregistrer
        </button>
      </form>
    </div>
  );
}
export default FormulaireParent;
