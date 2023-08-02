const { Pokemon, Types } = require("../db.js")

const getPokemonFromBd = async () => {
  try {
    const pokemons = await Pokemon.findAll({ include: Types }) //todo: poner include para mandar con typos
    return pokemons
  } catch (error) {
    throw new Error("Error on getPokemonFromBd: " + error.message)
  }
}
module.exports = { getPokemonFromBd }
