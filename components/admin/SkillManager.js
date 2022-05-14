import axios from "axios";
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
    SubSkill: [],
  });

  const rowClickHandler = (id) => {
    setModalDisplay("block");
    data.forEach((skill) => {
      if (skill.id == id) {
        setSkillData(skill);
      }
    });
  };

  const modalCloseHandler = () => {
    setModalDisplay("none");
  };
  return (
    <div>
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
      />
    </div>
  );
}

export default SkillManager;
