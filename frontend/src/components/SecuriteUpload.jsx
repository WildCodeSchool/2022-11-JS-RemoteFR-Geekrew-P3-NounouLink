import React, { useState } from "react";

import PropTypes from "prop-types";
import filePlus from "../assets/formulaire/grayVector.svg";
import fileGreen from "../assets/formulaire/greenVector.svg";
import userAPI from "../services/userAPI";

function SecuriteUpload({ AskedDoc }) {
  const [files, setFiles] = useState([]);

  const handleInputChange = (e) => {
    setFiles(e.target.files);
  };

  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", files[0]);

    userAPI.post(`/text`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return (
    <div className="flex flex-row w-full justify-evenly bg-white rounded-lg py-2">
      <form onSubmit={handleForm} className="w-full justify-center ">
        <label className="grid grid-cols-5 items-center">
          <h4 className="col-start-1 col-span-4">{AskedDoc}</h4>
          {!files.length ? (
            <img
              src={filePlus}
              alt="ajouter un csv"
              className="w-6 col-start-5 col-end-6 justify-self-center cursor-pointer"
            />
          ) : (
            <img
              src={fileGreen}
              alt="ajouter un csv"
              className="w-6 col-start-5 col-end-6 justify-self-center cursor-pointer"
            />
          )}
          <input type="file" className="hidden" onChange={handleInputChange} />
        </label>
      </form>
    </div>
  );
}

SecuriteUpload.propTypes = {
  AskedDoc: PropTypes.shape.isRequired,
};

export default SecuriteUpload;
