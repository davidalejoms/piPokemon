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
          <button onClick={originHandler}>Origen: <br /> {origin}</button>
        </li>
        <li>
          <button onClick={alphaHandler}>Ordenado: <br /> {alpha}</button>
        </li>
        <li>
          <button onClick={powerOrderHandler}>Poder: <br /> {powerOrder}</button>
        </li>
      </ul>
    </div>
  )
}

// OrdersAndFilters.propTypes = {}

export default OrdersAndFilters
