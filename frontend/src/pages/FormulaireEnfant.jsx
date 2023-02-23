import React, { useState, useEffect } from "react";
import axios from "axios";

function FormulaireEnfant() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [canwalk, setCanWalk] = useState(false);
  const [allergie, setAllergie] = useState("");
  const [medecinTraitant, setMedecinTraitant] = useState("");
  const [assurance, setAssurance] = useState(null);
  const [carnetsante, setCarnetSante] = useState(null);
  const [idenfants, setIdEnfants] = useState(null);

  useEffect(() => {
    if (idenfants) {
      axios
        .get(`/api/enfants/${idenfants}`)
        .then((response) => {
          const data = response.data;
          setFirstname(data.firstname);
          setLastname(data.lastname);
          setBirthDate(data.birthdate);
          setCanWalk(data.canwalk);
          setAllergie(data.allergie);
          setMedecinTraitant(data.medecinTraitant);
        })
        .catch((error) => {
          console.error(error);
          alert(
            "Une erreur est survenue lors de la récupération des données de l'enfant."
          );
        });
    }
  }, [idenfants]);

  useEffect(() => {
    const formData = new FormData();
    formData.append("assurance", assurance);

    if (idenfants && assurance) {
      axios
        .post(`/api/enfants/${idenfants}/upload`, formData)
        .then(() => alert("Le fichier a été enregistré avec succès !"))
        .catch((error) => {
          console.error(error);
          alert("Une erreur est survenue lors de l'enregistrement du fichier.");
        });
    }
  }, [idenfants, assurance]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const dossierEnfant = {
      firstname,
      lastname,
      birthdate,
      canwalk,
      allergie,
      assurance,
      carnetsante,
    };

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/enfants`, dossierEnfant)
      .then((response) => {
        setIdEnfants(response.data.id);
        alert("Le dossier a été enregistré avec succès !");
      })
      .catch((error) => {
        console.error(error);
        alert("Une erreur est survenue lors de l'enregistrement du dossier.");
      });
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setAssurance(file);
    setCarnetSante(file);
  };

  return (
    <div>
      <p>Création de compte</p>
      <div>
        <form
          className="text-grey-input grid gap-4 justify-center "
          onSubmit={handleSubmit}
        >
          <label htmlFor="firstname">
            <input
              className="border-solid border-2 border-grey-input"
              type="text"
              id="firstname"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
              required
              placeholder="nom"
            />
          </label>
          <label htmlFor="lastname">
            <input
              className="border-solid border-2 border-grey-input"
              type="text"
              id="lastname"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
              required
              placeholder="Prénom"
            />
          </label>
          <label htmlFor="birthdate">
            <input
              className="border-solid border-2 border-grey-input"
              type="date"
              id="birthdate"
              value={birthdate}
              onChange={(event) => setBirthDate(event.target.value)}
              required
              placeholder="date de naissance"
            />
          </label>

          <label htmlFor="canwalk">Marche :</label>
          <input
            className="border-solid border-2 border-grey-input"
            type="checkbox"
            id="canWalk"
            checked={canwalk}
            onChange={(event) => setCanWalk(event.target.checked)}
            placeholder="marche"
          />

          <label htmlFor="allergie">Allergies :</label>
          <input
            className="border-solid border-2 border-grey-input"
            type="text"
            id="allergie"
            value={allergie}
            onChange={(event) => setAllergie(event.target.value)}
            placeholder="allergies"
          />

          <label htmlFor="medecinTraitant">Médecin traitant :</label>
          <input
            className="border-solid border-2 border-grey-input"
            type="text"
            id="medecinTraitant"
            value={medecinTraitant}
            onChange={(event) => setMedecinTraitant(event.target.value)}
          />

          <label htmlFor="Assurance">Assurance :</label>
          <input type="file" id="assurance" onChange={handleUpload} />

          <label htmlFor="carnetsante">carnet santé : </label>
          <input type="file" id="carnetsante" onChange={handleUpload} />

          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </div>
  );
}
export default FormulaireEnfant;
