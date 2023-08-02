const { default: axios } = require("axios")
const { Types } = require("../db")
const getAllTypes = async () => {
  const typesFromApi = await axios.get("https://pokeapi.co/api/v2/type")
  const types = typesFromApi.data.results.map((type) => {
    return { id: Number(type.url.split("/").at(-2)), tipo: type.name }
  })

  console.log(types)
  // const loadedTypes = await Types.bulkCreate(types)
}

module.exports = getAllTypes
