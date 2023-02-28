import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accueil from "./pages/Accueil";
import CreationCompte from "./pages/CreationCompte";
import ConfirmationcreationCompteB from "./pages/ConfirmationcreationcompteB";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/CreationCompte" element={<CreationCompte />} />
        <Route path="/confirmation" element={<ConfirmationcreationCompteB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
