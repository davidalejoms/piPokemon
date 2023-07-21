import { splash, title, button } from "./Splash.module.css"
import { useEffect, useState } from "react"
import walking_ash_and_pikachu from '../../assets/walking_ash_and_pikachu.gif'
const Splash = () => {

  const [begin, setBegin] = useState(true)
  const beginToogler=()=> setBegin(!begin)

  useEffect(() => {}, [begin])
  return (
    <>
      <div className={splash} style={begin && {display:'non'}}>
        <h1 className={title}>Pokemon Api <br /> By David Mejia</h1>
        <img src={walking_ash_and_pikachu} alt="" />
        <button className={button} onClick={beginToogler}>Entrar</button>
      </div>
    </>
  )
}

export default Splash
