import { TypeAnimation } from "react-type-animation"

const About = () => {
  return (
    <div>
      <h1>
        Loading your pokemons
        <TypeAnimation
          sequence={["", 100, "..", 100, "...", 100, "....", 100]}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
          cursor={false}
        />
      </h1>
    </div>
  )
}

export default About
