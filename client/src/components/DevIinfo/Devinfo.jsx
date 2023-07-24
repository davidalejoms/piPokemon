import { useState } from "react"
import { DevinfoStyle } from "./Devinfo.module.css"

const Devinfo = ({ visible }) => {
  const [size, setSize] = useState(`${window.innerWidth}  x ${window.innerHeight}`)
  window.addEventListener("resize", () => {
    setSize(`${window.innerWidth}  x ${window.innerHeight}`)
  })
  return <div className={DevinfoStyle}>{size}</div>
}

export default Devinfo
