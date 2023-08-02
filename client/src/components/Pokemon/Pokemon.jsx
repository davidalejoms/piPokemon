import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import Loader from "../Loader/Loader"
import OrdersAndFilters from "./OrdersAndFilters/OrdersAndFilters"
import SliderContainer from "./SliderContainer/SliderContainer"
import Pagination from "../Pagination/Pagination"
import GridContainer from "../GridContainer/GridContainer"
import { loadApi, loadTypes /* , loadFront */ } from "../../redux/actions"
import style from "./Pokemon.module.css"
const Pokemon = () => {
  const [loader, setLoader] = useState(true) // manejo del loader inicia mostrandose y cuando se acargue la api se oculta
  const dispatch = useDispatch() // para mandar cosas al estado global
  const frontData = useSelector((state) => state.shownInFront) // el frontdata es el estado global de shownInFront que se pinta en pantalla
  const AllData = useSelector((state) => state.allPokemons) // el frontdata es el estado global de shownInFront que se pinta en pantalla

  const [order, setOrder] = useState(true) // cuando el orden de cache cambia react se limpia el culo con el cambio y no lo detecta como modificado
  const forceOrder = () => setOrder(!order) //al cambiar este estado se obliga un cambio se pasa como dependencia de render al use eFeect el elemento paginación, se cambia desde el elemento orders and filters cuando se cambia el tootgle de a-z z-a desde alli se ejecuta la funcion de cambiar estado y cuando cambia lo lee pagination.

  useEffect(() => {
    // si no hay nada en el estado global se carga la api
    if (AllData.length === 0) {
      // const endpoint = "http://localhost:3001/pokemons"
      const endpoint = import.meta.env.VITE_APIURLPOKEMONS
      const begin = async () => {
        const response = await axios.get(endpoint)
        dispatch(loadApi(response.data)) //carga el estaddo global con toda la data en allPokemons y en caché
        // const endpointTypes = "http://localhost:3001/types"
        const endpointTypes = import.meta.env.VITE_APIURLTYPES
        const responseTypes = await axios.get(endpointTypes)
        dispatch(loadTypes(responseTypes.data))
        setLoader(false) // apaga el loader
      }
      begin()
    } else {
      // si ya esta cargado el estado global solo se apaga el loader
      setLoader(false) // apaga el loader
    }
  }, [dispatch, AllData.length])

  return (
    <>
      {loader && <Loader />}

      <div className={style.headerFiltersAndpagination}>
        <OrdersAndFilters forceOrder={forceOrder} />
        <Pagination order={order} />
      </div>

      <SliderContainer />

      <GridContainer
        pokemons={frontData}
        loader={loader}
      />
      {/*  se manda loader para que no muestre el pato de cuando no hay resultados si esta realemtne cagandolos del api */}
    </>
  )
}

export default Pokemon

/* const pokemons = [
    {
      Id: 1,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",

      Vida: 45,
      Defensa: 49,
      Ataque: 25,
      Velocidad: 45,
      Altura: 7,
      Peso: 69,
      Tipo: "Fuego",
    },
    {
      Id: 2,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",

      Vida: 45,
      Defensa: 49,
      Ataque: 25,

      Velocidad: 45,
      Altura: 7,
      Peso: 69,
      Tipo: "Fuego",
    },
    {
      Id: 3,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",

      Vida: 45,
      Defensa: 49,
      Ataque: 25,

      Velocidad: 45,
      Altura: 7,
      Peso: 69,
      Tipo: "Fuego",
    },
    {
      Id: 4,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",

      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",

      Vida: 45,
      Defensa: 49,
      Ataque: 25,

      Velocidad: 45,
      Altura: 7,
      Peso: 69,
      Tipo: "Fuego",
    },
    {
      Id: 5,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",

      Vida: 45,
      Defensa: 49,
      Ataque: 25,

      Velocidad: 45,
      Altura: 7,
      Peso: 69,
      Tipo: "Fuego",
    },
    {
      Id: 6,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",

      Vida: 45,
      Defensa: 49,
      Ataque: 25,

      Velocidad: 45,
      Altura: 7,
      Peso: 69,
      Tipo: "Fuego",
    },
    {
      Id: 7,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",

      Vida: 45,
      Defensa: 49,
      Ataque: 25,

      Velocidad: 45,
      Altura: 7,
      Peso: 69,
      Tipo: "Fuego",
    },
  ] */
