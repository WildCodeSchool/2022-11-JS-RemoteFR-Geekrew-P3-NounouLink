import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import userAPI from "../../services/userAPI";

import { useUserContext } from "../../contexts/UserContext";
import arrow from "../../assets/pro/arrowRight.svg";
import creerAnnonce from "../../assets/pro/heroAnnonce.svg";
import back from "../../assets/pro/chevron-left.svg";

import NavbarNounou from "../../components/NavbarNounou";
import NounouUploadValidation from "../../components/NounouUploadValidation";

function SecuriteNounou() {
  const [numAgrement, setNumAgrement] = useState([]);
  const [dateAgrement, setDateAgrement] = useState([]);
  const [id, setId] = useState(null);
  const [secuCertificate, setSecuCertificate] = useState(null);
  const [proofOfResidence, setProofOfResidence] = useState(null);
  const [diploma, setDiploma] = useState(null);
  const [homeInsurance, setHomeInsurance] = useState(null);
  const [carInsurance, setCarInsurance] = useState(null);
  const { nannyId } = useUserContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (nannyId !== null)
      userAPI.get(`/api/nounous/${nannyId}`).then((response) => {
        setNumAgrement(response.data.aggregation_number);
        setDateAgrement(response.data.date_agreement);
      });
  }, [nannyId]);

  const handleInputChangeId = (e) => {
    setId(e.target.files);
  };

  const handleInputChangeSecu = (e) => {
    setSecuCertificate(e.target.files);
  };

  const handleInputChangeProofRes = (e) => {
    setProofOfResidence(e.target.files);
  };

  const handleInputChangeDiploma = (e) => {
    setDiploma(e.target.files);
  };

  const handleInputChangeInsurance = (e) => {
    setHomeInsurance(e.target.files);
  };

  const handleInputChangeCarInsurance = (e) => {
    setCarInsurance(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("aggregationNumber", numAgrement);
    formData.append("dateAgreement", dateAgrement);

    formData.append("id", id[0]);
    formData.append("secuCertificate", secuCertificate[0]);
    formData.append("proofOfResidence", proofOfResidence[0]);
    formData.append("diploma", diploma[0]);
    formData.append("homeInsurance", homeInsurance[0]);
    formData.append("carInsurance", carInsurance[0]);

    userAPI
      .put(`/api/nounous/${nannyId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => res.data);
  };

  return (
    <div className="font-red-hat flex flex-col w-full grow">
      <NavbarNounou progress="w-full" link="Securite" />
      <div className="flex flex-row w-full h-full">
        <div className="font-red-hat flex flex-col justify-evenly w-full min-h-fit px-8">
          <h3 className="text-black font-medium text-lg ">Vérifications </h3>
          <p className="text-black font-regular text-base">
            Nous avons besoin d’effectuer une dernière vérification avant
            validation définitive de votre compte
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full justify-around"
          >
            <label
              htmlFor="numeroAgrement"
              className="flex flex-col w-full justify-evenly text-base"
            >
              Numéro d’aggrément
              <input
                type="text"
                value={numAgrement}
                onChange={(e) => setNumAgrement(e.target.value)}
                name="numeroAgrement"
                className="rounded-xl p-2 max-w-max ring ring-grey-input my-2"
              />
            </label>
            <label
              htmlFor="dateAggrement"
              className="flex flex-col w-full justify-evenly text-base"
            >
              Date d’aggrément
              <input
                type="text"
                value={dateAgrement}
                onChange={(e) => setDateAgrement(e.target.value)}
                name="dateAggrement"
                className="rounded-xl p-2 max-w-max ring ring-grey-input my-2"
              />
            </label>
            <h3 className="text-black font-medium text-lg ">
              A préparer pour la signature du contrat
            </h3>
            <label className="grid grid-cols-5 items-center">
              <h4 className="col-start-1 col-span-4">
                Carte d'identité, passeport, titre de séjour et/ou permis de
                travail
              </h4>
              <NounouUploadValidation doc={id} />
              <input
                type="file"
                className="hidden"
                onChange={handleInputChangeId}
              />
            </label>
            <label className="grid grid-cols-5 items-center">
              <h4 className="col-start-1 col-span-4">
                Carte vitale ou attestation de sécurité sociale
              </h4>
              <NounouUploadValidation doc={secuCertificate} />
              <input
                type="file"
                className="hidden"
                onChange={handleInputChangeSecu}
              />
            </label>
            <label className="grid grid-cols-5 items-center">
              <h4 className="col-start-1 col-span-4">
                Justificatif de domicile
              </h4>
              <NounouUploadValidation doc={proofOfResidence} />
              <input
                type="file"
                className="hidden"
                onChange={handleInputChangeProofRes}
              />
            </label>
            <label className="grid grid-cols-5 items-center">
              <h4 className="col-start-1 col-span-4">
                Justificatifs de formations (Brevet de secourisme, CAP,…) et/ou
                d’expériences (certificats de travail)
              </h4>
              <NounouUploadValidation doc={diploma} />
              <input
                type="file"
                className="hidden"
                onChange={handleInputChangeDiploma}
              />
            </label>
            <label className="grid grid-cols-5 items-center">
              <h4 className="col-start-1 col-span-4">
                Assurance responsabilité civile
              </h4>
              <NounouUploadValidation doc={homeInsurance} />
              <input
                type="file"
                className="hidden"
                onChange={handleInputChangeInsurance}
              />
            </label>
            <label className="grid grid-cols-5 items-center">
              <h4 className="col-start-1 col-span-4">Assurance auto</h4>
              <NounouUploadValidation doc={carInsurance} />
              <input
                type="file"
                className="hidden"
                onChange={handleInputChangeCarInsurance}
              />
            </label>
          </form>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate("/pro-securite")}
              className="text-purple flex items-center"
            >
              <img src={back} alt="chevron retour en arrière" />
              Retour
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className=" flex items-center justify-between gap-2 self-end rounded-full bg-purple text-white font-nunito font-semibold text-base py-2 px-6 max-w-max"
            >
              Suivant
              <img src={arrow} alt="fleche" />
            </button>
          </div>
        </div>
        <div className="max-lg:hidden font-red-hat flex flex-col justify-between w-full grow h-full bg-greyish-blue">
          <div className="rounded-3xl bg-white flex flex-col justify-between w-4/6 gap-4 p-4 text-center self-center mt-8">
            <img
              src={creerAnnonce}
              alt="créer une annonce"
              className="justify-self-center "
            />
            <h2 className="font-medium text-base">
              Commencez avec un prix plus bas pour attirer les réservations{" "}
            </h2>
            <p className="w-5/6 self-center text-justify">
              Les nouveaux professionnels inscrits sur Babyplace commencent avec
              un prix plus bas pour attirer leurs premières réservations. <br />
              Ils ont ainsi plus d’avis de la part de parents, ce qui leur
              permet de gagner en crédibilité.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecuriteNounou;
