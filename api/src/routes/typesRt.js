const { Router } = require("express")
const { getAllTypes } = require("../controllers/typesCt")
typesHandler = Router()

// #### **📍 GET | /types**
// -  Obtiene un arreglo con todos los tipos de pokemones.
// -  En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los tipos que encuentres en la API.
// -  Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

typesHandler.get("/", async (req, res) => {
  try {
    const allTypesPokemon = await getAllTypes()

    res.status(200).json(allTypesPokemon)
  } catch (error) {
    res.status(400).json({error: `error on get / types: ${error.message}`})
  }
})
module.exports = typesHandler
