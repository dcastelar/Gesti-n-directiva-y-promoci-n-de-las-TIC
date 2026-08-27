import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CategoriaGestion from "./pages/CategoriaGestion"
import Encuestas from "./pages/Encuestas";
import Entrevistas from "./pages/Entrevistas";
import Documental from "./pages/Documental";
import Capitulo from "./pages/Capitulo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/categoria/:id"
          element={<CategoriaGestion />}          
        />
        <Route
          path="/base-datos/encuestas"
          element={<Encuestas />}
        />
        <Route
          path="/base-datos/entrevistas"
          element={<Entrevistas />}
        />

        <Route
          path="/base-datos/documental"
          element={<Documental />}
        />
        <Route path="/capitulo/:numero" 
        element={<Capitulo />} 
        />
      </Routes>

      
    </BrowserRouter>
  )
}