import style from ".//NoPokemons.module.css"

const NoPokemons = () => {
  return (
    <div className={style.main}>
      <h1>Not pokemons here yet! try looking from the API</h1>
      <img
        src="https://custom-doodle.com/wp-content/uploads/doodle/pokemon-psyduck/pokemon-psyduck-doodle.gif"
        alt=""
      />
    </div>
  )
}

export default NoPokemons
