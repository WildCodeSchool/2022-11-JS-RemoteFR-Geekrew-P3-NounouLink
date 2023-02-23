import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfirmationcreationCompteB from "./pages/ConfirmationcreationcompteB";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/confirmationcreationcompte"
          element={<ConfirmationcreationCompteB />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
