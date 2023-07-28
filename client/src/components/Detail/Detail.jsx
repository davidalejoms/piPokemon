import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader"
import axios from "axios"
// import CardDetail from "../CardDetail/CardDetail"
// éste componente recibe un parámetro hace una Request y renderizar lo que encuentra en una tarjeta
const Detail = () => {
  const { id } = useParams()
  const [loader, setLoader] = useState(true) // manejo del loader inicia mostrandose y cuando se cargue la api se oculta
  const [detailPokemonState, setDetailPokemonState] = useState(false)

  useEffect(() => {
    console.log("entro al useeffect de details")
    const detailBegin = async () => {
      const pokemonDetailResult = await axios.get(`http://localhost:3001/pokemons/${id}`)
      const pokemonDetailToRender = pokemonDetailResult.data[0]
      setDetailPokemonState(pokemonDetailToRender)
      console.log("file: Detail.jsx:17  pokemonDetailToRender:", detailPokemonState)
      setLoader(false) // apaga el loader
    }
    80430

    detailBegin()
  }, [id])

  return (
    <>
      {loader && <Loader />}
      {detailPokemonState}
      {/* {detailPokemonState && <CardDetail pokemon={detailPokemonState} />} */}
    </>
  )
}

export default Detail
