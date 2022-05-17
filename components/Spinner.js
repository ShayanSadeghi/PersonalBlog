import styles from "../styles/Spinner.module.css";
function Spinner({ isLoading }) {
  return (
    <div
      style={{ display: isLoading ? "block" : "none" }}
      className={styles.spinner_container}
    >
      <div className={styles.spinner_position}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
