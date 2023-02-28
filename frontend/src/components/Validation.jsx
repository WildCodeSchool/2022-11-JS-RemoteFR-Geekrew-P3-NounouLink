import React from "react";
import PropTypes from "prop-types";

import check from "../assets/formulaire/check-circle.svg";
import xcircle from "../assets/formulaire/x-circle.svg";

function Validation({ isValid }) {
  return (
    <div>
      <span>
        {isValid ? (
          <img src={check} alt="check-circle" />
        ) : (
          <img src={xcircle} alt="graycircle" />
        )}
      </span>
    </div>
  );
}

Validation.propTypes = {
  isValid: PropTypes.bool.isRequired,
};
export default Validation;
