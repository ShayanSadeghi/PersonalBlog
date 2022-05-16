import styles from "../../styles/ModalEditor.module.css";

function ModalEditor({ data, display, closeHandler }) {
  return (
    <div className={[styles.modal, "py-4"].join(" ")} style={{ display }}>
      <span className={styles.close} onClick={closeHandler}>
        x
      </span>
      <form className={[styles.modal_content, "pb-1"].join(" ")}>
        <div className="container justify-content-between">
          <h1>Message Detail</h1>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                disabled
                value={data["title"]}
                className="form-control"
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="position">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                disabled
                value={data["name"]}
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="title">Email</label>
              <input
                id="email"
                name="email"
                type="text"
                disabled
                value={data["email"]}
                className="form-control"
              />
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="title">Phone</label>
              <input
                id="phone"
                name="phone"
                type="text"
                disabled
                value={data["phone"]}
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 mb-3">
              <label htmlFor="position">Message</label>
              <textarea
                id="message"
                name="message"
                disabled
                value={data["message"]}
                className="form-control"
                style={{ height: 200 }}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalEditor;
