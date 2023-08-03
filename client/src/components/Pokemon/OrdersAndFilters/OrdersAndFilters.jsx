// import PropTypes from 'prop-types'
import PropTypes from "prop-types"
import { useState } from "react"
import { ordersAndFiltersContainer, ordersAndFiltersMain } from "./OrdersAndFilters.module.css"
import {
  orderAZ,
  orderZA,
  orderByPowerAsc,
  orderByPowerDesc,
  loadDataBaseToCache,
  loadAPITocache,
  setGlobalOrigin,
} from "../../../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const OrdersAndFilters = ({ forceOrder }) => {
  const { origin } = useSelector((state) => state.auxGlobalStates)
  const dispatcher = useDispatch()
  //manejador alfabetico- forza un estado local con la prop funcion para obligar un cambio en pokemon.jsx
  const [alpha, setAlpha] = useState("A-Z")
  const alphaHandler = () => {
    alpha === "A-Z" && setAlpha("Z-A") //estos son para cambiar el icono
    alpha === "Z-A" && setAlpha("A-Z") //estos son para cambiar el icono
    //enviar ordenamientos
    alpha === "Z-A" && dispatcher(orderAZ()) //parece al reves pero es par que se muestre a-z en el boton y sea ese el orden mostrado.≈
    alpha === "A-Z" && dispatcher(orderZA())
    forceOrder()
  }
  //manejador de poder lo imso que el alfabetico litearalmetesolo ordena por campo Ataque y ya
  const [powerOrder, setPowerOrder] = useState("ASC")
  const powerOrderHandler = () => {
    powerOrder === "ASC" && setPowerOrder("DESC") //estos son para cambiar el icono
    powerOrder === "DESC" && setPowerOrder("ASC") //estos son para cambiar el icono

    powerOrder === "ASC" && dispatcher(orderByPowerAsc())
    powerOrder === "DESC" && dispatcher(orderByPowerDesc())
    forceOrder()
  }
  // manejador de funete de datos, si es api entonces se cambia el origen de la data a la api, si es database se cambia a database

  const originHandler = () => {
    origin === "Database" && dispatcher(setGlobalOrigin("API")) //estos son para cambiar el icono
    origin === "API" && dispatcher(setGlobalOrigin("Database")) //estos son para cambiar el icono

    //estos son para cambiar el icono // estan al reves para que se muestre el valor del boton acorde con lo que pasa en pantalla
    origin === "API" && dispatcher(loadDataBaseToCache())
    origin === "Database" && dispatcher(loadAPITocache()) //estos son para cambiar el icono
  }

  return (
    <div className={ordersAndFiltersContainer}>
      <ul className={ordersAndFiltersMain}>
        <li>
          <label>Origen</label>
          <button onClick={originHandler}> {origin}</button>
        </li>
        <li>
          <label>Ordenado</label>
          <button onClick={alphaHandler}> {alpha}</button>
        </li>
        <li>
          <label>Poder</label>
          <button onClick={powerOrderHandler}> {powerOrder}</button>
        </li>
      </ul>
    </div>
  )
}
OrdersAndFilters.propTypes = {
  forceOrder: PropTypes.func.isRequired,
}

// OrdersAndFilters.propTypes = {}

export default OrdersAndFilters
