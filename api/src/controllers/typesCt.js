const { default: axios } = require("axios")
const { Types } = require("../db")
const typesLocal = []

const getAllTypes = async () => {
  try {
    const contentTypeTester = await Types.findAll()
    if (contentTypeTester.length === 0) {
      const apiTypes = await axios("https://pokeapi.co/api/v2/type")
      apiTypes.data.results.forEach((type) => typesLocal.push({ Nombre: type.name }))
      await Types.bulkCreate(typesLocal)
    }

    const allTypes = await Types.findAll()

    return allTypes
  } catch (error) {
    throw new Error("Error on get all types:  " + error.message)
  }
}
module.exports = { getAllTypes }
