import { sliderContainer, sliderMenu } from "./SliderContainer.module.css"
const SliderContainer = () => {
  return (
    <div className={sliderContainer}>
      <ul className={sliderMenu}>
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
      </ul>
    </div>
  )
}

export default SliderContainer
