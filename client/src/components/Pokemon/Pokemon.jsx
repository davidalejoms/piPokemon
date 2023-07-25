import { sliderMenu, sliderContainer, arrows } from "./Pokemon.module.css"
import GridContainer from "../GridContainer/GridContainer"
import { TbMathLower, TbMathGreater } from "react-icons/tb"
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
      <div className={sliderContainer}>
        <TbMathLower className={arrows} />
        <ul className={sliderMenu}>
          <li>
            <button>Tierra</button>
          </li>
          <li>
            <button>Fuego</button>
          </li>
          <li>
            <button>Aire</button>
          </li>
          <li>
            <button>Luchador</button>
          </li>
          <li>
            <button>Agua</button>
          </li>
          <li>
            <button>Psiquico</button>
          </li>
          <li>
            <button>Eléctrico</button>
          </li>
        </ul>
        <TbMathGreater className={arrows} />
      </div>
      <GridContainer pokemons={pokemons} />
    </>
  )
}

export default Pokemon
