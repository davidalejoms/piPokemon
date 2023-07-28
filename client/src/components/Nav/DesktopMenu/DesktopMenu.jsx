import { Navcontainer, LinkHeader } from "../DesktopMenu/DesktopMenu.module.css"
import appLogo from "../../../assets/appLogo.gif"
import { MdCatchingPokemon } from "react-icons/md"
import { Link } from "react-router-dom"
import SearchField from "../SearchField/SearchField"
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
          to="/Pokemon"
        >
          <MdCatchingPokemon
            style={{ fontSize: "2rem", marginTop: "0.3rem", color: "#fecb04", background: "black", borderRadius: "999px" }}
          />
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
        {/* <span
          className={LinkHeader}
          to="/about"
          onClick={() => alert("Show type slider")}
        >
          By Type
        </span> */}
        <SearchField />
      </div>
    </>
  )
}

export default DesktopMenu
