import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CategoriaGestion from "./pages/CategoriaGestion"
import Encuestas from "./pages/Encuestas";
import Entrevistas from "./pages/Entrevistas";
import Documental from "./pages/Documental";
import Capitulo from "./pages/Capitulo";
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import AnalisisSubcategoria from "./pages/AnalisisSubcategoria";
import Metodologia from "./pages/Metodologia";
import PorQueEsteTema from "./pages/PorQueEsteTema";
import PlanMejora from "./pages/PlanMejora";

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
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
        <Route
        path="/analisis/:nombre"
        element={<AnalisisSubcategoria />}
      />
      <Route path="/metodologia" element={<Metodologia />} />
      <Route path="/por-que-este-tema" element={<PorQueEsteTema />} />
      <Route
  path="/plan-mejora"
  element={<PlanMejora />}
/>
      </Routes>

      
    </BrowserRouter>
  )
}