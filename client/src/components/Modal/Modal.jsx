import PropTypes from "prop-types"
import styles from "./Modal.module.css"
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"
import { RiForbidLine } from "react-icons/ri"
import { useState } from "react"
import { GiSettingsKnobs } from "react-icons/gi"
const Modal = (props) => {
  const [modal, setModal] = useState(true)
  const modalcloseHandler = () => setModal(false)
  const modalOkHandler = () => setModal(false)
  const modalOptionsHandler = () => alert("options Handler")
  return (
    <>
      {modal &&
        props.content.map((mod) => {
          return (
            <div
              key="1"
              className={styles.modalcontainer}
            >
              <div className={styles.modal}>
                <div className={styles.headerContainer}>
                  <div className={styles.titleContainer}>{mod.title}</div>
                  <div
                    onClick={modalcloseHandler}
                    className={styles.closeButtonContainer}
                  >
                    <AiOutlineCloseCircle />
                  </div>
                </div>
                <div className={styles.contentModal}>
                  {mod.image && (
                    <div className={styles.imgModal}>
                      <img
                        src={mod.image}
                        alt=""
                      />
                    </div>
                  )}
                  <div className={styles.textContentModal}>
                    <div className={styles.text}>{mod.content}</div>
                  </div>
                </div>
                <div className={styles.buttonsWrapper}>
                  <div className={styles.buttonOk}>
                    <button onClick={modalOkHandler}>
                      <AiOutlineCheckCircle className={styles.icon} />
                      {mod.buttonOk}
                    </button>
                  </div>

                  {mod.buttonOption && (
                    <div className={styles.buttonOption}>
                      <button onClick={modalOptionsHandler}>
                        <GiSettingsKnobs className={styles.icon} />
                        {mod.buttonOption}
                      </button>
                    </div>
                  )}
                  {mod.buttonCancel && (
                    <div className={styles.buttonCancel}>
                      <button onClick={modalcloseHandler}>
                        <RiForbidLine className={styles.icon} />
                        {mod.buttonCancel}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}{" "}
    </>
  )
}

Modal.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      image: PropTypes.string,
      buttonOk: PropTypes.string.isRequired,
      buttonOption: PropTypes.string,
      buttonCancel: PropTypes.string,
    })
  ).isRequired,
}

export default Modal
