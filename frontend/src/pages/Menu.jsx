import React from "react";
import NavbarParents from "../components/NavbarParents";
import Header from "../components/Header";

function Menu() {
  return (
    <div className="flex flex-col h-full justify-between ">
      <Header />

      <NavbarParents />
    </div>
  );
}

export default Menu;
