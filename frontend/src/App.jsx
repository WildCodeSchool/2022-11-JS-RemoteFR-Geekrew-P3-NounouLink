
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/connexion" element={<Connexion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
