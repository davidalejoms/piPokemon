import {
  cardUnit,
  statsLabel,
  statsValue,
  statsContainer,
  dataContainer,
  mainImg,
  auxImg,
  iconWrapper,
  typeWrapper,
} from "./Card.module.css"
import PropTypes from "prop-types"
import { AiOutlineColumnHeight } from "react-icons/ai"
import { GiWeight } from "react-icons/gi"
import { BsSpeedometer2 } from "react-icons/bs"
import { GiPowerLightning } from "react-icons/gi"
import { GiLifeBar } from "react-icons/gi"
import { BsFillShieldSlashFill } from "react-icons/bs"
import { Link } from "react-router-dom"
function Card({ Id, Nombre, Imagen, ImagenAux, Vida, Defensa, Velocidad, Altura, Peso, Tipo, Ataque }) {
  return (
    // disable all link styles
    <Link
      className={cardUnit}
      to={`detail/${Id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div>
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
        <h2>
                N°{Id} {Nombre}
        </h2>
        <h2>Type: </h2>

        <ul>
          <div className={typeWrapper}>
            {Tipo.map((t, i) => {
              return (
                <li key={i}>
                  <button className={t.tipo}>
                    <div className={iconWrapper}>
                      <img
                        // className={type.Nombre}
                        src={`/src/assets/icons/${t.tipo}.svg`}
                        alt=""
                      />
                      <div>{t.tipo}</div>
                    </div>
                  </button>
                </li>
              )
            })}
          </div>
        </ul>

        <div className={statsContainer}>
          <div className={dataContainer}>
            <span className={statsLabel}>
              <GiPowerLightning style={{ paddingRight: "0.6em" }} />
              Attack:
            </span>
            <span className={statsValue}>{Ataque}</span>
          </div>
          <div className={dataContainer}>
            <span className={statsLabel}>
              <GiLifeBar style={{ paddingRight: "0.6em" }} />
              Life:
            </span>
            <span className={statsValue}>{Vida} HP</span>
          </div>
          <div className={dataContainer}>
            <span className={statsLabel}>
              <BsFillShieldSlashFill style={{ paddingRight: "0.6em" }} />
              Defense:
            </span>
            <span className={statsValue}>{Defensa}</span>
          </div>
          <div className={dataContainer}>
            <span className={statsLabel}>
              <BsSpeedometer2 style={{ paddingRight: "0.6em" }} />
              Speed:
            </span>
            <span className={statsValue}>{Velocidad} Km/h</span>
          </div>
          <div className={dataContainer}>
            <span className={statsLabel}>
              <AiOutlineColumnHeight style={{ paddingRight: "0.6em" }} />
              height:
            </span>
            <span className={statsValue}>{Altura / 10} Mts</span>
          </div>
          <div className={dataContainer}>
            <span className={statsLabel}>
              <GiWeight style={{ paddingRight: "0.6em" }} />
              Weight:
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
  ImagenAux: PropTypes.string,
  Vida: PropTypes.number.isRequired,
  Defensa: PropTypes.number.isRequired,
  Ataque: PropTypes.number.isRequired,
  Velocidad: PropTypes.number.isRequired,
  Altura: PropTypes.number.isRequired,
  Peso: PropTypes.number.isRequired,
  Tipo: PropTypes.array.isRequired,
}
export default Card
