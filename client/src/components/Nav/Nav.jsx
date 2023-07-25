import { useState } from "react"
import DesktopMenu from "./DesktopMenu/DesktopMenu"
import MobileMenu from "./MobileMenu/MobileMenu"
import { GiHamburgerMenu } from "react-icons/gi"
import { MenuIcon,logoMobile } from "./Nav.module.css"
import { Link } from "react-router-dom"
import appLogo from "../../assets/appLogo.gif"
const Nav = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false)
  const toggleMobileMenuHandler = () => setToggleMobileMenu(!toggleMobileMenu)
  return (
    <>
      {/* desktop */}
      <DesktopMenu />
      {/* mobil */}
      <GiHamburgerMenu
        onClick={toggleMobileMenuHandler}
        className={MenuIcon}
        style={toggleMobileMenu && { color: "var(--accent)" }}
      />
      {toggleMobileMenu && <MobileMenu toggleMobileMenuHandler={toggleMobileMenuHandler} />}
      {!toggleMobileMenu && <div className={logoMobile}>
        <Link to="/">
          <div id="logo">
            <img
              src={appLogo}
              alt="Logo Pokemon"
              style={{ maxWidth: "250px" }}
            />
          </div>
        </Link>
      </div> }
      
      
    </>
  )
}

export default Nav
