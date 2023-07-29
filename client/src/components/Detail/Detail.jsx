import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Loader from "../Loader/Loader"
import axios from "axios"
import CardDetail from "../CardDetail/CardDetail"
import style from "./Detail.module.css"
// éste componente recibe un parámetro hace una Request y renderizar lo que encuentra en una tarjeta
const Detail = () => {
  let { id: idOrName } = useParams()
  const [loader, setLoader] = useState(true) // manejo del loader inicia mostrandose y cuando se cargue la api se oculta
  const [pokemonDetail, setPokemonDetail] = useState([])

  useEffect(() => {
    if (typeof idOrName === "undefined") return

    // Function to check if the value is a number
    const isNumeric = (value) => {
      return /^-?\d+$/.test(value)
    }
    // Function to check if the value is a text (string)
    const isText = (value) => {
      return isNaN(value)
    }

    if (isNumeric(idOrName) || isText(idOrName)) {
      // si es un numero o un texto se hace la request si es un texto lo pasamo a minusculas
      if (isText(idOrName)) {
        idOrName = idOrName.toLowerCase()
      }

      const detailBegin = async () => {
        const pokemonReqResult = await axios.get(`http://localhost:3001/pokemons/${idOrName}`)
        setPokemonDetail(pokemonReqResult.data)
        setLoader(false) // apaga el loader
      }
      detailBegin()
    }
  }, [pokemonDetail.length, idOrName])

  return (
    <>
      {loader && <Loader />}
      <div className={style.headerWrapper}>
        <Link
          to="/pokemon"
          className={style.linkBack}
        >
          Go back to catch&apos;em all!
        </Link>
      </div>
      {pokemonDetail.map((pokemon) => {
        return (
          <CardDetail
            key={pokemon.Id}
            Id={pokemon.Id}
            Nombre={pokemon.Nombre}
            Imagen={pokemon.Imagen}
            ImagenAux={pokemon.ImagenAux}
            Vida={pokemon.Vida}
            Defensa={pokemon.Defensa}
            Ataque={pokemon.Ataque}
            Velocidad={pokemon.Velocidad}
            Altura={pokemon.Altura}
            Peso={pokemon.Peso}
            Tipo={pokemon.Tipo}
          />
        )
      })}
      {/*  */}
    </>
  )
}

export default Detail
