import React from "react";
import logo from "../assets/logo.svg";

import table2 from "../assets/table-2.svg";
import calendar2 from "../assets/calendar-2-line.svg";
import group from "../assets/Group.svg";
import vector from "../assets/Vector.svg";

function Sidebar() {
  return (
    <div className="flex fixed h-screen ">
      <div className="gradient-linear text-white w-64 h-screen fixed shadow-lg">
        <img
          src={logo}
          alt="logo NounouLink"
          className="max-md:landscape:scale-50 max-lg:landscape:scale-75  justify-self-center  lg:self-start lg:p-8 row-start-1  lg:col-start-1 lg:col-span-1 "
        />
        <ul className="mt-6">
          <li className="px-6 py-4  cursor-pointer">
            <img src={table2} alt="Users icon" className="h-5 w-5" />
            <span className="mx-4">Liste des demandes</span>
          </li>
          <li className="px-6 py-4  cursor-pointer">
            <img src={calendar2} alt="Settings icon" className="h-5 w-5" />
            <span className="mx-4">Agenda</span>
          </li>
          <li className="px-6 py-4 cursor-pointer">
            <img src={group} alt="Settings icon" className="h-5 w-5" />
            <span className="mx-4">Ajouter une place</span>
          </li>
          <li className="px-6 py-4  cursor-pointer">
            <img src={vector} alt="Dashboard icon" className="h-5 w-5" />
            <span className="mx-4">Tarifs</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
