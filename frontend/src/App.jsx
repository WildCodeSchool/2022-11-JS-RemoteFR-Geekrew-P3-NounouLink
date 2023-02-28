import { BrowserRouter, Routes, Route } from "react-router-dom";

import ConfirmationcreationCompteB from "./pages/ConfirmationcreationcompteB";

import Home from "./pages/Home";
import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/confirmation" element={<ConfirmationcreationCompteB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
