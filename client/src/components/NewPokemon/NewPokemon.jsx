import { useDispatch, useSelector } from "react-redux"
import styles from "./NewPokemon.module.css"

import { AiOutlineColumnHeight } from "react-icons/ai"
import { GiWeight } from "react-icons/gi"
import { BsSpeedometer2 } from "react-icons/bs"
import { MdOutlineCategory } from "react-icons/md"
import { GiLifeBar } from "react-icons/gi"
import { BsFillShieldSlashFill } from "react-icons/bs"
import { GiPowerLightning } from "react-icons/gi"
import { BiRename } from "react-icons/bi"

import newPokemonValidator from "./newPokemonValidator"

import Loader from "../Loader/Loader"

import { useEffect, useMemo, useState } from "react"
import { loadTypes } from "../../redux/actions"
import axios from "axios"
const NewPokemon = () => {
  //cargar tipos por si no estan cargados inicio
  const alltypes = useSelector((state) => state.typesOfPokemons) // el frontdata es el estado global de shownInFront que se pinta en pantalla
  const dispatch = useDispatch() // para mandar cosas al estado global
  const [loader, setLoader] = useState(true) // manejo del loader inicia mostrandose y cuando se acargue la api se oculta
  useEffect(() => {
    // si no hay nada en el estado global se carga la api
    if (alltypes.length === 0) {
      // const endpoint = "http://localhost:3001/pokemons"
      const begin = async () => {
        const endpointTypes = import.meta.env.VITE_APIURLTYPES
        const responseTypes = await axios.get(endpointTypes)
        dispatch(loadTypes(responseTypes.data))
        setLoader(false) // apaga el loader
      }
      begin()
    } else {
      // si ya esta cargado el estado global solo se apaga el loader
      setLoader(false) // apaga el loader
    }
  }, [dispatch, alltypes.length])
  //cargar tipos por si no estan cargados fin
  //TODO: Usar useCallback aquipara que el pajaro no cargue con cada render

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
  const randomImgfFixed = useMemo(randomicon, [])

  // selector de tipos de pokemon inicio
  const types = useSelector((state) => state.typesOfPokemons)
  // selector de tipos de pokemon fin

  // validador de datos inicio
  const [fields, setFields] = useState({})
  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
    const name = e.target.name
    const value = e.target.value
    newPokemonValidator(name, value, setErrors)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    errors.length !== 0 && alert("Please check the form")
  }

  // validador de datos fin

  return (
    <>
      {loader && <Loader />}
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
                  onChange={handleChange}
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
                {errors.Type && <p className={styles.errorMessage}>{errors.Type}</p>}
              </div>
              <div className={styles.datain}>
                <label htmlFor="Name">
                  <BiRename /> Name:
                </label>
                <input
                  onChange={handleChange}
                  name="Name"
                  type="text"
                />
                {errors.Name && <p className={styles.errorMessage}>{errors.Name}</p>}
              </div>
            </div>
            <div className={styles.rowdataFile}>
              <div className={styles.datain}>
                <label htmlFor="Image">Image:</label>
                <input
                  onChange={handleChange}
                  name="Image"
                  type="file"
                />
                {errors.Image && <p className={styles.errorMessage}>{errors.Image}</p>}
              </div>
            </div>
            <div className={styles.rowdataFile}>
              <div className={styles.datain}>
                <label htmlFor="AuxImage">Auxiliar Image:</label>
                <input
                  onChange={handleChange}
                  name="AuxImage"
                  type="file"
                />
                {errors.AuxImage && <p className={styles.errorMessage}>{errors.AuxImage}</p>}
              </div>
            </div>
            <div className={styles.rowdataAll}>
              <div className={styles.datain}>
                <label htmlFor="Defense">
                  <BsFillShieldSlashFill style={{ paddingRight: "0.6em" }} />
                  Defense:
                </label>
                <input
                  onChange={handleChange}
                  name="Defense"
                  type="text"
                />
                {errors.Defense && <p className={styles.errorMessage}>{errors.Defense}</p>}
              </div>
              <div className={styles.datain}>
                <label htmlFor="Life">
                  {" "}
                  <GiLifeBar style={{ paddingRight: "0.6em" }} />
                  Life:
                </label>
                <input
                  onChange={handleChange}
                  name="Life"
                  type="text"
                />
                {errors.Life && <p className={styles.errorMessage}>{errors.Life}</p>}
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
                  onChange={handleChange}
                  name="Speed"
                  type="text"
                />
                {errors.Speed && <p className={styles.errorMessage}>{errors.Speed}</p>}
              </div>
              <div className={styles.datain}>
                <label htmlFor="Height">
                  <AiOutlineColumnHeight style={{ paddingRight: "0.6em" }} />
                  Height:
                </label>
                <input
                  onChange={handleChange}
                  name="Height"
                  type="text"
                />
                {errors.Height && <p className={styles.errorMessage}>{errors.Height}</p>}
              </div>
            </div>
            <div className={styles.rowdataAll}>
              <div className={styles.datain}>
                <label htmlFor="Weight">
                  <GiWeight style={{ paddingRight: "0.6em" }} />
                  Weight:
                </label>
                <input
                  onChange={handleChange}
                  name="Weight"
                  type="text"
                />
                {errors.Weight && <p className={styles.errorMessage}>{errors.Weight}</p>}
              </div>
              <div className={styles.datain}>
                <label htmlFor="Attack">
                  {" "}
                  <GiPowerLightning style={{ paddingRight: "0.6em" }} />
                  Attack:
                </label>
                <input
                  onChange={handleChange}
                  name="Attack"
                  type="text"
                />
                {errors.Attack && <p className={styles.errorMessage}>{errors.Attack}</p>}
              </div>
            </div>
            <div className={styles.datain}>
              <button type="submit">Send</button>
            </div>
          </form>
          <div className={styles.pokemonWrapper}>
            <img
              // src="https://gamepress.gg/pokemongo/sites/pokemongo/files/2020-07/arti1.png"
              // src={randomicon()}
              src={randomImgfFixed}
              alt="animated pokeno to be happy"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default NewPokemon
