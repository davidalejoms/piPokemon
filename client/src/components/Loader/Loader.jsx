import { TypeAnimation } from "react-type-animation"
import { loaderSplash } from "./Loader.module.css"
const Loader = () => {
  const randomicon = () => {
    const icons = [
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-kadabra/pokemon-kadabra-doodle.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-pidgeot/pokemon-pidgeot.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-charizard/pokemon-charizard-doodle.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-mimikyu/pokemon-mimikyu-doodle.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-bellossom/pokemon-bellossom-doodle.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-elekid/pokemon-elekid-doodle.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-tentacruel/pokemon-tentacruel-doodle.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-seadra/pokemon-seadra-doodle.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-dragonite/pokemon-dragonite.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-charmeleon/pokemon-charmeleon.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-vaporeon/pokemon-vaporeon.gif",
      "https://custom-doodle.com/wp-content/uploads/doodle/pokemon-arcanine/pokemon-arcanine-doodle.gif",
    ]
    return icons[Math.floor(Math.random() * icons.length)]
  }

  return (
    <div className={loaderSplash}>
      <img
        src={randomicon()}
        alt=""
      />
      <div className="titleWrap"></div>
      <h1>Loading your pokemons</h1>
      <h1>
        <span style={{ fontSize: "2em" }}>.</span>
        <TypeAnimation
          sequence={[
            "",
            100,
            "..",
            100,
            "...",
            100,
            "....",
            100,
            ".....",
            100,
            "......",
            100,
            ".......",
            100,
            "........",
            100,
            ".........",
            100,
            "..........",
            100,
            "...........",
            100,
            "............",
            100,
            ".............",
            100,
            "..............",
            100,
          ]}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
          cursor={false}
        />
      </h1>
    </div>
  )
}

// Loader.propTypes = {}

export default Loader
