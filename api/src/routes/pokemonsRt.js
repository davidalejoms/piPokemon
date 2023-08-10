const express = require("express")
const { Router } = require("express")
const { getPokelist, getPokemonDetail, getPokemonByName, newPokemon } = require("../controllers/pokemonsCt")
// import path from node
const path = require("path")

pokemonsHandler = express()

pokemonsHandler.get("/", async (req, res) => {
  try {
    let { name } = req.query
    // name to lowercase
    name && (name = name.toLowerCase())
      ? // #### **📍 GET | /pokemons/name?="..."**

        // -  Esta ruta debe obtener todos aquellos pokemons que coinciden con el nombre recibido por query.
        // -  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
        // -  Si no existe el pokemon, debe mostrar un mensaje adecuado.
        // -  Debe buscar tanto los de la API como los de la base de datos.

        res.status(200).json(await getPokemonByName(name))
      : // #### **📍 GET | /pokemons**

        // -  Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.
        res.status(200).json(await getPokelist())
  } catch (error) {
    res.status(400).json("error on '/':" + error.message)
  }
})
// #### **📍 GET | /pokemons/:idPokemon**
// -  Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
// -  El pokemon es recibido por parámetro (ID).
// -  Tiene que incluir los datos del tipo de pokemon al que está asociado.
// -  Debe funcionar tanto para los pokemones de la API como para los de la base de datos.

pokemonsHandler.get("/:id", async (req, res) => {
  try {
    const { id } = req.params
    id && res.status(200).json(await getPokemonDetail(id))
  } catch (error) {
    res.status(400).json({ error: `/:id ${error.message}` })
  }
})
// !===================================================================================
// debo recibir todos los datos del pokemon
// recibir la imagen que viene y guardarla en el servidor
// recibir la imagen auxiliar que viene y guardarla en el servidor
// enviar la ruta donde se guardo como tipo

// #### **📍 POST | /pokemons**
const multer = require("multer")
const fs = require("fs") // Add this line

const uploadDirectory = "./uploads/"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirectory) // Use the 'uploadDirectory' variable
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })
const cpUpload = upload.fields([
  { name: "Image", maxCount: 1 },
  { name: "AuxImage", maxCount: 1 },
])
pokemonsHandler.post("/", cpUpload, async (req, res) => {
  try {
    const { Nombre, Vida, Ataque, Defensa, Velocidad, Altura, Peso } = req.body
    let { Tipos } = req.body
    Tipos = Tipos.split(",").map((tipo) => Number(tipo))

    const serverAddress = `${req.protocol}://${req.get("host")}`
    const Imagen = `${serverAddress}/${req.files.Image[0].path}`
    const ImagenAux = `${serverAddress}/${req.files.AuxImage[0].path}`

    const newPokemonRes = await newPokemon(Nombre, Imagen, ImagenAux, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Tipos)

    res.status(200).json(newPokemonRes)
    // res.status(200).send("devmode")
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error: ` on post pokemon: ${error.message}` })

    //avoid express to crash on error
  }
})

module.exports = pokemonsHandler
