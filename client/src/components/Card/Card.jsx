import { cardUnit, statsLabel, statsValue, statsContainer, dataContainer, mainImg, auxImg } from "./Card.module.css"
import PropTypes from "prop-types"
import { AiOutlineColumnHeight } from "react-icons/ai"
import { GiWeight } from "react-icons/gi"
import { BsSpeedometer2 } from "react-icons/bs"
import { MdOutlineCategory } from "react-icons/md"
import { GiLifeBar } from "react-icons/gi"
import{BsFillShieldSlashFill} from "react-icons/bs"
import { Link } from "react-router-dom"
function Card({ Id, Nombre, Imagen, ImagenAux, Vida, Defensa, Velocidad, Altura, Peso, Tipo }) {
  return (
    // disable all link styles
    <Link
      to={`detail/${Id}`}
      style={{ textDecoration: "none", color: "inherit",cursor: "zoom-in" }}
    >
      <div className={cardUnit}>
        <img
          className={mainImg}
          src={Imagen}
          alt={Nombre}
        />
        <img
          className={auxImg}
          src={ImagenAux}
          alt={Nombre}
        />
        <h2>{Nombre}</h2>
        <h2>N° {Id}</h2>
        <div className={statsContainer}>
          <div className={dataContainer}>
            <span className={statsLabel}>
              <MdOutlineCategory style={{ paddingRight: "0.6em" }} />
              Tipo:
            </span>
            <span className={statsValue}>{Tipo}</span>
          </div>
          <div className={dataContainer}>
            <span className={statsLabel}>
              <GiLifeBar style={{ paddingRight: "0.6em" }} />
              Vida:
            </span>
            <span className={statsValue}>{Vida} HP</span>
          </div>
          <div className={dataContainer}>
            <span className={statsLabel}>
              <BsFillShieldSlashFill style={{ paddingRight: "0.6em" }}/>
              Defensa:</span>
            <span className={statsValue}>{Defensa}</span>
          </div>
          <div className={dataContainer}>
            <span className={statsLabel}>
              <BsSpeedometer2 style={{ paddingRight: "0.6em" }} />
              Velocidad:
            </span>
            <span className={statsValue}>{Velocidad} Km/h</span>
          </div>
          <div className={dataContainer}>
            <span className={statsLabel}>
              <AiOutlineColumnHeight style={{ paddingRight: "0.6em" }} />
              Altura:
            </span>
            <span className={statsValue}>{Altura / 10} Mts</span>
          </div>
          <div className={dataContainer}>
            <span className={statsLabel}>
              <GiWeight style={{ paddingRight: "0.6em" }} />
              Peso:
            </span>
            <span className={statsValue}>{Peso / 10} Kg</span>
          </div>
        </div>
      </div>
    </Link>
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
  Tipo: PropTypes.string.isRequired,
}
export default Card
