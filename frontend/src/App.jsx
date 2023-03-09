import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";

import Accueil from "./pages/Accueil";
import CreationCompte from "./pages/CreationCompte";
import ConfirmationcreationCompte from "./pages/Confirmationcreationcompte";
import Connexion from "./pages/Connexion";
import FormulaireEnfant from "./pages/FormulaireEnfant";
import FormulaireParent from "./pages/FormulaireParent";
import FormulaireInscription from "./pages/FormulaireInscription";
import SearchResults from "./pages/SearchResults";
import Search from "./pages/Search";
import NannyInfoCard from "./pages/NannyInfoCard";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/creationcompte" element={<CreationCompte />} />
          <Route
            path="/confirmation"
            element={<ConfirmationcreationCompte />}
          />
          <Route path="/formulaireenfant" element={<FormulaireEnfant />} />
          <Route path="/formulaireparent" element={<FormulaireParent />} />
          <Route path="/recherche" element={<Search />} />
          <Route
            path="/formulaireinscription"
            element={<FormulaireInscription />}
          />
          <Route path="/resultat" element={<SearchResults />} />
          <Route path="/resultat/:id" element={<NannyInfoCard />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
