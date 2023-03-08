import React from "react";

function Header() {
  return (
    <div className="flex flex-row justify-center w-full">
      <div className="flex justify-center items-center">
        <div className="h-[80px] w-[80px] gradient-linear rounded-full">
          <div className="h-[76px] w-[76px] bg-white rounded-full" />
        </div>
      </div>

      <h2>variable prénom</h2>
    </div>
  );
}

export default Header;
