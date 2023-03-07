import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Accueil from "./pages/Accueil";
import CreationCompte from "./pages/CreationCompte";
import ConfirmationcreationCompteB from "./pages/ConfirmationcreationcompteB";
import Connexion from "./pages/Connexion";
import FormulaireEnfant from "./pages/FormulaireEnfant";
import FormulaireParent from "./pages/FormulaireParent";
import FormulaireInscription from "./pages/FormulaireInscription";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/creationcompte" element={<CreationCompte />} />
          <Route
            path="/confirmation"
            element={<ConfirmationcreationCompteB />}
          />
          <Route path="/formulaireenfant" element={<FormulaireEnfant />} />
          <Route path="/formulaireparent" element={<FormulaireParent />} />
          <Route
            path="/formulaireinscription"
            element={<FormulaireInscription />}
          />
          <Route
            path="/formulaireinscriotion"
            element={<FormulaireInscription />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
