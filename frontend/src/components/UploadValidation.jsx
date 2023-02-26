import React from "react";
import PropTypes from "prop-types";

import greenVector from "../assets/formulaire/greenVector.svg";
import grayVector from "../assets/formulaire/grayVector.svg";

export function UploadValidation({ isValidate }) {
  return (
    <div>
      <span>
        {isValidate ? (
          <img src={greenVector} alt="green vector" />
        ) : (
          <img src={grayVector} alt="gray vector" />
        )}
      </span>
    </div>
  );
}

UploadValidation.propTypes = {
  isValidate: PropTypes.bool.isRequired,
};

export default UploadValidation;
