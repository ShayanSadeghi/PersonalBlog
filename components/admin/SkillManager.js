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
    // if the length is equal to zero, max returns -infinity so I should check the length of the array
    const newPosition = skillsData.length
      ? Math.max(
          ...skillsData.map((item) => {
            return item.position;
          })
        ) + 1
      : 1;

    setModalSkillData({
      id: "",
      position: newPosition,
      title: "",
      subSkills: "",
    });
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

  const changeHandler = (e) => {
    setModalSkillData({ ...modalSkillData, [e.target.name]: e.target.value });
  };

  const modalSubmitBtnHandler = (e) => {
    e.preventDefault();
    if (!modalSkillData["id"]) {
      axios
        .post("/api/skill", modalSkillData, {
          headers: { Authorization: token },
        })
        .then((data) => {
          let newSkills = JSON.stringify(skillsData);
          newSkills = JSON.parse(newSkills);
          newSkills.push({ ...data.data });
          setSkillsData(newSkills);
          setModalDisplay("none");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .put("/api/skill", modalSkillData, {
          headers: { Authorization: token },
        })
        .then(() => {
          console.log("updated");
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
        changeHandler={changeHandler}
        submitBtnHandler={modalSubmitBtnHandler}
      />
    </div>
  );
}

export default SkillManager;
