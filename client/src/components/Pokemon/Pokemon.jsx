import GridContainer from "../GridContainer/GridContainer"
const Pokemon = () => {
  const pokemons = [
    {
      Id: 1,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",

      Vida: 45,
      Defensa: 49,
      Velocidad: 45,
      Altura: 7,
      Peso: 69,
    },
    {
      Id: 1,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",

      Vida: 45,
      Defensa: 49,
      Velocidad: 45,
      Altura: 7,
      Peso: 69,
    },
    {
      Id: 1,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",

      Vida: 45,
      Defensa: 49,
      Velocidad: 45,
      Altura: 7,
      Peso: 69,
    },
    {
      Id: 1,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",

      Vida: 45,
      Defensa: 49,
      Velocidad: 45,
      Altura: 7,
      Peso: 69,
    },
    {
      Id: 1,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",

      Vida: 45,
      Defensa: 49,
      Velocidad: 45,
      Altura: 7,
      Peso: 69,
    },
    {
      Id: 1,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",

      Vida: 45,
      Defensa: 49,
      Velocidad: 45,
      Altura: 7,
      Peso: 69,
    },
    {
      Id: 1,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",

      Vida: 45,
      Defensa: 49,
      Velocidad: 45,
      Altura: 7,
      Peso: 69,
    },
  ]

  return (
    <>
      <h1>slider filter here</h1>

      <GridContainer pokemons={pokemons} />
    </>
  )
}

export default Pokemon
