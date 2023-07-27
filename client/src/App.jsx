import About from "./components/About/About"
import Devinfo from "./components/DevIinfo/Devinfo"
import NotFoundRoute from "./components/NotFoundRoute/NotFoundRoute"
import Pokemon from "./components/Pokemon/Pokemon"
import Splash from "./components/Splash/Splash"
import Nav from "./components/Nav/Nav"

import { Route, Routes, useLocation } from "react-router-dom"
import NewPokemon from "./components/NewPokemon/NewPokemon"
import Detail from "./components/Detail/Detail"

function App() {
  const location = useLocation()
  const isRootPath = location.pathname === "/"
  return (
    <div className="App">
      <Devinfo visible={false} />

      {!isRootPath && <Nav />}
      <Routes>
        <Route
          path="/"
          element={<Splash />}
        />

        <Route
          path="/pokemon"
          exact
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
          path="/pokemon/detail/:id"
          element={<Detail />}
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
