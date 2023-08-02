import PropTypes from "prop-types"

import { useEffect, useState } from "react"
import { pagButton, numbers, activepage } from "./Pagination.module.css"
import { useDispatch, useSelector } from "react-redux"
import { loadFront } from "../../redux/actions"

// la mision de este componenete es mostrar los botones de paginado segun la cantidad de resultados en cache
const Pagination = ({ order }) => {
  const dispatch = useDispatch() // para mandar cosas al estado global
  const [currentPage, setCurrentPage] = useState(1) // pagina actual
  const cacheData = useSelector((state) => state.cache) // el frontdata es el estado global de shownInFront que se pinta en pantalla
  const itemsPerPage = 12 // inicializar los items por pagina que se usaran en el paginado
  const pages = Math.ceil(cacheData.length / itemsPerPage) // calcula la cantidad de paginas que se necesitan para mostrar todos los pokemones

  const pageHandler = (e) => {
    const pageToGo = parseInt(e.target.value)

    setCurrentPage(pageToGo)
    dispatch(loadFront(pageToGo)) // carga  frontData con  12 pokemones de esa pagina
  }

  useEffect(() => {
    dispatch(loadFront(currentPage))
    // console.log("el orden se forza aqui :", order)
  }, [cacheData, currentPage, dispatch, itemsPerPage, order])

  return (
    <div className={numbers}>
      {/* Array.from(Array(totalPages)) crea un array de 0 a totalPages siendo este un numero. 
    tambien se puede Array.from({length: totalPages})
    es raro y nuevo pero funciona
    
    */}
      {Array.from(Array(pages)).map((_, index) => {
        let pageNumber = index + 1
        const buttonClass = pageNumber === currentPage ? `${pagButton} ${activepage}` : `${pagButton}`
        return (
          <button
            onClick={pageHandler}
            key={pageNumber}
            value={pageNumber}
            className={buttonClass}
          >
            {pageNumber}
          </button>
        )
      })}
    </div>
  )
}

Pagination.propTypes = {
  order: PropTypes.bool.isRequired,
}
export default Pagination
