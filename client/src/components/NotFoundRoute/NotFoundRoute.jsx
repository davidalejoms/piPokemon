import { Link } from "react-router-dom"
import style from "./NotFoundRoute.module.css"
const NotFoundRoute = () => {
  return (
    <>
      <div className={style.notFound}>
        <h1> this route doesn&apos;t exist, what are you looking for?</h1>
        <Link
        className={style.Link} to="/Pokemon">
        pokemons are here 
        </Link>
      </div>
    </>
  )
}

export default NotFoundRoute
