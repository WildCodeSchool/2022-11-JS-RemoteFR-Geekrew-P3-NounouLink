import React from "react";
import NavbarParents from "../components/NavbarParents";
import Header from "../components/Header";
// import heart from "../assets/heartNav.svg";
// import file from "../assets/fileText.svg";
// import calendar from "../assets/calendar.svg";

function Menu() {
  return (
    <div className="flex flex-col h-full justify-between ">
      <Header />

      <NavbarParents />
    </div>
  );
}

export default Menu;
