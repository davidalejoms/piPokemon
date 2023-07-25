import { useState } from "react"
import { DevinfoStyle } from "./Devinfo.module.css"
import PropTypes from "prop-types"

const Devinfo = ({ visible }) => {
  const [size, setSize] = useState(`${window.innerWidth}  x ${window.innerHeight}`)
  window.addEventListener("resize", () => {
    setSize(`${window.innerWidth}  x ${window.innerHeight}`)
  })
  if (!visible) return 
  return <div className={DevinfoStyle}>{size}</div>
}

Devinfo.propTypes = {visible:PropTypes.bool.isRequired}

export default Devinfo
