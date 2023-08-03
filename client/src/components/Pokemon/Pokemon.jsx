import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../Loader/Loader"
import OrdersAndFilters from "./OrdersAndFilters/OrdersAndFilters"
import SliderContainer from "./SliderContainer/SliderContainer"
import Pagination from "../Pagination/Pagination"
import GridContainer from "../GridContainer/GridContainer"
import { loadApi, loadDataBase, loadTypes } from "../../redux/actions"
import style from "./Pokemon.module.css"
const Pokemon = () => {
  const [loader, setLoader] = useState(true) // manejo del loader inicia mostrandose y cuando se acargue la api se oculta
  const dispatch = useDispatch() // para mandar cosas al estado global
  const state = useSelector((state) => state) // acceso al estado global de redux

  const [order, setOrder] = useState(true) // cuando el orden de cache cambia react se limpia el culo con el cambio y no lo detecta como modificado
  const forceOrder = () => setOrder(!order) //al cambiar este estado se obliga un cambio se pasa como dependencia de render al use eFeect el elemento paginación, se cambia desde el elemento orders and filters cuando se cambia el tootgle de a-z z-a desde alli se ejecuta la funcion de cambiar estado y cuando cambia lo lee pagination.
  const [origin, setOrigin] = useState("API") // este estado lo setea el componente orders and filters y se usa en el componente slider container para filtrar los tipos de pokemones que se muestran en pantalla segun el origen de la data,
  //TODO se usa en tantos lados que lo mejor es pasarlo al estado global de redux para mañana lo haré, el ultimo chichcarron es que en el detail deberia poder llevar a las categorias pero no va a ocurrir si no se puede invicar el origin
  useEffect(() => {
    const begin = async () => {
      if (state.allPokemons.length === 0) {
        await dispatch(loadApi(dispatch)) //carga el estaddo global con toda la data en allPokemons y en caché
      }
      if (state.typesOfPokemons.length === 0) {
        await dispatch(loadTypes(dispatch))
      }
      if (state.databasePokemons.length === 0) {
        await dispatch(loadDataBase(dispatch))
      }
      setLoader(false) // apaga el loader
    }
    begin()
  }, [dispatch, state])

  return (
    <>
      {loader && <Loader />}

      <div className={style.headerFiltersAndpagination}>
        <OrdersAndFilters
          forceOrder={forceOrder}
          origin={origin}
          setOrigin={setOrigin}
        />
        <Pagination order={order} />
      </div>

      <SliderContainer origin={origin} />

      <GridContainer
        pokemons={state.shownInFront}
        loader={loader}
      />
      {/*  se manda loader para que no muestre el pato de cuando no hay resultados si esta realemtne cagandolos del api */}
    </>
  )
}

export default Pokemon
