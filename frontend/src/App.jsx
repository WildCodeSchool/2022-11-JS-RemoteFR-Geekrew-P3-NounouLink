import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accueil from "./pages/Accueil";
import CreationCompte from "./pages/CreationCompte";
import ConfirmationcreationCompteB from "./pages/ConfirmationcreationcompteB";
import Connexion from "./pages/Connexion";
import FormulaireEnfant from "./pages/FormulaireEnfant";
import FormulaireParent from "./pages/FormulaireParent";
import FormulaireInscription from "./pages/FormulaireInscription";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/creationCompte" element={<CreationCompte />} />
        <Route path="/confirmation" element={<ConfirmationcreationCompteB />} />
        <Route path="/FormulaireEnfants" element={<FormulaireEnfant />} />
        <Route path="/FormulaireParents" element={<FormulaireParent />} />
        <Route
          path="/FormulaireInscriotion"
          element={<FormulaireInscription />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
