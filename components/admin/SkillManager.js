import { useState } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ModalEditor from "./SkillModal";

function SkillManager({ token, data }) {
  const [modalDisplay, setModalDisplay] = useState("none");

  const [skillData, setSkillData] = useState({
    id: "",
    position: "",
    title: "",
    subSkills: "",
  });

  const rowClickHandler = (id) => {
    setModalDisplay("block");
    data.forEach((skill) => {
      if (skill.id == id) {
        setSkillData(skill);
      }
    });
  };
  const newSkillBtnHandler = () => {
    setModalDisplay("block");
    setSkillData({ id: "", position: "", title: "", subSkills: "" });
  };
  const modalCloseHandler = () => {
    setModalDisplay("none");
  };
  return (
    <div>
      <button
        className="btn btn-primary my-2"
        type="button"
        onClick={newSkillBtnHandler}
      >
        Add New
      </button>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">position</th>
            <th scope="col">title</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} onClick={() => rowClickHandler(item.id)}>
              <th scope="row">{item.id}</th>
              <td>{item.position}</td>
              <td>{item.title}</td>
              <td>
                <button
                  className="btn"
                  onClick={() => removeHandler(message.id)}
                >
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    size="lg"
                    className=" text-danger"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalEditor
        data={skillData}
        display={modalDisplay}
        closeHandler={modalCloseHandler}
        token={token}
      />
    </div>
  );
}

export default SkillManager;
