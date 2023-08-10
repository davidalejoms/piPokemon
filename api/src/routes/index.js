const { Router } = require("express")
const pokemonsHandler = require("./pokemonsRt")
const typesHandler = require("./typesRt")
const dataBaseHandler = require("./dataBaseRt")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router()
router.get("/", (req, res) => {
  try {
    console.log("first route")

    res.status(200).json({
      message: "API ONLINE",
      endPoint1: "http://localhost:3001/pokemons",
      endPoint2: "http://localhost:3001/types",
      endPoint3: "http://localhost:3001/db",
    })
  } catch (error) {
    res.status(400).json({ error: ` on get /:id ${error.message}` })
  }
})

router.use("/pokemons", pokemonsHandler)
router.use("/types", typesHandler)
router.use("/db", dataBaseHandler)
// Ejemplo: router.use('/auth', authRouter);

module.exports = router
