import { useDispatch, useSelector } from "react-redux"
import styles from "./OriginSwitcherButton.module.css"
import { loadAPITocache, loadDataBaseToCache, setGlobalOrigin } from "../../redux/actions"
const OriginSwitcherButton = () => {
  const { origin } = useSelector((state) => state.auxGlobalStates)
  const dispatcher = useDispatch()

  const originHandler = () => {
    origin === "Database" && dispatcher(setGlobalOrigin("API")) //estos son para cambiar el icono
    origin === "API" && dispatcher(setGlobalOrigin("Database")) //estos son para cambiar el icono

    //estos son para cambiar el icono // estan al reves para que se muestre el valor del boton acorde con lo que pasa en pantalla
    origin === "API" && dispatcher(loadDataBaseToCache())
    origin === "Database" && dispatcher(loadAPITocache()) //estos son para cambiar el icono
  }

  return (
    <div className={styles.OriginSwitcherButton}>
      <button onClick={originHandler}> {origin}</button>
    </div>
  )
}

export default OriginSwitcherButton
