// Éste componente recibe un nombre o un IDE y hace una redirección a la ruta /details
import { useNavigate } from "react-router"
import PropTypes from "prop-types"

import style from "./SearchField.module.css"
import { AiOutlineSearch } from "react-icons/ai"
import { useRef } from "react"
const SearchField = ({ toggleMobileMenuHandler }) => {
  const routerFront = useNavigate()
  const formRef = useRef()
  const searchPokemon = (e) => {
    e.preventDefault()
    routerFront(`/pokemon/detail/${e.target.search.value}`)
    toggleMobileMenuHandler && toggleMobileMenuHandler()
  }
  const clickSearchPokemon = () => {
    routerFront(`/pokemon/detail/${formRef.current.value}`)
    toggleMobileMenuHandler && toggleMobileMenuHandler()
  }
  return (
    <>
      <form
        className={style.searchField}
        onSubmit={searchPokemon}
        style={{ position: "relative" }}
      >
        <AiOutlineSearch
          onClick={clickSearchPokemon}
          style={{ position: "absolute", top: 5, left: 10, color: "gray", fontSize: "2.0rem" }}
        />
        <input
          ref={formRef}
          name="search"
          type="text"
          id="search"
          placeholder="Pikachu, ditto etc.."
        />
      </form>
    </>
  )
}
SearchField.propTypes = {
  toggleMobileMenuHandler: PropTypes.func,
}
export default SearchField
