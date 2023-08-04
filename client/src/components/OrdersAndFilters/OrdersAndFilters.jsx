// import PropTypes from 'prop-types'
import PropTypes from "prop-types"
import { useState } from "react"
import { ordersAndFiltersContainer, ordersAndFiltersMain } from "./OrdersAndFilters.module.css"
import { orderAZ, orderZA, orderByPowerAsc, orderByPowerDesc } from "../../redux/actions"
import { useDispatch } from "react-redux"
import OriginSwitcherButton from "../OriginSwitcherButton/OriginSwitcherButton"

const OrdersAndFilters = ({ forceOrder }) => {
  // const { origin } = useSelector((state) => state.auxGlobalStates)
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

  return (
    <div className={ordersAndFiltersContainer}>
      <ul className={ordersAndFiltersMain}>
        <li>
          <label>Origin</label>
          <OriginSwitcherButton />
          {/* 
          <button onClick={originHandler}> {origin}</button> */}
        </li>
        <li>
          <label>Order</label>
          <button onClick={alphaHandler}> {alpha}</button>
        </li>
        <li>
          <label>Power</label>
          <button onClick={powerOrderHandler}> {powerOrder}</button>
        </li>
      </ul>
    </div>
  )
}
OrdersAndFilters.propTypes = {
  forceOrder: PropTypes.func.isRequired,
}

export default OrdersAndFilters
