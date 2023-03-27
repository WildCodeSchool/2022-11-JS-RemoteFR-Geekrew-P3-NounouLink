import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import userAPI from "../../services/userAPI";

// import { useUserContext } from "../../contexts/UserContext";
import arrow from "../../assets/pro/arrowRight.svg";
import creerAnnonce from "../../assets/pro/heroAnnonce.svg";
import back from "../../assets/pro/chevron-left.svg";

import NavbarNounou from "../../components/NavbarNounou";
import DiplomaList from "../../components/DiplomaList";
import AccueilList from "../../components/AccueilList";
import ActivityList from "../../components/ActivityList";

function DiplomePlusAccueil() {
  const [diplomaList, setDiplomaList] = useState([
    {
      id: 1,
      value: "psc1",
      label: "Formation premier secours (PCSC1)",
      pass: false,
    },
    {
      id: 2,
      value: "hygiene",
      label: "Formation Nesting (pollution intérieure)",
      pass: false,
    },
    {
      id: 3,
      value: "pedagogy",
      label: "Pedagogie Montessori/ Pikler Loczy",
      pass: false,
    },
  ]);

  const [accueilList, setAccueilList] = useState([
    {
      id: 1,
      value: "sortie",
      label: "Espace extérieur / jardin",
      pass: false,
    },
    {
      id: 2,
      value: "jardin",
      label: "Sorties extérieures",
      pass: false,
    },
    {
      id: 4,
      value: "animaux",
      label: "Présence d’animaux",
      pass: false,
    },
    {
      id: 5,
      value: "non-fumeur",
      label: "Foyer non-fumeur",
      pass: false,
    },
    {
      id: 3,
      value: "repas",
      label: "Je fais les repas maison",
      pass: false,
    },
    {
      id: 6,
      value: "hygiène",
      label: "Je fournis les produits d’hyiène (changes et couches)",
      pass: false,
    },
  ]);

  const [activityList, setActivityList] = useState([
    {
      id: 7,
      value: "promenade",
      label: "Promenades",
      pass: false,
    },
    {
      id: 8,
      value: "eveil",
      label: "Activités d’éveil",
      pass: false,
    },
    {
      id: 9,
      value: "musique",
      label: "Ateliers de musique",
      pass: false,
    },
    {
      id: 10,
      value: "art",
      label: "Activités artistiques",
      pass: false,
    },
    {
      id: 11,
      value: "langue",
      label: "Bilingue/ internationale",
      pass: false,
    },
    {
      id: 12,
      value: "bibliotheque",
      label: "Bibliothèque / Ludothèque / RAM",
      pass: false,
    },
    {
      id: 13,
      value: "transport",
      label: "Transport d’enfant",
      pass: false,
    },
  ]);
  const [exp, setExp] = useState("");
  const [diplome, setDiplome] = useState("");

  // const { nannyId } = useUserContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // userAPI.put(`/api/nounous/${nannyId}`).then((res) => res.data);

    navigate("/pro-horaires");
  };

  const handleToggleDiploma = (diplId, nextPass) => {
    setDiplomaList(
      diplomaList.map((dipl) => {
        if (dipl.id === diplId) {
          // Create a *new* object with changes
          return { ...dipl, pass: nextPass };
        }
        return dipl;
      })
    );
  };

  const handleToggleAccueil = (accId, nextPass) => {
    setAccueilList(
      accueilList.map((acc) => {
        if (acc.id === accId) {
          // Create a *new* object with changes
          return { ...acc, pass: nextPass };
        }
        return acc;
      })
    );
  };

  const handleToggleActivity = (actId, nextPass) => {
    setActivityList(
      activityList.map((act) => {
        if (act.id === actId) {
          // Create a *new* object with changes
          return { ...act, pass: nextPass };
        }
        return act;
      })
    );
  };

  return (
    <div className="font-red-hat flex flex-col w-full grow">
      <NavbarNounou progress="55%" link="Diplôme et Services" />
      <div className="flex flex-row w-full h-full m-auto p-auto">
        <div className="font-red-hat flex flex-col justify-evenly w-full min-h-fit px-8">
          <h3 className="text-black font-medium text-lg ">
            Les petits plus de votre accueil
          </h3>
          <p className="text-black font-regular text-base">
            Il s’agit en général des services que les parents souhaitent
            retrouver pour l’accueil de leurs enfants, mais vous pourrez en
            ajouter d’autres auprès la publication.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between w-full"
          >
            <div>
              <h2 className="text-lg font-medium text-black">
                Expérience et Formations
              </h2>
              <DiplomaList
                diplomas={diplomaList}
                onToggle={handleToggleDiploma}
              />
            </div>
            <div className="flex flex-col w-full justify-between gap-2">
              <label
                htmlFor="diploma"
                value={diplome}
                onChange={(e) => setDiplome(e.target.value)}
                className="border rounded-xl border-light-grey max-w-[305px]"
              >
                <select name="diploma" className="flex flex-col w-full ">
                  <option value=""> Niveau de diplôme</option>
                  <option value="brevet">Brevet</option>
                  <option value="bac">Bac</option>
                  <option value="bac +1">Bac +1</option>
                  <option value="bac +2">Bac +2</option>
                  <option value="bac +3 et plus">Bac +3 et plus</option>
                </select>
              </label>
              <label
                htmlFor="expérience"
                className="border rounded-xl border-light-grey max-w-[305px]"
              >
                <select
                  name="expérience"
                  value={exp}
                  onChange={(e) => setExp(e.target.value)}
                  className="flex flex-col w-full "
                >
                  <option value="">Expérience</option>
                  <option value="1">0 à 1 année</option>
                  <option value="2">2 années</option>
                  <option value="3">3 années</option>
                  <option value="4">4 années</option>
                  <option value="5-10">5 à 10 années</option>
                  <option value="10 et plus">10 années et plus</option>
                </select>
              </label>
            </div>
          </form>
          <div className="my-4">
            <h2 className="text-lg font-medium text-black">Accueil</h2>
            <AccueilList accueil={accueilList} onToggle={handleToggleAccueil} />
          </div>
          <div>
            <h2 className="text-lg font-medium text-black">Activités</h2>
            <ActivityList
              activity={activityList}
              onToggle={handleToggleActivity}
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate("/pro-presentation")}
              className="text-purple flex items-center"
            >
              <img src={back} alt="chevron retour en arrière" />
              Retour
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className=" flex items-center justify-between gap-2 self-end rounded-full bg-purple text-white font-nunito font-semibold text-base py-2 px-6 max-w-max my-4"
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
              Valorisez votre expérience et vos services
            </h2>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="h-10 w-10 bg-grey rounded-full" />
            </div>
            <p className="w-5/6 self-center text-justify">
              N’hésitez pas à expliquer en détail vos formations et tout votre
              passé de garde d’enfants. Différenciez-vous par des compétences ou
              des qualités inédites (blog de nounou, ménage écologique, ou
              horaires décalés)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiplomePlusAccueil;
