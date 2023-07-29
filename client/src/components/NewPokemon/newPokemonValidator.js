const PokemonValidator = (name, value, setErrors) => {
  const errors = {}
  //  validaciones para Type of pokemon
  //   alert("file: newPokemonValidator.js:6  value: " + value + "lenght: " + value.length + " typeof: " + typeof value + " name: " + name)
  if (name === "Type") {
    if (value.length === 0) {
      console.log("entro en typo")
      if (value.length === 0) errors[name] = "Name cannot be empty" // tipo diferente  a ''

      errors[name] = "Type is required"
    } // tipo diferente  a ''
  }
  //   validaciones para Name of pokemon
  if (name === "Name") {
    if (value.length < 3) errors[name] = "Name must be at least 3 characters" // tipo diferente  a ''

    if (value.length === 0) errors[name] = "Name cannot be empty" // tipo diferente  a ''
  }

  if (name === "Image") {
    //TODO: mirar cmomo mierdas validar archivos
    if (value) errors[name] = "erroe por defecto Image"
  }
  if (name === "AuxImage") {
    //TODO: mirar cmomo mierdas validar archivos
    if (value) errors[name] = "erroe por defecto AuxImage"
  }

  if (name === "Defense") {
    if (!/^-?\d+$/.test(value)) errors[name] = " Defense must be a Number "
    if (!(value >= 5 && value <= 230)) errors[name] = " Defense must be betwen 5 and 230"
    if (value.length === 0) errors[name] = "Defense cannot be empty" // tipo diferente  a ''
  }
  if (name === "Life") {
    if (!/^-?\d+$/.test(value)) errors[name] = " Life must be a Number "
    if (!(value >= 1 && value <= 255)) errors[name] = " Life must be a betwen 1 and 255"
    if (value.length === 0) errors[name] = "Life  cannot be empty" // tipo diferente  a ''
  }
  if (name === "Speed") {
    if (!/^-?\d+$/.test(value)) errors[name] = " Speed must be a Number "
    if (!(value >= 5 && value <= 180)) errors[name] = " Speed must be  betwen 5 and 180"
    if (value.length === 0) errors[name] = "Speed  cannot be empty" // tipo diferente  a ''
  }
  if (name === "Height") {
    if (!/^-?\d+$/.test(value)) errors[name] = " Height must be a Number "
    if (!(value > 0 && value <= 99.9)) errors[name] = " Height must be betwen +0 and 99.9 meters"
    if (value.length === 0) errors[name] = "Height  cannot be empty" // tipo diferente  a ''
  }
  if (name === "Weight") {
    if (!/^-?\d+$/.test(value)) errors[name] = " Weight must be a Number "
    if (!(value > 0 && value <= 999)) errors[name] = " Weight must be betwen +0 and 999 Kg"
    if (value.length === 0) errors[name] = "Weight  cannot be empty" // tipo diferente  a ''
  }
  if (name === "Attack") {
    if (!/^-?\d+$/.test(value)) errors[name] = " Attack must be a Number "
    if (!(value >= 10 && value <= 194)) errors[name] = " Attack must be betwen 10 and 194"
    if (value.length === 0) errors[name] = "Attack  cannot be empty" // tipo diferente  a ''
  }

  setErrors(errors)
}

export default PokemonValidator
