import { cardUnit, statsLabel, statsValue, statsContainer, dataContainer } from "./Card.module.css"
import PropTypes from "prop-types"

function Card({ Id, Nombre, Imagen, ImagenAux, Vida, Defensa, Velocidad, Altura, Peso }) {
  return (
    <div className={cardUnit}>
      <img
        src={Imagen}
        alt={Nombre}
      />
      <h2>{Nombre}</h2>
      <div className={statsContainer}>
        <div className={dataContainer}>
          <span className={statsLabel}>No°:</span>
          <span className={statsValue}>{Id}</span>
        </div>
        <div className={dataContainer}>
          <span className={statsLabel}>Vida:</span>
          <span className={statsValue}>{Vida} HP</span>
        </div>
        <div className={dataContainer}>
          <span className={statsLabel}>Defensa:</span>
          <span className={statsValue}>{Defensa}</span>
        </div>
        <div className={dataContainer}>
          <span className={statsLabel}>Velocidad:</span>
          <span className={statsValue}>{Velocidad} Km/h</span>
        </div>
        <div className={dataContainer}>
          <span className={statsLabel}>Altura:</span>
          <span className={statsValue}>{Altura / 10} Mts</span>
        </div>
        <div className={dataContainer}>
          <span className={statsLabel}>Peso:</span>
          <span className={statsValue}>{Peso / 10} Kg</span>
        </div>
      </div>
    </div>
  )
}
Card.propTypes = {
  Id: PropTypes.number.isRequired,
  Nombre: PropTypes.string.isRequired,
  Imagen: PropTypes.string.isRequired,
  ImagenAux: PropTypes.string.isRequired,
  Vida: PropTypes.number.isRequired,
  Defensa: PropTypes.number.isRequired,
  Velocidad: PropTypes.number.isRequired,
  Altura: PropTypes.number.isRequired,
  Peso: PropTypes.number.isRequired,
}
export default Card
