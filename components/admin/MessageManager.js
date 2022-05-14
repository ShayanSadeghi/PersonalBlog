import axios from "axios";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MessagesManager({ token, messages }) {
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

  return (
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
            <th scope="row">{message.id} </th>
            <td>{message.title}</td>
            <td>{message.name}</td>
            <td>{message.email}</td>
            <td>{message.phone}</td>
            <td>{message.message}</td>
            <td>{message.createdAt.slice(0, 10)}</td>
            <td>{message.createdAt.slice(11, 16)}</td>
            <td>
              <button className="btn" onClick={() => removeHandler(message.id)}>
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
  );
}

export default MessagesManager;
