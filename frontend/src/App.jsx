import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Accueil from "./pages/Accueil";
import CreationCompte from "./pages/CreationCompte";

import ConfirmationcreationCompte from "./pages/Confirmationcreationcompte";
import Connexion from "./pages/Connexion";
import FormulaireEnfant from "./pages/FormulaireEnfant";

import FormulaireParent from "./pages/FormulaireParent";
import SearchResults from "./pages/SearchResults";
import { UserContextProvider } from "./contexts/UserContext";
import Search from "./pages/Search";

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

          <Route path="/resultat" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </UserContextProvider>
  );
}

export default App;
