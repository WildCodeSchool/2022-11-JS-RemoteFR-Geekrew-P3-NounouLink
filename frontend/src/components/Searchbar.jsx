import { useState } from "react";
import menu2 from "../assets/menu-2-line.svg";

function SearchBar() {
  const [search, setSearch] = useState("");
  console.info(search);
  return (
    <div className="flex flex-row justify-end gap-2 mt-2 mr-8">
      <img src={menu2} alt="menu2" />
      <input
        className="h-[40px] w-[350px] border-solid font-medium border-2 text-lg border-grey3 focus:outline-grey2 px-4 rounded-full"
        type="text"
        placeholder="Entrer votre recherche"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
