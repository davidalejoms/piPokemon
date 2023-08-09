import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Loader from "../Loader/Loader"
import axios from "axios"
import CardDetail from "../CardDetail/CardDetail"
import style from "./Detail.module.css"
import { useDispatch, useSelector } from "react-redux"
import { setGlobalLoader } from "../../redux/actions"
import NoPokemons from "../NoPokemons/NoPokemons"
// éste componente recibe un parámetro hace una Request y renderizar lo que encuentra en una tarjeta
const Detail = () => {
  let { id: idOrName } = useParams()
  const { loader } = useSelector((state) => state.auxGlobalStates) // manejo del loader inicia mostrandose y cuando se acargue la api se oculta
  const { origin } = useSelector((state) => state.auxGlobalStates) // manejo del loader inicia mostrandose y cuando se acargue la api se oculta
  const [pokemonDetail, setPokemonDetail] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setGlobalLoader(true)) // prende el loader
    if (typeof idOrName === "undefined") return
    const isNumeric = (value) => {
      return /^-?\d+$/.test(value)
    }
    const isText = (value) => {
      return isNaN(value)
    }

    if (isNumeric(idOrName) || isText(idOrName)) {
      // si es un numero o un texto se hace la request si es un texto lo pasamo a minusculas
      if (isText(idOrName)) {
        idOrName = idOrName.toLowerCase()
      }

      if (origin === "API") {
        const detailBegin = async () => {
          try {
            const pokemonReqResult = await axios.get(`${import.meta.env.VITE_APIURLPOKEMONS}/${idOrName}`)
            setPokemonDetail(pokemonReqResult.data)
            dispatch(setGlobalLoader(false)) // apaga el loader
          } catch (error) {
            dispatch(setGlobalLoader(false))
          }
        }
        detailBegin()
      }
    }

    if (origin === "Database") {
      // dispatch(setGlobalLoader(false))
      const detailBegin = async () => {
        try {
          const pokemonReqResult = await axios.get(`${import.meta.env.VITE_APIURLDB}/${idOrName}`)
          pokemonReqResult.data.Tipo = pokemonReqResult.data.Types //pequeño remapeo para cumplir con el contrato que pide el front

          setPokemonDetail([pokemonReqResult.data])

          dispatch(setGlobalLoader(false))
        } catch (error) {
          dispatch(setGlobalLoader(false))
        }
      }

      detailBegin()
    }
  }, [pokemonDetail.length, idOrName])

  return (
    <>
      {loader && <Loader />}

      {pokemonDetail.length === 0 && !loader && <NoPokemons />}

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
