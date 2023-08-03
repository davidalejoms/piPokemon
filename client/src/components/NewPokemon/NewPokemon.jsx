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

import newPokemonValidator from "../../services/newPokemonValidatorsrv"

import Loader from "../Loader/Loader"

import { useEffect, useMemo, useState } from "react"
import { loadDataBase, loadTypes, setGlobalLoader } from "../../redux/actions"
import axios from "axios"

const NewPokemon = () => {
  //cargar tipos por si no estan cargados inicio
  const alltypes = useSelector((state) => state.typesOfPokemons) // el frontdata es el estado global de shownInFront que se pinta en pantalla
  const dispatch = useDispatch() // para mandar cosas al estado global
  // manejo del loader inicia mostrandose y cuando se acargue la api se oculta
  const { loader } = useSelector((state) => state.auxGlobalStates) // manejo del loader inicia mostrandose y cuando se acargue la api se oculta

  useEffect(() => {
    dispatch(setGlobalLoader(true)) // prende el loader
    // si no hay nada en el estado global se carga la api
    if (alltypes.length === 0) {
      const begin = async () => {
        await dispatch(loadTypes(dispatch))

        dispatch(setGlobalLoader(false)) // apaga el loader
      }
      begin()
    } else {
      // si ya esta cargado el estado global solo se apaga el loader
      dispatch(setGlobalLoader(false)) // apaga el loader
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
    const name = e.target.name
    let value = e.target.value
    const files = e.target.files

    // delete key for state if the field is empty
    if (files && files.length === 0) {
      const temporalStateToRemoveFieldEmpty = { ...fields }
      delete temporalStateToRemoveFieldEmpty[name]
      setFields(temporalStateToRemoveFieldEmpty)
      console.log("la foto fue eliminada y su valor descartado del estado")
      value = ""
    } else if (files && files.length === 1) {
      value = files[0]
    }

    setFields({ ...fields, [name]: value })

    newPokemonValidator({ ...fields, [name]: value }, setErrors)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const lastvalidation = {
      // if fields.fieldname is not empty then fields.fieldname.value else ''
      Type: (() => ("Type" in fields ? fields.Type : ""))(),
      Name: (() => ("Name" in fields ? fields.Name : ""))(),
      Image: (() => ("Image" in fields ? fields.Image : ""))(),
      // AuxImage: (() => ("AuxImage" in fields ? fields.AuxImage : ""))(),//not mandatory doesnt matter if exist or not in fields
      Defense: (() => ("Defense" in fields ? fields.Defense : ""))(),
      Speed: (() => ("Speed" in fields ? fields.Speed : ""))(),
      Life: (() => ("Life" in fields ? fields.Life : ""))(),
      Height: (() => ("Height" in fields ? fields.Height : ""))(),
      Weight: (() => ("Weight" in fields ? fields.Weight : ""))(),
      Attack: (() => ("Attack" in fields ? fields.Attack : ""))(),
    }
    
    console.log(lastvalidation)

    newPokemonValidator(lastvalidation, setErrors)

    if (!(Object.keys(fields).length >= 9 && Object.keys(errors).length === 0))
      alert("no se puede enviar") //TODO: modal para mostrar los errores de validacion
    else {
      //mapear el fomrulario al formato de la base de datos por si el contato algun dia cambia
      //obligatorios:
      const formatedFields = {
        Nombre: fields.Name.toLowerCase(),
        Imagen: fields.Image.name,
        Vida: fields.Life,
        Ataque: fields.Attack,
        Defensa: fields.Defense,
        Velocidad: fields.Speed,
        Altura: fields.Height,
        Peso: fields.Weight,
        Tipos: [Number(fields.Type)], // como segudo elemento del array el type2 si existe
      }
      // console.log("file: NewPokemon.jsx:125  formatedFields:", formatedFields)

      // opcionales
      if (fields.AuxImage) formatedFields.AuxImage = fields.AuxImage.name
      // convertir el objeto en un formdata para enviarlo al back
      // const formData = new FormData()

      // for (const key in formatedFields) {
      //   formData.append(key, formatedFields[key])
      // }

      // console.log("file: NewPokemon.jsx:136  formData:", formData)

      const endPointPokemons = import.meta.env.VITE_APIURLPOKEMONS

      const newPokemonsTODB = await axios.post(endPointPokemons, formatedFields, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      // console.log("file: NewPokemon.jsx:107  newPokemonsTODB:", newPokemonsTODB)
      if (newPokemonsTODB.status === 200) {
        //TODO: hacer un modal para mostrar el resultado de la creacion del pokemon
        alert("Pokemon creado")
        dispatch(loadDataBase(dispatch))
      } else alert("no se pudo crear el pokemon")
      //request post para database
    }
  }

  // validador de datos fin

  return (
    <>
      {loader && <Loader />}
      <div className={styles.componentContainer}>
        <h1>Create Your Own Pokemon</h1>
        <div className={styles.elementsWrapper}>
          {fields.Image && (
            <div className={styles.prevwrapper}>
              <img
                src={fields.Image.name ? URL.createObjectURL(fields.Image) : ""}
                alt={fields.Image}
              />

              {fields.AuxImage && fields.Image && (
                <img
                  src={fields.AuxImage.name ? URL.createObjectURL(fields.AuxImage) : ""}
                  alt={fields.AuxImage}
                />
              )}
            </div>
          )}
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
                  // value={fields.Type}
                >
                  <option value="">Choose one</option>
                  {types.map((t, i) => {
                    return (
                      <option
                        key={i}
                        value={t.id}
                      >
                        {t.tipo}
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
                  // value={fields.Name}
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
                  // value={fields.Image}
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
                  // value={fields.AuxImage}
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
                  // value={fields.Defense}
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
                  // value={fields.Life}
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
                  // value={fields.Speed}
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
                  // value={fields.Height}
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
                  // value={fields.Weight}
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
                  // value={fields.Attack}
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
