import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../Loader/Loader"
import OrdersAndFilters from "./OrdersAndFilters/OrdersAndFilters"
import SliderContainer from "./SliderContainer/SliderContainer"
import Pagination from "../Pagination/Pagination"
import GridContainer from "../GridContainer/GridContainer"
import { loadApi, loadDataBase, loadTypes, setGlobalLoader } from "../../redux/actions"
import style from "./Pokemon.module.css"
const Pokemon = () => {
  const dispatch = useDispatch() // para mandar cosas al estado global
  const { loader } = useSelector((state) => state.auxGlobalStates) // manejo del loader inicia mostrandose y cuando se acargue la api se oculta
  const  allPokemons = useSelector((state) => state.allPokemons) 
  const  typesOfPokemons = useSelector((state) => state.typesOfPokemons) 
  const  databasePokemons = useSelector((state) => state.databasePokemons) 
  const [order, setOrder] = useState(true) // cuando el orden de cache cambia react se limpia el culo con el cambio y no lo detecta como modificado
  const forceOrder = () => setOrder(!order) //al cambiar este estado se obliga un cambio se pasa como dependencia de render al use eFeect el elemento paginación, se cambia desde el elemento orders and filters cuando se cambia el tootgle de a-z z-a desde alli se ejecuta la funcion de cambiar estado y cuando cambia lo lee pagination.

  useEffect(() => {
    dispatch(setGlobalLoader(true)) // prende el loader
    const begin = async () => {
      if (allPokemons.length === 0) {
        await dispatch(loadApi(dispatch)) //carga el estaddo global con toda la data en allPokemons y en caché
      }
      if (typesOfPokemons.length === 0) {
        await dispatch(loadTypes(dispatch))
      }
      if (databasePokemons.length === 0) {
        await dispatch(loadDataBase(dispatch))
      }
      dispatch(setGlobalLoader(false)) // apaga el loader)
    }
    begin()
  }, [dispatch, allPokemons.length, databasePokemons.length, typesOfPokemons.length])

  return (
    <>
      {loader && <Loader />}

      <div className={style.headerFiltersAndpagination}>
        <OrdersAndFilters forceOrder={forceOrder} />
        <Pagination order={order} />
      </div>

      <SliderContainer />

      <GridContainer />
      {/*  se manda loader para que no muestre el pato de cuando no hay resultados si esta realemtne cagandolos del api */}
    </>
  )
}

export default Pokemon
