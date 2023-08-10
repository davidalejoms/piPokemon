const { Router } = require("express")
const { getPokemonFromBd, getPokemonFromBdByIdOrName } = require("../controllers/dataBaseCt.js")

const dataBaseHandler = Router()

dataBaseHandler.get("/all", async (req, res) => {
  try {
    const dBResult = await getPokemonFromBd()
    return res.status(200).json(dBResult)
  } catch (error) {
    res.status(400).json({ error: `error on get /db/all: ${error.message}` })
  }
})

dataBaseHandler.get("/:idOrName", async (req, res) => {
  try {
    const { idOrName } = req.params
    const dBResult = await getPokemonFromBdByIdOrName(idOrName)
    return res.status(200).json(dBResult)
  } catch (error) {
    res.status(400).json({ error: `error on get /db/:idOrName ${error.message}` })
  }
})

module.exports = dataBaseHandler
