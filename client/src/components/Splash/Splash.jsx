import { splash, title, button } from "./Splash.module.css"
import { useEffect, useState } from "react"

const Splash = () => {

  const [begin, setBegin] = useState(true)
  const beginToogler=()=> setBegin(!begin)

  useEffect(() => {}, [begin])
  return (
    <>
      <div className={splash} style={begin && {display:'non'}}>
        <h1 className={title}>Pokemon Api By David Mejia</h1>
        <button className={button} onClick={beginToogler}>Entrar</button>
      </div>
    </>
  )
}

export default Splash
