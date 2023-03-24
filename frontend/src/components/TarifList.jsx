import React, { useState, useEffect } from "react";
import UserAPI from "../services/userAPI";

function TarifList() {
  const [tarifs, setTarifs] = useState([]);

  useEffect(() => {
    UserAPI.get("/api/tarifs").then((response) => {
      setTarifs(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Tarifs</h1>
      <ul>
        {tarifs.map((tarif) => (
          <li key={tarif.id}>
            {tarif.label} - {tarif.price}€
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TarifList;
