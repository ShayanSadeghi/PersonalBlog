import axios from "axios";
import { useState } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MessageModal from "./MessageModal";

function MessagesManager({ token, messages }) {
  const [modalMessage, setModalMessage] = useState({
    id: "",
    title: "",
    name: "",
    email: "",
    phone: "",
    messages: "",
    createdAt: "",
  });
  const [modalDispaly, setModalDisplay] = useState("none");

  const removeHandler = (id) => {
    axios
      .delete(`/api/message/?messageId=${id.toString()}`, {
        headers: { Authorization: token },
      })
      .then(() => {
        console.log("removed");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rowClickHandler = (id) => {
    setModalDisplay("block");
    messages.forEach((item) => {
      if (item.id == id) {
        setModalMessage(item);
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
            <th scope="col">Title</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Message</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <th scope="row" onClick={() => rowClickHandler(message.id)}>
                {message.id}{" "}
              </th>
              <td onClick={() => rowClickHandler(message.id)}>
                {message.title.slice(0, 30)}
              </td>
              <td onClick={() => rowClickHandler(message.id)}>
                {message.name.slice(0, 30)}
              </td>
              <td onClick={() => rowClickHandler(message.id)}>
                {message.email.slice(0, 30)}
              </td>
              <td onClick={() => rowClickHandler(message.id)}>
                {message.phone.slice(0, 30)}
              </td>
              <td onClick={() => rowClickHandler(message.id)}>
                {message.message.slice(0, 30)}
              </td>
              <td onClick={() => rowClickHandler(message.id)}>
                {message.createdAt.slice(0, 10)}
              </td>
              <td onClick={() => rowClickHandler(message.id)}>
                {message.createdAt.slice(11, 16)}
              </td>
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
      <MessageModal
        data={modalMessage}
        display={modalDispaly}
        closeHandler={modalCloseHandler}
      />
    </div>
  );
}

export default MessagesManager;
