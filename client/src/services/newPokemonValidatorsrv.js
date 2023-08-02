const PokemonValidator = (fields, setErrors) => {
  const errors = {}
  //validations for type field

  if ("Type" in fields && fields.Type === "") errors.Type = "Type cannot be empty" // 'Type' in fields es evaluado true si no viene en el objeto fields

  // validations for Name Field
  if ("Name" in fields && fields.Name === "") errors.Name = `Name cannot be Empty`
  if ("Name" in fields && fields.Name.length < 3) errors.Name = `Name must be al teast 3 characters`

  // validations for Image Field
  if ("Image" in fields && fields.Image === "") errors.Image = `Image cannot be Empty`
  //verificar la extension del archivo
  if ("Image" in fields && fields.Image !== "") {
    const ext = fields.Image.name.split(".").at(-1)
    if (!(ext === "jpg" || ext === "jpeg" || ext === "png" || ext === "gif"))
      errors.Image = ` .${ext} Not Allowed Only  .jpg .png .jpeg. gif are allowed`
  }
  //verificar el tamaño del archivo
  if ("Image" in fields && fields.Image !== "") {
    const sizeMB = Number((fields.Image.size / 1000000).toFixed(2))
    if (sizeMB > 1.5) errors.Image = `${sizeMB} MB received! 1.5 MB max allowed `
  }

  // validations for AuxImage Field
  // if ("AuxImage" in fields && fields.AuxImage === "") errors.AuxImage = `AuxImage cannot be Empty`
  //verificar la extension del archivo
  if ("AuxImage" in fields && fields.AuxImage !== "") {
    const ext = fields.AuxImage.name.split(".").at(-1)
    if (!(ext === "jpg" || ext === "jpeg" || ext === "png" || ext === "gif"))
      errors.AuxImage = ` .${ext} Not Allowed Only  .jpg .png .jpeg. gif are allowed`
  }
  //verificar el tamaño del archivo
  if ("AuxImage" in fields && fields.AuxImage !== "") {
    const sizeMB = Number((fields.AuxImage.size / 1000000).toFixed(2))
    if (sizeMB > 1.5) errors.AuxImage = `${sizeMB} MB received! 1.5 MB max allowed `
  }

  // validations for Defense Field
  if ("Defense" in fields && !/^-?\d+$/.test(fields.Defense)) errors.Defense = `Defense must be a number`
  if ("Defense" in fields && !(fields.Defense >= 5 && fields.Defense <= 230)) errors.Defense = " Defense must be betwen 5 and 230"
  if ("Defense" in fields && fields.Defense === "") errors.Defense = `Defense cannot be Empty`

  // validations for Life Field
  if ("Life" in fields && !/^-?\d+$/.test(fields.Life)) errors.Life = `Life must be a number`
  if ("Life" in fields && !(fields.Life >= 1 && fields.Life <= 255)) errors.Life = " Life must be a betwen 1 and 255"
  if ("Life" in fields && fields.Life === "") errors.Life = `Life cannot be Empty`

  // validations for Speed Field
  if ("Speed" in fields && !/^-?\d+$/.test(fields.Speed)) errors.Speed = `Speed must be a number`
  if ("Speed" in fields && !(fields.Speed >= 5 && fields.Speed <= 180)) errors.Speed = " Speed must be  betwen 5 and 180"
  if ("Speed" in fields && fields.Speed === "") errors.Speed = `Speed cannot be Empty`

  // validations for Height Field
  if ("Height" in fields && !/^-?\d+$/.test(fields.Height)) errors.Height = `Height must be a number`
  if ("Height" in fields && !(fields.Height > 0 && fields.Height <= 100)) errors.Height = " Height must be betwen +0 and 100 meters"
  if ("Height" in fields && fields.Height === "") errors.Height = `Height cannot be Empty`

  // validations for Weight Field
  if ("Weight" in fields && !/^-?\d+$/.test(fields.Weight)) errors.Weight = `Weight must be a number`
  if ("Weight" in fields && !(fields.Weight > 0 && fields.Weight <= 1000)) errors.Weight = " Weight must be betwen +0 and 1000 Kg"
  if ("Weight" in fields && fields.Weight === "") errors.Weight = `Weight cannot be Empty`

  // validations for Attack Field
  if ("Attack" in fields && !/^-?\d+$/.test(fields.Attack)) errors.Attack = `Attack must be a number`
  if ("Attack" in fields && !(fields.Attack >= 10 && fields.Attack <= 194)) errors.Attack = " Attack must be betwen 10 and 194"
  if ("Attack" in fields && fields.Attack === "") errors.Attack = `Attack cannot be Empty`

  // console.log("file: newPokemonValidator.js:16  errors:", errors)
  setErrors(errors)
}

export default PokemonValidator
