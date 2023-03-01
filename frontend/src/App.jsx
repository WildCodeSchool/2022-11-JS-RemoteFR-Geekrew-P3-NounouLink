import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import CreationCompte from "./pages/CreationCompte";
import ConfirmationcreationCompteB from "./pages/ConfirmationcreationcompteB";
import Connexion from "./pages/Connexion";
import { UserContextProvider } from "./contexts/UserContext";
import Search from "./pages/Search";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/recherche" element={<Search />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/creationCompte" element={<CreationCompte />} />
          <Route
            path="/confirmation"
            element={<ConfirmationcreationCompteB />}
          />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
