import { useState, useEffect } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ModalEditor from "./SkillModal";
import axios from "axios";

function SkillManager({ token, data }) {
  const [skillsData, setSkillsData] = useState(data);
  const [modalDisplay, setModalDisplay] = useState("none");
  const [modalSkillData, setModalSkillData] = useState({
    id: "",
    position: "",
    title: "",
    subSkills: "",
  });

  useEffect(() => {
    setSkillsData(data);
  }, [data]);

  const rowClickHandler = (id) => {
    setModalDisplay("block");
    skillsData.forEach((skill) => {
      if (skill.id == id) {
        setModalSkillData(skill);
      }
    });
  };
  const newSkillBtnHandler = () => {
    setModalDisplay("block");
    setModalSkillData({ id: "", position: "", title: "", subSkills: "" });
  };
  const modalCloseHandler = () => {
    setModalDisplay("none");
  };

  const removeHandler = (id) => {
    axios
      .delete(`/api/skill/?skillId=${id}`, {
        headers: { Authorization: token },
      })
      .then(() => {
        setSkillsData(
          skillsData.filter((item) => {
            if (item.id !== id) {
              return item;
            }
          })
        );
      });
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
          {skillsData.map((item) => (
            <tr key={item.id}>
              <th scope="row" onClick={() => rowClickHandler(item.id)}>
                {item.id}
              </th>
              <td onClick={() => rowClickHandler(item.id)}>{item.position}</td>
              <td onClick={() => rowClickHandler(item.id)}>{item.title}</td>
              <td>
                <button className="btn" onClick={() => removeHandler(item.id)}>
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
        data={modalSkillData}
        display={modalDisplay}
        closeHandler={modalCloseHandler}
        token={token}
      />
    </div>
  );
}

export default SkillManager;
