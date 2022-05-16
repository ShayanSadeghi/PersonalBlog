import { useEffect, useState } from "react";
import styles from "../../styles/ModalEditor.module.css";

function ModalEditor({ data, display, closeHandler }) {
  const [skillData, setSkillData] = useState(data);

  useEffect(() => {
    setSkillData(data);
  }, [data]);

  const changeHandler = (e) => {
    setSkillData({ ...skillData, [e.target.name]: e.target.value });
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
                value={skillData["title"]}
                className="form-control"
              />
            </div>
            <div className="col-md-2">
              <label htmlFor="position">Position</label>
              <input
                id="position"
                name="position"
                onChange={changeHandler}
                value={skillData["position"]}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="position">Sub-Skills</label>
              <textarea
                id="subSkills"
                name="subSkills"
                onChange={changeHandler}
                value={skillData["subSkills"]}
                className="form-control"
                style={{ height: 100 }}
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
