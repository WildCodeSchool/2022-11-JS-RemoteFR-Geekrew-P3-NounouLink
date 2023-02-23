import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/accueil" element={<Accueil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
