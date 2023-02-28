import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/recherche" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
