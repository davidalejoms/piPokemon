const { Router } = require("express")
const { getPokemonFromBd } = require("../controllers/dataBaseCt")

const dataBaseHandler = Router()

dataBaseHandler.get("/all", async (req, res) => {
  console.log("entrando a ruta /db/all")
  try {
    const dBResult = await getPokemonFromBd()
    return res.status(200).json(dBResult)
  } catch (error) {
    res.status(400).json({ error: `error on get /db/all: ${error.message}` })
  }
})

module.exports = dataBaseHandler
