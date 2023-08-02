const { Router } = require("express")
const pokemonsHandler = require("./pokemonsRt")
const typesHandler = require("./typesRt")
const dataBaseHandler = require("./dataBaseRt")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router()

router.use("/pokemons", pokemonsHandler)
router.use("/types", typesHandler)
router.use("/db", dataBaseHandler)
// Ejemplo: router.use('/auth', authRouter);

module.exports = router
