import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreationCompte from "./pages/CreationCompte";

function App() {
  return (
    <main>
      <BrowserRouter>
        <div />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreationCompte" element={<CreationCompte />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
