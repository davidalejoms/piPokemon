import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import style from "./SliderContainer.module.css"
import { FaLessThan, FaGreaterThan } from "react-icons/fa"
import { filterTypes, resetCache } from "../../../redux/actions"
import { useState } from "react"

const SliderContainer = ({ origin }) => {
  const typesOfPokemonGlobal = useSelector((state) => state.typesOfPokemons)
  // order by Nombre:a-Z
  typesOfPokemonGlobal.sort((a, b) => {
    if (a.Nombre > b.Nombre) {
      return 1
    }
    if (a.Nombre < b.Nombre) {
      return -1
    }
    return 0
  })
  const [titleType, setTitletype] = useState(false)
  const dispatcher = useDispatch()

  const handleFilter = (type, origin) => {
    dispatcher(filterTypes(type, origin))
    setTitletype(type)
  }
  const handleAll = () => {
    dispatcher(resetCache(origin)) // este estado se establece en pokemon que es de alto orden pero se usa aqui para resetear el cache y que se muestren todos los pokemones segun de donde vienen, si de la api o de la base de datos ,este estado se modifica en el componente orders and filters.
    setTitletype(false)
  }

  return (
    <div className={style.sliderContainer}>
      <ul className={style.sliderMenu}>
        <li key="first">
          <FaLessThan className={style.arrows} />
        </li>
        <li key="second">
          <button
            className={`bug ${style.typeButtons}`}
            onClick={handleAll}
          >
            <div className={style.iconWrapper}>
              <img
                className="normal"
                src={`/src/assets/icons/normal.svg`}
                alt=""
              />
              <div>All</div>
            </div>
          </button>
        </li>

        {typesOfPokemonGlobal.map((type, i) => {
          return (
            <li key={i}>
              <div
                onClick={() => handleFilter(type.tipo, origin)}
                className={`${type.tipo} ${style.typeButtons}`} // asi para pasale dentro de ciclo y que llegue sin id unicos por module.css
                // className={type.tipo}
              >
                <div className={style.iconWrapper}>
                  <img
                    // className={type.tipo}
                    src={`/src/assets/icons/${type.tipo}.svg`}
                    alt=""
                  />
                  <div>{type.tipo}</div>
                </div>
              </div>
            </li>
          )
        })}

        <li>
          <FaGreaterThan className={style.arrows} />
        </li>
      </ul>
      {titleType ? <h1 className={style.title}>This Pokemons are {titleType} Type:</h1> : <h1 className={style.title}> Pokemons:</h1>}
    </div>
  )
}
SliderContainer.propTypes = {
  origin: PropTypes.string.isRequired,
}

export default SliderContainer
