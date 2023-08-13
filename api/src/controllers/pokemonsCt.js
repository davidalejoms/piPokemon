
require("dotenv").config()
const axios = require("axios")
const { Pokemon, Types } = require("../db.js")
const loadTypes = require("../utils/loadTypes.js")

const getPokelist = async () => {
  //hasta la fecha de este algoritmo hay 1281 pokemones

const { API_AMOUNT } = process.env
// 
  try {
    // tomar todo el arreglo entrante y cargar un arreglo con todas las promesas que haran la request
    const pokemons = await axios(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${API_AMOUNT}`) //importante manejar la cantidad
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
        Types: processedPokemon.data.types.map((type) => {
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
    throw new Error("Api Error On /:id ->Detail by id " + error.message)
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
// !inicio de post
const newPokemon = async (Nombre, Imagen, ImagenAux, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Tipos) => {
  console.log(
    "==============================file: pokemonsCt.js:98 \n Nombre",
    Nombre,
    " \n Imagen",
    Imagen,
    " \n ImagenAux",
    ImagenAux,
    " \n Vida",
    Vida,
    " \n Ataque",
    Ataque,
    " \n Defensa",
    Defensa,
    " \n Velocidad",
    Velocidad,
    " \n Altura",
    Altura,
    " \n Peso",
    Peso,
    " \n Tipos",
    Tipos
  )
  try {
    // verificar que la tabla tipos tenga registros, si no los tiene hacer request a la api y cargarlos
    const types = await Types.findAll()
    if (types.length === 0) {
      await loadTypes()
    }

    if (!Nombre || !Imagen || !Vida || !Ataque || !Defensa || !Tipos) {
      throw new Error("==============Error de validacion de datos:,")
    } else {
      // console.log("file: pokemonsCt.js:131  Nombre:", Nombre)
      const creation = await Pokemon.create({ Nombre, Imagen, ImagenAux, Vida, Ataque, Defensa, Velocidad, Altura, Peso })
      // add field in related table methos add in sequelize
      creation.addTypes(Tipos)
      //mandar el resultado con sus campos relacionados apra mostrart en el exito
      return creation
    }
  } catch (error) {
    throw new Error(" Missing dataerror on post create error:  " + error.message)
  }
}

module.exports = { getPokelist, getPokemonDetail, getPokemonByName, newPokemon }
