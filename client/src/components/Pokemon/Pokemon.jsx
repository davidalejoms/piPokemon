import GridContainer from "../GridContainer/GridContainer"
import SliderContainer from "./SliderContainer/SliderContainer"
import OrdersAndFilters from "./OrdersAndFilters/OrdersAndFilters"
const Pokemon = () => {
  const pokemons = [
    {
      Id: 1,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",

      Vida: 45,
      Defensa: 49,
      Velocidad: 45,
      Altura: 7,
      Peso: 69,
      Tipo: "Fuego",
    },
    {
      Id: 2,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",

      Vida: 45,
      Defensa: 49,
      Velocidad: 45,
      Altura: 7,
      Peso: 69,
      Tipo: "Fuego",
    },
    {
      Id: 3,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",

      Vida: 45,
      Defensa: 49,
      Velocidad: 45,
      Altura: 7,
      Peso: 69,
      Tipo: "Fuego",
    },
    {
      Id: 4,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",

      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",

      Vida: 45,
      Defensa: 49,
      Velocidad: 45,
      Altura: 7,
      Peso: 69,
      Tipo: "Fuego",
    },
    {
      Id: 5,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",

      Vida: 45,
      Defensa: 49,
      Velocidad: 45,
      Altura: 7,
      Peso: 69,
      Tipo: "Fuego",
    },
    {
      Id: 6,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",

      Vida: 45,
      Defensa: 49,
      Velocidad: 45,
      Altura: 7,
      Peso: 69,
      Tipo: "Fuego",
    },
    {
      Id: 7,
      Nombre: "bulbasaur",
      Imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      ImagenAux: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",

      Vida: 45,
      Defensa: 49,
      Velocidad: 45,
      Altura: 7,
      Peso: 69,
      Tipo: "Fuego",
    },
  ]

  return (
    <>
      <OrdersAndFilters />
      <SliderContainer />

      <GridContainer pokemons={pokemons} />
    </>
  )
}

export default Pokemon
