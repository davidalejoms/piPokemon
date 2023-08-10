// import Modal from "../Modal/Modal"
import styles from "./About.module.css"
import template from "../../assets/profiletemplate.png"
import profilePic from "../../assets/about/about.jpg"
import { MdLocationPin } from "react-icons/md"
import { PiSuitcaseFill } from "react-icons/pi"
import { BsPersonCheckFill } from "react-icons/bs"
import { BsFillHouseHeartFill } from "react-icons/bs"
import { ImFacebook2, ImInstagram, ImTwitter, ImYoutube, ImGithub, ImWhatsapp } from "react-icons/im"

const About = () => {
  // const modalContent = [
  //   {
  //     title: " Nuevo pokemon creado!",
  //     content:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet blanditiis eos consequuntur error molestias aliquam, quos sed vero dolorem nisi impedit rem nesciunt repudiandae, a, labore porro optio ipsam illo!",
  //     buttonOk: " Aceptar",
  //     // buttonOption: "Ver Opciones",
  //     buttonOption: "",
  //     // buttonCancel: " Cancelar",
  //     buttonCancel: "",
  //     image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/80.png",
  //     // image: "",
  //   },
  // ]

  return (
    <div className={styles.about}>
      {/* <Modal
        key="modal"
        content={modalContent}
      /> */}
      <img
        className={styles.template}
        src={template}
        alt=""
      />
      <div className={styles.aboutcontainer}>
        <div className={styles.col}>
          <h1>
            David <br /> Alejandro Mejia
          </h1>
          <div className={styles.bagdesRow}>
            <div className={styles.badge}>
              <PiSuitcaseFill className={styles.icon} />
              <p>Ocupation:</p>
              <h3>Frontend Developer</h3>
            </div>
            <div className={styles.badge}>
              <MdLocationPin className={styles.icon} />
              <p>Location:</p>
              <h3>Colombia, South America</h3>
            </div>
          </div>
          <div className={styles.bagdesRow}>
            <div className={styles.badge}>
              <BsPersonCheckFill className={styles.icon} />
              <p>Age:</p>
              <h3>35</h3>
            </div>
            <div className={styles.badge}>
              <BsFillHouseHeartFill className={styles.icon} />
              <p>Family:</p>
              <h3>Married, 1 child</h3>
            </div>
          </div>

          <div className={styles.contactWrapper}>
            <h2>Let´s talk about it!</h2>
            <div className={styles.contact}>
              <a
                href="https://api.whatsapp.com/send?phone=573115228664&text=Hola,me%20Interesa%20trabajar%20Contigo%20David"
                target="_blank"
                rel="noreferrer"
              >
                <ImWhatsapp className={styles.contactItem} />
              </a>
              <a
                href="https://www.youtube.com/channel/UC5S3jOutLdbAeDTT67XWB4g "
                target="_blank"
                rel="noreferrer"
              >
                <ImYoutube className={styles.contactItem} />
              </a>
              <a
                href="https://www.facebook.com/davidalejoms"
                target="_blank"
                rel="noreferrer"
              >
                <ImFacebook2 className={styles.contactItem} />
              </a>
              <a
                href="https://www.instagram.com/davidalejoms/"
                target="_blank"
                rel="noreferrer"
              >
                <ImInstagram className={styles.contactItem} />
              </a>
              <a
                href="https://twitter.com/davidalejoms"
                target="_blank"
                rel="noreferrer"
              >
                <ImTwitter className={styles.contactItem} />
              </a>

              <a
                href="https://github.com/davidalejoms"
                target="_blank"
                rel="noreferrer"
              >
                <ImGithub className={styles.contactItem} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <h2>Experience and Passion for Full Stack Development</h2>
          <p>
            With over 3 years of dedication to the world of web development, my passion for creating captivating digital experiences drives
            me. I've honed my craft in front-end design and development, seamlessly merging visual aesthetics with robust functionality.
          </p>
          <p>
            I excel at crafting web applications that not only meet technical requirements but also make a visual impact and deliver an
            exceptional user experience.
          </p>
          <h2>Leadership and Collaboration</h2>
          <ul>
            <li>
              I have successfully led teams of individuals on medium-sized projects, fostering collaboration and innovation. My emphasis on
              open communication and effective project management has resulted in timely and high-quality deliverables.
            </li>
          </ul>
          <h2>Focus on Excellence and Proactivity</h2>
          <p>
            My focus on excellence and continuous improvement has driven me to stay up-to-date with the latest trends and technologies in
            the world of web development. I'm always seeking ways to optimize performance and usability, translating into innovative and
            efficient solutions.
          </p>
        </div>

        <div className={`${styles.col} ${styles.pistureWrapper}`}>
          <img
            className={styles.profilePicture}
            src={profilePic}
            alt="David Mejia Desktop"
          />
        </div>
      </div>
    </div>
  )
}

export default About
