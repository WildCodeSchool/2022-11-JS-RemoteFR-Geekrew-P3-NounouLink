import React, { useState, useEffect } from "react";
import axios from "axios";

function TarifList() {
  const [tarifs, setTarifs] = useState([]);

  useEffect(() => {
    axios.get("/api/tarifs").then((response) => {
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
