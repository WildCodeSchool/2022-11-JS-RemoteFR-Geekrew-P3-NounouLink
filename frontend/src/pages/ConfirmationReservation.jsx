import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function ConfirmationReservation() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/reservation");
  };
  return (
    <div>
      <Navbar />
      <div>Votre reservation a été prise en compte</div>
      <button type="button" onClick={handleNavigate}>
        {" "}
        voir mes reservations{" "}
      </button>
    </div>
  );
}

export default ConfirmationReservation;
