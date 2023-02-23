/* import React, { useState, useEffect } from "react";
import axios from "axios";

function FromulaireEnfant() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [canwalk, setCanWalk] = useState(false);
  const [allergies, setAllergies] = useState("");
  const [medecinTraitant, setMedecinTraitant] = useState("");
  const [assurance, setAssurance] = useState(null);
  const [enfantId, setEnfantId] = useState(null);

  useEffect(() => {
    const formData = new FormData();
    formData.append("assurance", assurance);

    if (enfantId && assurance) {
      axios
        .post(`/api/enfants/${enfantId}/upload`, formData)
        .then(() => alert("Le fichier a été enregistré avec succès !"))
        .catch((error) => {
          console.error(error);
          alert("Une erreur est survenue lors de l'enregistrement du fichier.");
        });
    }
  }, [enfantId, assurance]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const dossierEnfant = {
      firstname,
      lastname,
      birthdate,
      canwalk,
      allergies,
      assurance,
      carnetsante,
    };

    axios
      .post("/api/enfants", dossierEnfant)
      .then((response) => {
        setEnfantId(response.data.id);
        alert("Le dossier a été enregistré avec succès !");
      })
      .catch((error) => {
        console.error(error);
        alert("Une erreur est survenue lors de l'enregistrement du dossier.");
      });
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setAssurance(file), setCarnetSante(file);
  };

  return (
    <div>
      <p>Création de compte</p>
      <div>
        <form
          className="text-grey-input grid gap-4 justify-center "
          onSubmit={handleSubmit}
        >
          <input
            className="border-solid border-2 border-grey-input"
            type="text"
            id="firstname"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
            required
            placeholder="nom"
          />
          <input
            className="border-solid border-2 border-grey-input"
            type="text"
            id="lastname"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
            required
            placeholder="Prénom"
          />
          <input
            className="border-solid border-2 border-grey-input"
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(event) => setBirthDate(event.target.value)}
            required
            placeholder="date de naissance"
          />

          <label>Marche :</label>
          <input
            className="border-solid border-2 border-grey-input"
            type="checkbox"
            id="canWalk"
            checked={canwalk}
            onChange={(event) => setCanWalk(event.target.checked)}
            placeholder="marche"
          />

          <label>Allergies :</label>
          <input
            className="border-solid border-2 border-grey-input"
            type="text"
            id="allergies"
            value={allergies}
            onChange={(event) => setAllergies(event.target.value)}
            placeholder="allergies"
          />

          <label>Médecin traitant :</label>
          <input
            className="border-solid border-2 border-grey-input"
            type="text"
            id="medecinTraitant"
            value={medecinTraitant}
            onChange={(event) => setMedecinTraitant(event.target.value)}
          />

          <label>Assurance :</label>
          <input type="file" id="assurance" onChange={handleUpload} />

          <label>carnet santé : </label>
          <input type="file" id="carnetsante" onChange={handleUpload} />

          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </div>
  );
}
export default FromulaireEnfant; */
