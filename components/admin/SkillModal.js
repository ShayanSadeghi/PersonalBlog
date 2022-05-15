import styles from "../../styles/ModalEditor.module.css";

function ModalEditor({ data, display, closeHandler }) {
  const changeHandler = (e) => {
    console.log("form changed");
  };
  const newBtnHandler = (e) => {
    console.log("add button pressed");
  };

  const submitBtnHandler = (e) => {
    e.preventDefault();
    console.log("submited");
  };
  return (
    <div className={[styles.modal, "py-4"].join(" ")} style={{ display }}>
      <span className={styles.close} onClick={closeHandler}>
        x
      </span>
      <form className={styles.modal_content} onSubmit={submitBtnHandler}>
        <div className="container justify-content-between">
          <h1>Skill</h1>
          <div className="row mb-3">
            <div className="col-md-2">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                onChange={changeHandler}
                value={data.title}
                className="form-control"
              />
            </div>
            <div className="col-md-2">
              <label htmlFor="position">Position</label>
              <input
                id="position"
                name="position"
                onChange={changeHandler}
                value={data.position}
                className="form-control"
              />
            </div>
          </div>
          <div className="border px-4">
            <label>Sub-Skills</label>
            <div className="row  pb-2">
              {data["SubSkill"].map((item) => (
                <div
                  key={item.id}
                  className="col-xs-12  col-md-3 col-lg-2 mb-3"
                >
                  <input
                    value={item.title}
                    onChange={changeHandler}
                    className="form-control"
                  />
                </div>
              ))}

              <div className="col-md-2">
                <button
                  type="button"
                  onClick={newBtnHandler}
                  className="btn btn-outline-secondary form-control "
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-2 mt-3">
            <button
              type="submit"
              className="btn form-control btn-outline-primary mb-2"
            >
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalEditor;
