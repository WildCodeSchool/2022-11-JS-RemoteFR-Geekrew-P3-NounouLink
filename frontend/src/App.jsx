import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Connexion from "./pages/Connexion";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          {/* <Route path="/connexion" element={<Connexion />} /> */}
          <Route path="/recherche" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
