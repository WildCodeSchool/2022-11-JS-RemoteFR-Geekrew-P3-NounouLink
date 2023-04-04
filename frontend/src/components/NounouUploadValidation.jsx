import React from "react";
import PropTypes from "prop-types";

import filePlus from "../assets/formulaire/greenVector.svg";
import fileGreen from "../assets/formulaire/grayVector.svg";

function NounouUploadValidation({ doc }) {
  return (
    <div>
      {!doc ? (
        <img
          src={fileGreen}
          alt="ajouter un csv"
          className="w-6 col-start-5 col-end-6 justify-self-center cursor-pointer"
        />
      ) : (
        <img
          src={filePlus}
          alt="ajouter un csv"
          className="w-6 col-start-5 col-end-6 justify-self-center cursor-pointer"
        />
      )}
    </div>
  );
}

NounouUploadValidation.propTypes = {
  doc: PropTypes.shape.isRequired,
};

export default NounouUploadValidation;
