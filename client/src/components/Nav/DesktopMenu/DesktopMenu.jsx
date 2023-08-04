import styles from "../DesktopMenu/DesktopMenu.module.css"
import appLogo from "../../../assets/appLogo.gif"
import { MdCatchingPokemon } from "react-icons/md"
import { Link } from "react-router-dom"
import SearchField from "../SearchField/SearchField"
import OriginSwitcherButton from "../../OriginSwitcherButton/OriginSwitcherButton"
const DesktopMenu = () => {
  return (
    <>
      <div className={styles.Navcontainer}>
        <Link to="/">
          <div id="logo">
            <img
              src={appLogo}
              alt="Logo Pokemon"
            />{" "}
          </div>
        </Link>
        <Link
          className={styles.LinkHeader}
          to="/Pokemon"
        >
          <MdCatchingPokemon
            style={{ fontSize: "2rem", marginTop: "0.3rem", color: "#fecb04", background: "black", borderRadius: "999px" }}
          />
        </Link>
        <Link
          className={styles.LinkHeader}
          to="/about"
        >
          About
        </Link>
        <Link
          className={styles.LinkHeader}
          to="/new-pokemon"
        >
          Create Your Own
        </Link>

        <SearchField />

        <div className={styles.rowFlexer}>
          <label htmlFor="">Origin</label>
          <OriginSwitcherButton />
        </div>
      </div>
    </>
  )
}

export default DesktopMenu
