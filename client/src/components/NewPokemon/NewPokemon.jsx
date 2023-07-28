import { useSelector } from "react-redux"
import styles from "./NewPokemon.module.css"
import { AiOutlineColumnHeight } from "react-icons/ai"
import { GiWeight } from "react-icons/gi"
import { BsSpeedometer2 } from "react-icons/bs"
import { MdOutlineCategory } from "react-icons/md"
import { GiLifeBar } from "react-icons/gi"
import { BsFillShieldSlashFill } from "react-icons/bs"
import { GiPowerLightning } from "react-icons/gi"
import { BiRename } from "react-icons/bi"
const NewPokemon = () => {
  const randomicon = () => {
    const icons = [
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-kadabra/pokemon-kadabra-doodle.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-pidgeot/pokemon-pidgeot.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-charizard/pokemon-charizard-doodle.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-mimikyu/pokemon-mimikyu-doodle.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-bellossom/pokemon-bellossom-doodle.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-elekid/pokemon-elekid-doodle.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-tentacruel/pokemon-tentacruel-doodle.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-seadra/pokemon-seadra-doodle.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-dragonite/pokemon-dragonite.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-charmeleon/pokemon-charmeleon.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-vaporeon/pokemon-vaporeon.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-arcanine/pokemon-arcanine-doodle.gif",
    ]
    return icons[Math.floor(Math.random() * icons.length)]
  }
  // selector de tipos de pokemon inicio
  const types = useSelector((state) => state.typesOfPokemons)
  // selector de tipos de pokemon fin

  // validador de datos inicio
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  // validador de datos fin

  return (
    <>
      <div className={styles.componentContainer}>
        <h1>Create Your Own Pokemon</h1>
        <div className={styles.elementsWrapper}>
          <form onSubmit={handleSubmit}>
            <div className={styles.rowdataAll}>
              <div
                className={styles.datain}
                style={{ flexGrow: "2" }}
              >
                <label htmlFor="Type">
                  <MdOutlineCategory style={{ paddingRight: "0.6em" }} />
                  Pokemon Type:
                </label>
                <select
                  name="Type"
                  id=""
                >
                  <option value="">Choose one</option>
                  {types.map((t, i) => {
                    return (
                      <option
                        key={i}
                        value={t.Nombre}
                      >
                        {t.Nombre}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className={styles.datain}>
                <label htmlFor="Name">
                  <BiRename /> Name:
                </label>
                <input
                  name="Name"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.rowdataFile}>
              <div className={styles.datain}>
                <label htmlFor="Image">Image:</label>
                <input
                  name="Image"
                  type="file"
                />
              </div>
            </div>
            <div className={styles.rowdataFile}>
              <div className={styles.datain}>
                <label htmlFor="AuxImage">Auxiliar Image:</label>
                <input
                  name="AuxImage"
                  type="file"
                />
              </div>
            </div>
            <div className={styles.rowdataAll}>
              <div className={styles.datain}>
                <label htmlFor="Defense">
                  <BsFillShieldSlashFill style={{ paddingRight: "0.6em" }} />
                  Defense:
                </label>
                <input
                  name="Defense"
                  type="text"
                />
              </div>
              <div className={styles.datain}>
                <label htmlFor="Life">
                  {" "}
                  <GiLifeBar style={{ paddingRight: "0.6em" }} />
                  Life:
                </label>
                <input
                  name="Life"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.rowdataAll}>
              <div className={styles.datain}>
                <label htmlFor="Speed">
                  {" "}
                  <BsSpeedometer2 style={{ paddingRight: "0.6em" }} />
                  Speed:
                </label>
                <input
                  name="Speed"
                  type="text"
                />
              </div>
              <div className={styles.datain}>
                <label htmlFor="Height">
                  <AiOutlineColumnHeight style={{ paddingRight: "0.6em" }} />
                  Height:
                </label>
                <input
                  name="Height"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.rowdataAll}>
              <div className={styles.datain}>
                <label htmlFor="Weight">
                  <GiWeight style={{ paddingRight: "0.6em" }} />
                  Weight:
                </label>
                <input
                  name="Weight"
                  type="text"
                />
              </div>
              <div className={styles.datain}>
                <label htmlFor="Attack">
                  {" "}
                  <GiPowerLightning style={{ paddingRight: "0.6em" }} />
                  Attack:
                </label>
                <input
                  name="Attack"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.datain}>
              <button type="submit">Send</button>
            </div>
          </form>
          <div className={styles.pokemonWrapper}>
            <img
              // src="https://gamepress.gg/pokemongo/sites/pokemongo/files/2020-07/arti1.png"
              src={randomicon()}
              alt="animated pokeno to be happy"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default NewPokemon
