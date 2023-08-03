const { Pokemon, Types } = require("../db.js")

const getPokemonFromBd = async () => {
  try {
    const pokemons = await Pokemon.findAll({ include: { model: Types, attibutes: ["id", "tipo"], through: { attributes: [] } } }) //todo: poner include para mandar con typos
    return pokemons
  } catch (error) {
    throw new Error("Error on getPokemonFromBd: " + error.message)
  }
}

const getPokemonFromBdByIdOrName = async (idOrName) => {
  try {
    const isNumeric = (value) => {
      return /^-?\d+$/.test(value)
    }
    const isText = (value) => {
      return isNaN(value)
    }
    if (isNumeric(idOrName)) {
      console.log("file: dataBaseCT.js:15 ===en validacion de numeros===  idOrName:", idOrName)
      const pokemon = await Pokemon.findOne({
        where: { Id: idOrName },
        include: { model: Types, attibutes: ["id", "tipo"], through: { attributes: [] } },
      })
      return pokemon
    }
    if (isText(idOrName)) {
      console.log("file: dataBaseCT.js:22 ===en validacion de strings===  idOrName:", idOrName)
      const pokemon = await Pokemon.findOne({
        where: { Nombre: idOrName },
        include: { model: Types, attibutes: ["id", "tipo"], through: { attributes: [] } },
      })
      return pokemon
    }
  } catch (error) {
    throw new Error("Error on getPokemonFromBd/idOrName: " + error.message)
  }
}
module.exports = { getPokemonFromBd, getPokemonFromBdByIdOrName }
