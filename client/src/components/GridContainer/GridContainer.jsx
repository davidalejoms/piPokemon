import Card from "../Card/Card"
import NoPokemons from "../NoPokemons/NoPokemons"

import { Grid } from "./GridContainer.module.css"
import PropTypes from "prop-types"
function GridContainer(props) {
  if (props.pokemons.length === 0 && !props.loader) return <NoPokemons />
  return (
    <div className={Grid}>
      {props.pokemons.map((pokemon) => (
        <Card
          key={pokemon.Id}
          Id={pokemon.Id}
          Nombre={pokemon.Nombre}
          Imagen={pokemon.Imagen}
          ImagenAux={pokemon.ImagenAux}
          Vida={pokemon.Vida}
          Defensa={pokemon.Defensa}
          Ataque={pokemon.Ataque}
          Velocidad={pokemon.Velocidad}
          Altura={pokemon.Altura}
          Peso={pokemon.Peso}
          Tipo={pokemon.Tipo}
        />
      ))}
    </div>
  )
}

GridContainer.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.number.isRequired,
      Nombre: PropTypes.string.isRequired,
      Imagen: PropTypes.string.isRequired,
      ImagenAux: PropTypes.string,
      Vida: PropTypes.number.isRequired,
      Defensa: PropTypes.number.isRequired,
      Ataque: PropTypes.number.isRequired,
      Velocidad: PropTypes.number.isRequired,
      Altura: PropTypes.number.isRequired,
      Peso: PropTypes.number.isRequired,
      Tipo: PropTypes.array.isRequired,
    })
  ).isRequired,
  loader: PropTypes.bool.isRequired,
}
export default GridContainer
