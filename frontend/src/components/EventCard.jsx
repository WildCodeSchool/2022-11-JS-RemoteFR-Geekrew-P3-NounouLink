import { Card } from "antd";
import { useState, useEffect } from "react";

import supprimer from "../assets/supprimer.svg";

const { Meta } = Card;

const EventCard = ({ title, date, time, onDelete }) => {
  const [isShown, setIsShown] = useState(false);

  // Récupérer l'état précédent de l'EventCard depuis le localStorage
  useEffect(() => {
    const isShownStored = localStorage.getItem("isShown");
    setIsShown(isShownStored === "true");
  }, []);

  // Enregistrer l'état actuel de l'EventCard dans le localStorage
  useEffect(() => {
    localStorage.setItem("isShown", isShown);
  }, [isShown]);

  const handleDelete = () => {
    onDelete();
    setIsShown(false);
  };

  const card = isShown ? (
    <Card className="w-full max-w-xs mx-auto p-4 rounded-md shadow-md">
      <Meta title={title} description={`${date} ${time}`} />
      <div className="mt-4 flex justify-between">
        <div className="text-sm font-medium text-gray-500">{title}</div>
        <button
          className="inline-flex items-center justify-center rounded-full w-8 h-8 text-gray-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          type="button"
          onClick={() => handleDelete()}
        >
          <span className="sr-only">Supprimer</span>
          <img src={supprimer} alt="supp" />
        </button>
      </div>
    </Card>
  ) : null;

  return card;
};

export default EventCard;
