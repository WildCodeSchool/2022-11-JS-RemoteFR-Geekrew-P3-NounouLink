import React from "react";
import PropTypes from "prop-types";

import logo from "../assets/pro/nounouLinkPro.svg";

function NavbarNounou({ link, progress }) {
  return (
    <div>
      <div className="flex flex-col w-full justify-between lg:flex-row lg:items-end lg:pb-4">
        <a href="/pro">
          <img
            src={logo}
            alt="NounouLink Pro"
            className="max-w-fit px-8 pt-4"
          />{" "}
        </a>
        <div className="flex justify-between font-red-hat w-full px-8 py-4 lg:items-end lg:py-0">
          <h2 className="text-light-grey">{link}</h2>
          <p className="text-purple-pro">Enregistrer et quitter</p>
        </div>
        <span className="bg-light-grey flex w-full h-2 lg:hidden">
          <span className={`${progress} bg-purple-pro`} />
        </span>
      </div>
      <span className="bg-light-grey flex w-full h-2 max-lg:hidden">
        <span className={`${progress} bg-purple-pro`} />
      </span>
    </div>
  );
}

NavbarNounou.propTypes = {
  link: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};

export default NavbarNounou;
