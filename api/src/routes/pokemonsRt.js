const { Router } = require("express")
const { getPokelist, getPokemonDetail, getPokemonByName, newPokemon, getPokemonFromDB } = require("../controllers/pokemonsCt")
pokemonsHandler = Router()

pokemonsHandler.get("/", async (req, res) => {
  try {
    let { name } = req.query
    // name to lowercase
    name && (name = name.toLowerCase())
      ? // #### **📍 GET | /pokemons/name?="..."**

        // -  Esta ruta debe obtener todos aquellos pokemons que coinciden con el nombre recibido por query.
        // -  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
        // -  Si no existe el pokemon, debe mostrar un mensaje adecuado.
        // -  Debe buscar tanto los de la API como los de la base de datos.

        res.status(200).json(await getPokemonByName(name))
      : // #### **📍 GET | /pokemons**

        // -  Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.
        res.status(200).json(await getPokelist())
  } catch (error) {
    res.status(400).json("error on '/':" + error.message)
  }
})
// #### **📍 GET | /pokemons/:idPokemon**
// -  Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
// -  El pokemon es recibido por parámetro (ID).
// -  Tiene que incluir los datos del tipo de pokemon al que está asociado.
// -  Debe funcionar tanto para los pokemones de la API como para los de la base de datos.

pokemonsHandler.get("/:id", async (req, res) => {
  try {
    const { id } = req.params
    id && res.status(200).json(await getPokemonDetail(id))
  } catch (error) {
    res.status(400).json({ error: `/:id ${error.message}` })
  }
})

// #### **📍 POST | /pokemons**
// -  Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
// -  Toda la información debe ser recibida por body.
// -  Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos indicados (debe poder relacionarse al menos con dos).

pokemonsHandler.post("/", async (req, res) => {
  try {
    const { Nombre, Imagen, ImagenAux, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Tipos } = req.body

    const newPokemonRes = await newPokemon(Nombre, Imagen, ImagenAux, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Tipos)

    res.status(200).json(newPokemonRes)
  } catch (error) {
    res.status(400).json({ error: ` on post pokemon: ${error.message}` })

    //avoid express to crash on error
  }
})

// pokemonsHandler.get("/", async (req, res) => {
//   console.log("estyo en db pokenon")
//   // try {
//   //   const allPokemons = await getPokemonFromDB()
//   //   res.status(200).json(allPokemons)
//   // } catch (error) {
//   //   res.status(400).json({ error: ` on get /db: \n ${error.message}` })
//   // }
// })

module.exports = pokemonsHandler
