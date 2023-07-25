import { mobileMenu, LinkMobile, logoMobile } from "./MobileMenu.module.css"
import { Link } from "react-router-dom"
import appLogo from "../../../assets/appLogo.gif"
import { AiOutlineSearch } from "react-icons/ai"
import PropTypes from "prop-types"

const MobileMenu = ({ toggleMobileMenuHandler }) => {
  return (
    <>
      <div className={logoMobile}>
        <Link to="/">
          <div id="logo">
            <img
              src={appLogo}
              alt="Logo Pokemon"
              style={{ maxWidth: "250px" }}
            />
          </div>
        </Link>
      </div>
      <div className={mobileMenu}>
        <form
          onSubmit={() => alert("A buscar y se oculta el menu con tooglemenu handler")}
          style={{ position: "relative" }}
        >
          <AiOutlineSearch
            onClick={() => alert("a buscar y se oculta el menu con tooglemenu handler")}
            style={{ position: "absolute", top: 5, left: 10, color: "gray", fontSize: "2.0rem" }}
          />
          <input
            type="text"
            id="search"
            placeholder="Pikachu, ditto etc.."
          />
        </form>
        <Link
          className={LinkMobile}
          to="/about"
          onClick={toggleMobileMenuHandler}
        >
          About
        </Link>
        <Link
          className={LinkMobile}
          to="/new-pokemon"
          onClick={toggleMobileMenuHandler}
        >
          Create Your Own
        </Link>
        <span
          className={LinkMobile}
          to="/about"
          onClick={toggleMobileMenuHandler}
        >
          By Type
        </span>
      </div>
    </>
  )
}

MobileMenu.propTypes = {
  toggleMobileMenuHandler: PropTypes.func.isRequired,
}

export default MobileMenu
