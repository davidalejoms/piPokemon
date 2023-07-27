import { useDispatch, useSelector } from "react-redux"
import style from "./SliderContainer.module.css"
import { FaLessThan, FaGreaterThan } from "react-icons/fa"
import { filterTypes, resetCache } from "../../../redux/actions"
import { useState } from "react"

const SliderContainer = () => {
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
  const [titleType, setTitletype] = useState("")
  const dispatcher = useDispatch()
  const handleFilter = (name) => {
    dispatcher(filterTypes(name))
    setTitletype(name)
  }
  const handleAll = () => dispatcher(resetCache())
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
                onClick={() => handleFilter(type.Nombre)}
                className={`${type.Nombre} ${style.typeButtons}`} // asi para pasale dentro de ciclo y que llegue sin id unicos por module.css
                // className={type.Nombre}
              >
                <div className={style.iconWrapper}>
                  <img
                    // className={type.Nombre}
                    src={`/src/assets/icons/${type.Nombre}.svg`}
                    alt=""
                  />
                  <div>{type.Nombre}</div>
                </div>
              </div>
            </li>
          )
        })}

        <li>
          <FaGreaterThan className={style.arrows} />
        </li>
      </ul>
      {titleType ? (
        <h1 className={style.title}>This Pokemons are {titleType} Type:</h1>
      ) : (
        <h1 className={style.title}> Pokemon of All Types:</h1>
      )}
    </div>
  )
}

export default SliderContainer
