import { sliderContainer, sliderMenu,arrows  } from "./SliderContainer.module.css"
import { FaLessThan, FaGreaterThan } from "react-icons/fa"
const SliderContainer = () => {
  return (
    <div className={sliderContainer}>
      <ul className={sliderMenu}>
        <li>
          <FaLessThan className={arrows} />
        </li>
        <li>
          <button>Tierra</button>
        </li>
        <li>
          <button>Fuego</button>
        </li>
        <li>
          <button>Aire</button>
        </li>
        <li>
          <button>Luchador</button>
        </li>
        <li>
          <button>Agua</button>
        </li>
        <li>
          <button>Psiquico</button>
        </li>
        <li>
          <button>Eléctrico</button>
        </li>
        <li>
          <FaGreaterThan className={arrows} />
        </li>
      </ul>
    </div>
  )
}

export default SliderContainer
