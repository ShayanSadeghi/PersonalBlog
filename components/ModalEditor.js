import styles from "../styles/ModalEditor.module.css";

function ModalEditor({ name, data, display, closeHandler }) {
  return (
    <div className={styles.modal} style={{ display }}>
      <span className={styles.close} onClick={closeHandler}>
        x
      </span>
      <form className={styles.modal_content}>
        <div className="container">
          <h1>{name}</h1>
        </div>
      </form>
    </div>
  );
}

export default ModalEditor;
