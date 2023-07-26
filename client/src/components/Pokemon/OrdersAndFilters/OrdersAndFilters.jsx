// import PropTypes from 'prop-types'
import { useState } from "react"
import { ordersAndFiltersContainer, ordersAndFiltersMain } from "./OrdersAndFilters.module.css"
const OrdersAndFilters = () => {
  const [origin, setOrigin] = useState("Database")
  const originHandler = () => {
    origin === "Database" && setOrigin("API")
    origin === "API" && setOrigin("Database")
  }

  const [alpha, setAlpha] = useState("A-Z")
  const alphaHandler = () => {
    alpha === "A-Z" && setAlpha("Z-A")
    alpha === "Z-A" && setAlpha("A-Z")
  }

  const [powerOrder, setPowerOrder] = useState("ASC")
  const powerOrderHandler = () => {
    powerOrder === "ASC" && setPowerOrder("DESC")
    powerOrder === "DESC" && setPowerOrder("ASC")
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

// OrdersAndFilters.propTypes = {}

export default OrdersAndFilters
