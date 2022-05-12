import axios from "axios";

function PersonalData({ token, data }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">order</th>
          <th scope="col">year</th>
          <th scope="col">head</th>
          <th scope="col">body</th>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PersonalData;
