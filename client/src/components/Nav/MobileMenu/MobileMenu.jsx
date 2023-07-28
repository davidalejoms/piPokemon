import { mobileMenu, LinkMobile, logoMobile } from "./MobileMenu.module.css"
import { Link } from "react-router-dom"
import appLogo from "../../../assets/appLogo.gif"
import PropTypes from "prop-types"
import { MdCatchingPokemon } from "react-icons/md"
import SearchField from "../SearchField/SearchField"
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
        <SearchField />
        <Link
          className={LinkMobile}
          to="/Pokemon"
          onClick={toggleMobileMenuHandler}
        >
          <MdCatchingPokemon
            style={{
              fontSize: "2rem",
              marginTop: "0rem",
              color: "#fecb04",
              background: "black",
              borderRadius: "999px",
              marginRight: "1rem",
            }}
          />{" "}
          Go to APP
        </Link>
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
        {/* <span
          className={LinkMobile}
          to="/about"
          onClick={toggleMobileMenuHandler}
        >
          By Type
        </span> */}
      </div>
    </>
  )
}

MobileMenu.propTypes = {
  toggleMobileMenuHandler: PropTypes.func.isRequired,
}

export default MobileMenu
