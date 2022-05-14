import styles from "../../styles/ModalEditor.module.css";

function ModalEditor({ data, display, closeHandler }) {
  console.log(data);
  const changeHandler = (e) => {
    console.log("form changed");
  };

  return (
    <div className={styles.modal} style={{ display }}>
      <span className={styles.close} onClick={closeHandler}>
        x
      </span>
      <form className={styles.modal_content}>
        <div className="container">
          <h1>Skill</h1>
          <div className="container">
            <label>Title</label>
            <input value={data.title} onChange={changeHandler} />

            <label>Position</label>
            <input value={data.position} onChange={changeHandler} />

            <div className="card">
              <div className="contaienr card-body">SubSkills</div>
              {data["SubSkill"].map((item) => {
                return (
                  <div key={item.id}>
                    <label>title</label>
                    <input value={item.title} onChange={changeHandler} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalEditor;
