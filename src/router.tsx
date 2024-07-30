import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import { lazy, Suspense } from "react"

const FavoritePage = lazy(() => import('./pages/Favorites'))
const IndexPage = lazy(() => import("./pages/IndexPage"))

function AppRouter() {
  return (
    /* Componente principal que debe rodear todos los otros componentes */
    /* 
        path: Ruta de la aplicación
        element: Componente que se renderizará en la ruta especificada
    */
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <IndexPage />
                  </Suspense>
                } index />
                <Route path="/favorites" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <FavoritePage />
                  </Suspense>
                } />
            </Route>     
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter