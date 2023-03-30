import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function ConfirmationReservation() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/reservation");
  };
  return (
    <div className="flex flex-col  h-full bg-gray-100">
      <Navbar />
      <div className="flex flex-col mt-20 justify-center items-center space-y-48 ">
        <div className="text-4xl my-10">
          Votre reservation a été prise en compte
        </div>
        <button
          type="button"
          className="btn-rounded-purple  bg-gray-200 shadow-lg shadow-blue-500/50"
          onClick={handleNavigate}
        >
          {" "}
          Reservations{" "}
        </button>
      </div>
    </div>
  );
}

export default ConfirmationReservation;
