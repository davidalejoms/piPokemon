import { Navcontainer, LinkHeader } from "../DesktopMenu/DesktopMenu.module.css"
import appLogo from "../../../assets/appLogo.gif"
import { AiOutlineSearch } from "react-icons/ai"

import { Link } from "react-router-dom"

const DesktopMenu = () => {
  return (
    <>
      <div className={Navcontainer}>
        <Link to="/">
          <div id="logo">
            <img
              src={appLogo}
              alt="Logo Pokemon"
            />{" "}
          </div>
        </Link>
        <Link
          className={LinkHeader}
          to="/about"
        >
          About
        </Link>
        <Link
          className={LinkHeader}
          to="/new-pokemon"
        >
          Create Your Own
        </Link>
        <span
          className={LinkHeader}
          to="/about"
          onClick={() => alert("Show type slider")}
        >
          By Type
        </span>
        <form
          onSubmit={() => alert("A buscar")}
          style={{ position: "relative" }}
        >
          <AiOutlineSearch
            onClick={() => alert("a buscar")}
            style={{ position: "absolute", top: 5, left: 10, color: "gray", fontSize: "2.0rem" }}
          />
          <input
            type="text"
            id="search"
            placeholder="Pikachu, ditto etc.."
          />
        </form>
      </div>
    </>
  )
}

export default DesktopMenu
