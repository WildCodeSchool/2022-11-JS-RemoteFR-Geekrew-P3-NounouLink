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
  const handleCancel = () => {
    oncancel();
    setIsShown(false);
  };

  const card = isShown ? (
    <Card className="w-full max-w-xs mx-auto p-4 rounded-md shadow-md gradient-linear">
      title={title}
      extra{" "}
      {
        <Button size="small" onClick={onDelete}>
          Supprimer
        </Button>
      }
      <Meta title={title} description={`${date} ${time}`} />
    </Card>
  ) : null;

  return card;
};

export default EventCard;
