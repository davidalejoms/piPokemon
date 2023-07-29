const axios = require("axios")
const { Pokemon } = require("../db.js")

const getPokelist = async () => {
  //hasta la fecha de este algoritmo hay 1281 pokemones
  try {
    // tomar todo el arreglo entrante y cargar un arreglo con todas las promesas que haran la request
    const pokemons = await axios("https://pokeapi.co/api/v2/pokemon?offset=0&limit=900") //importante manejar la cantidad
    // ahora cargamos el arreglo  para procesarlo despues como promesas en bloque con Promise.all
    const pokePromises = pokemons.data.results.map((pokemon) => axios(pokemon.url))
    // ahora procesamos el arreglo  para obtener un arreglo con los datos en bruto, gauramos los resultados en rawAllPokemon
    const rawAllPokemon = await Promise.all(pokePromises)
    // teniendo todo el arreglo cargado armamos un arreglo de resultados
    // se mapea desde el rawAllPokemon  a objetos que se guardan en processedPokemons que seran entregados al front
    const processedPokemons = rawAllPokemon.map((processedPokemon) => {
      return {
        Id: processedPokemon.data.id,
        Nombre: processedPokemon.data.name,
        Imagen: processedPokemon.data.sprites.other.home.front_default,
        ImagenAux: processedPokemon.data.sprites.other.home.front_shiny,
        Vida: processedPokemon.data.stats[0].base_stat,
        Ataque: processedPokemon.data.stats[1].base_stat,
        Defensa: processedPokemon.data.stats[2].base_stat,
        Velocidad: processedPokemon.data.stats[5].base_stat,
        Altura: processedPokemon.data.height,
        Peso: processedPokemon.data.weight,
        Tipo: processedPokemon.data.types.map((type) => {
          return { id: type.slot, tipo: type.type.name }
        }),
      }
    })

    return processedPokemons
  } catch (error) {
    throw new Error("Api Offline")
  }
}

const getPokemonDetail = async (id) => {
  try {
    const pokemonDetail = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const resultZero = []
    resultZero[0] = pokemonDetail.data
    // console.log(resultZero)
    const processedPokemon = resultZero.map((processedPokemon) => {
      return {
        Id: processedPokemon.id,
        Nombre: processedPokemon.name,
        Imagen: processedPokemon.sprites.other.home.front_default,
        ImagenAux: processedPokemon.sprites.other.home.front_shiny,
        Vida: processedPokemon.stats[0].base_stat,
        Ataque: processedPokemon.stats[1].base_stat,
        Defensa: processedPokemon.stats[2].base_stat,
        Velocidad: processedPokemon.stats[5].base_stat,
        Altura: processedPokemon.height,
        Peso: processedPokemon.weight,
        Tipo: processedPokemon.types.map((type) => {
          return { id: type.slot, tipo: type.type.name }
        }),
      }
    })
    return processedPokemon
  } catch (error) {
    throw new Error("Api Error On /:id ->Detail by id ")
  }
}
const getPokemonByName = async (name) => {
  try {
    console.log(name)
    const pokemonDetail = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const resultZero = []
    resultZero[0] = pokemonDetail.data
    console.log(resultZero)
    const processedPokemon = resultZero.map((processedPokemon) => {
      return {
        Id: processedPokemon.id,
        Nombre: processedPokemon.name,
        Imagen: processedPokemon.sprites.other.home.front_default,
        ImagenAux: processedPokemon.sprites.other.home.front_shiny,
        Vida: processedPokemon.stats[0].base_stat,
        Ataque: processedPokemon.stats[1].base_stat,
        Defensa: processedPokemon.stats[2].base_stat,
        Velocidad: processedPokemon.stats[5].base_stat,
        Altura: processedPokemon.height,
        Peso: processedPokemon.weight,
        Tipo: processedPokemon.types.map((type) => {
          return { id: type.slot, tipo: type.type.name }
        }),
      }
    })
    return processedPokemon
  } catch (error) {
    throw new Error("Pokemon not found")
  }
}
const newPokemon = async (ID, Nombre, Imagen, ImagenAux, Vida, Ataque, Defensa, Velocidad, Altura, Peso) => {
  try {
    if (!ID || !Nombre || !Imagen || !Vida || !Ataque || !Defensa) {
      throw new Error("==============Error de validacion de datos:,")
    } else {
      return await Pokemon.create({ ID, Nombre, Imagen, ImagenAux, Vida, Ataque, Defensa, Velocidad, Altura, Peso })
    }
  } catch (error) {
    throw new Error(" Missing dataerror on post create error: \n  " + error.message)
  }
}
module.exports = { getPokelist, getPokemonDetail, getPokemonByName, newPokemon }
