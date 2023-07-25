import Card from "../Card/Card"
import { Grid } from "./GridContainer.module.css"
import PropTypes from "prop-types"
function GridContainer(props) {
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
      ImagenAux: PropTypes.string.isRequired,
      Vida: PropTypes.number.isRequired,
      Defensa: PropTypes.number.isRequired,
      Velocidad: PropTypes.number.isRequired,
      Altura: PropTypes.number.isRequired,
      Peso: PropTypes.number.isRequired,
    })
  ).isRequired,
}
export default GridContainer
