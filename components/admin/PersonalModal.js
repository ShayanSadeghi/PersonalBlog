import styles from "../../styles/ModalEditor.module.css";

function ModalEditor({
  data,
  display,
  closeHandler,
  submitBtnHandler,
  changeHandler,
}) {
  return (
    <div className={[styles.modal, "py-4"].join(" ")} style={{ display }}>
      <span className={styles.close} onClick={closeHandler}>
        x
      </span>
      <form className={styles.modal_content} onSubmit={submitBtnHandler}>
        <div className="container justify-content-between">
          <h1>Personal Data</h1>
          <div className="row">
            <div className="col-md-2 mb-3">
              <label htmlFor="title">Year</label>
              <input
                id="year"
                name="year"
                type="text"
                onChange={changeHandler}
                value={data["year"]}
                className="form-control"
              />
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="position">Position</label>
              <input
                id="position"
                name="position"
                type="number"
                onChange={changeHandler}
                value={data["position"]}
                className="form-control"
              />
            </div>
          </div>

          <div className="col-md-7 mb-3">
            <label htmlFor="title">Header</label>
            <input
              id="header"
              name="header"
              type="text"
              onChange={changeHandler}
              value={data["header"]}
              className="form-control"
            />
          </div>

          <div className="col-md-7 mb-3">
            <label htmlFor="position">Body</label>
            <textarea
              id="body"
              name="body"
              onChange={changeHandler}
              value={data["body"]}
              className="form-control"
              style={{ height: 500 }}
            />
          </div>

          <div className="col-md-2 mt-3">
            <button
              type="submit"
              className="btn form-control btn-outline-primary mb-2"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalEditor;
