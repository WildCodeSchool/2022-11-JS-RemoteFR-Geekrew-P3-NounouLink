import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import CreationCompte from "./pages/CreationCompte";

import ConfirmationcreationCompteB from "./pages/ConfirmationcreationcompteB";
import Connexion from "./pages/Connexion";
import FormulaireEnfant from "./pages/FormulaireEnfant";
import FormulaireParent from "./pages/FormulaireParent";
import FormulaireInscription from "./pages/FormulaireInscription";
import { UserContextProvider } from "./contexts/UserContext";
import Search from "./pages/Search";

function App() {
  return (
    <UserContextProvider>
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
          <Route path="/recherche" element={<Search />} />
          <Route
            path="/formulaireinscription"
            element={<FormulaireInscription />}
          />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
