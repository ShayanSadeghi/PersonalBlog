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
          <h1>Project Detail</h1>
          <div className="row mb-3">
            <div className="col-md-2">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                onChange={changeHandler}
                value={data["title"]}
                className="form-control"
              />
            </div>
            <div className="col-md-2">
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
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="link">Link</label>
              <input
                id="link"
                name="link"
                onChange={changeHandler}
                value={data["link"]}
                className="form-control"
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="description">Description</label>
              <input
                id="description"
                name="description"
                onChange={changeHandler}
                value={data["description"]}
                className="form-control"
              />
            </div>
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
