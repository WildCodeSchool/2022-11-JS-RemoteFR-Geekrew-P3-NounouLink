import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreationCompte from "./pages/CreationCompte";
import FormulaireEnfant from "./pages/FormulaireEnfant";

function App() {
  return (
    <main>
      <BrowserRouter>
        <div />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreationCompte" element={<CreationCompte />} />
          <Route path="/FormulaireEnfant" element={<FormulaireEnfant />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
