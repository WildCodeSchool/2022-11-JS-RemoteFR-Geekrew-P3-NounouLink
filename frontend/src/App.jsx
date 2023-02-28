import { BrowserRouter, Routes, Route } from "react-router-dom";

import ConfirmationcreationCompteB from "./pages/ConfirmationcreationcompteB";

import Home from "./pages/Home";
import CreationCompte from "./pages/CreationCompte";
import FormulaireEnfant from "./pages/FormulaireEnfant";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/CreationCompte" element={<CreationCompte />} />
        <Route path="/confirmation" element={<ConfirmationcreationCompteB />} />
        <Route path="/FormulaireEnfant" element={<FormulaireEnfant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
