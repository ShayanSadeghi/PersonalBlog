import axios from "axios";
import { useState, useEffect } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ModalEditor from "./PersonalModal";

function PersonalDataManager({ token, data }) {
  const [personalData, setPersonalData] = useState(data);
  const [modalDisplay, setModalDisplay] = useState("none");
  const [modalPersonalData, setModalPersonalData] = useState({
    id: "",
    position: "",
    year: "",
    header: "",
    body: "",
  });

  useEffect(() => {
    setPersonalData(data);
  }, [data]);

  const rowClickHandler = (id) => {
    setModalDisplay("block");
    personalData.forEach((item) => {
      if (item.id == id) {
        setModalPersonalData(item);
      }
    });
  };

  const newPersonalDataBtnHandler = () => {
    setModalDisplay("block");
    // if the length is equal to zero, max returns -infinity so I should check the length of the array
    const newPosition = personalData.length
      ? Math.max(
          ...personalData.map((item) => {
            return item.position;
          })
        ) + 1
      : 1;

    setModalPersonalData({
      id: "",
      position: newPosition,
      year: "",
      header: "",
      body: "",
    });
  };
  const modalCloseHandler = () => {
    setModalDisplay("none");
  };

  const removeHandler = (id) => {
    axios
      .delete(`/api/personal/?id=${id}`, {
        headers: { Authorization: token },
      })
      .then(() => {
        setPersonalData(
          personalData.filter((item) => {
            if (item.id !== id) {
              return item;
            }
          })
        );
      });
  };

  const changeHandler = (e) => {
    setModalPersonalData({
      ...modalPersonalData,
      [e.target.name]: e.target.value,
    });
  };

  const modalSubmitBtnHandler = (e) => {
    e.preventDefault();
    if (!modalPersonalData["id"]) {
      axios
        .post("/api/personal", modalPersonalData, {
          headers: { Authorization: token },
        })
        .then((data) => {
          let newData = JSON.stringify(personalData);
          newData = JSON.parse(newData);
          newData.push({ ...data.data });
          setPersonalData(newData);
          setModalDisplay("none");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .put("/api/personal", modalPersonalData, {
          headers: { Authorization: token },
        })
        .then(() => {
          const newData = data.map((item) => {
            if (item.id == modalPersonalData.id) {
              return modalPersonalData;
            }
            return item;
          });
          setPersonalData(newData);
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
        onClick={newPersonalDataBtnHandler}
      >
        Add New
      </button>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">order</th>
            <th scope="col">year</th>
            <th scope="col">header</th>
            <th scope="col">body</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {personalData.map((item) => (
            <tr key={item.id}>
              <th scope="row" onClick={() => rowClickHandler(item.id)}>
                {item.id}
              </th>
              <td onClick={() => rowClickHandler(item.id)}>{item.position}</td>
              <td onClick={() => rowClickHandler(item.id)}>{item.year}</td>
              <td onClick={() => rowClickHandler(item.id)}>{item.header}</td>
              <td onClick={() => rowClickHandler(item.id)}>{item.body}</td>
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
        data={modalPersonalData}
        display={modalDisplay}
        closeHandler={modalCloseHandler}
        changeHandler={changeHandler}
        submitBtnHandler={modalSubmitBtnHandler}
      />
    </div>
  );
}

export default PersonalDataManager;
