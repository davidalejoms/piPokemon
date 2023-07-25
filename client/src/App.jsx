import About from "./components/About/About"
import Devinfo from "./components/DevIinfo/Devinfo"
import NotFoundRoute from "./components/NotFoundRoute/NotFoundRoute"
import Pokemon from "./components/Pokemon/Pokemon"
import Splash from "./components/Splash/Splash"
import Nav from "./components/Nav/Nav"

import { Route, Routes, useLocation } from "react-router-dom"
import NewPokemon from "./components/NewPokemon/NewPokemon"

function App() {
  const location = useLocation()
  const isRootPath = location.pathname === "/";
  return (
    <div className="App">
      <Devinfo visible={true} />

      { !isRootPath && <Nav />}
      <Routes>
        <Route
          path="/"
          element={<Splash />}
        />

        <Route
          path="/pokemon"
          element={<Pokemon />}
        />

        <Route
          path="/new-pokemon"
          element={<NewPokemon />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="*"
          element={<NotFoundRoute />}
        />
      </Routes>
    </div>
  )
}

export default App
