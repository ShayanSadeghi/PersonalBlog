import axios from "axios";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PersonalDataManager({ token, data }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">order</th>
          <th scope="col">year</th>
          <th scope="col">head</th>
          <th scope="col">body</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.position}</td>
            <td>{item.year}</td>
            <td>{item.head}</td>
            <td>{item.body}</td>
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

export default PersonalDataManager;
