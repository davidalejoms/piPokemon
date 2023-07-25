import { splash, title, button,contentSplash } from "./Splash.module.css"
import walking_ash_and_pikachu from "../../assets/walking_ash_and_pikachu.gif"
import { Link } from "react-router-dom"
const Splash = () => {
  return (
    <>
      <div className={splash}>

        <div className={contentSplash}>
          <h1 className={title}>
            Pokemon Api <br /> By David Mejia
          </h1>
          <img
            src={walking_ash_and_pikachu}
            alt=""
            style={{ width: "100%" }}
          />
          <Link to="/pokemon">
            <button className={button}>Entrar</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Splash
