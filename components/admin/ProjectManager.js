import axios from "axios";
import { useState, useEffect } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ModalEditor from "./ProjectModal";

function ProjectManager({ token, projects }) {
  const [data, setData] = useState(projects);
  const [modalDisplay, setModalDisplay] = useState("none");
  const [modalData, setModalData] = useState({
    id: "",
    position: "",
    title: "",
    link: "",
    description: "",
  });

  useEffect(() => {
    setData(projects);
  }, [projects]);

  const rowClickHandler = (id) => {
    setModalDisplay("block");
    data.forEach((item) => {
      if (item.id == id) {
        setModalData(item);
      }
    });
  };

  const newDataHandler = () => {
    // if the length is equal to zero, max returns -infinity so I should check the length of the array
    const newPosition = data.length
      ? Math.max(
          ...data.map((item) => {
            return item.position;
          })
        ) + 1
      : 1;

    setModalData({
      id: "",
      position: newPosition,
      title: "",
      link: "",
      description: "",
    });
    setModalDisplay("block");
  };

  const modalCloseHandler = () => {
    setModalDisplay("none");
  };

  const removeHandler = (id) => {
    axios
      .delete(`/api/project/?Id=${id}`, {
        headers: { Authorization: token },
      })
      .then(() => {
        setData(
          data.filter((item) => {
            if (item.id !== id) {
              return item;
            }
          })
        );
      });
  };

  const changeHandler = (e) => {
    setModalData({ ...modalData, [e.target.name]: e.target.value });
  };

  const modalSubmitBtnHandler = (e) => {
    e.preventDefault();
    if (!modalData["id"]) {
      axios
        .post("/api/project", modalData, {
          headers: { Authorization: token },
        })
        .then((data) => {
          let newData = JSON.stringify(projects);
          newData = JSON.parse(newData);
          newData.push({ ...data.data });
          setData(newData);
          setModalDisplay("none");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .put("/api/project", modalData, {
          headers: { Authorization: token },
        })
        .then(() => {
          console.log("updated");
          setModalDisplay("none");
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
        onClick={newDataHandler}
      >
        Add New
      </button>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">position</th>
            <th scope="col">title</th>
            <th scope="col">link</th>
            <th scope="col">description</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th scope="row" onClick={() => rowClickHandler(item.id)}>
                {item.id}
              </th>
              <td onClick={() => rowClickHandler(item.id)}>{item.position}</td>
              <td onClick={() => rowClickHandler(item.id)}>{item.title}</td>
              <td onClick={() => rowClickHandler(item.id)}>{item.link}</td>
              <td onClick={() => rowClickHandler(item.id)}>
                {item.description}
              </td>
              <td>
                <button className="btn" onClick={() => removeHandler(item.id)}>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    size="lg"
                    className="text-danger"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalEditor
        data={modalData}
        display={modalDisplay}
        closeHandler={modalCloseHandler}
        changeHandler={changeHandler}
        submitBtnHandler={modalSubmitBtnHandler}
      />
    </div>
  );
}

export default ProjectManager;
