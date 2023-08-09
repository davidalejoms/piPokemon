import Modal from "../Modal/Modal"

const About = () => {
  const modalContent = [
    {
      title: " Nuevo pokemon creado!",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet blanditiis eos consequuntur error molestias aliquam, quos sed vero dolorem nisi impedit rem nesciunt repudiandae, a, labore porro optio ipsam illo!",
      buttonOk: " Aceptar",
      // buttonOption: "Ver Opciones",
      buttonOption: "",
      // buttonCancel: " Cancelar",
      buttonCancel: "",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/80.png",
      // image: "",
    },
  ]

  return (
    <div>
      <Modal
        key="modal"
        content={modalContent}
      />
    </div>
  )
}

export default About
