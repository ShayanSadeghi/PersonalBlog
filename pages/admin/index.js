import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import jwt from "jsonwebtoken";

function Dashboard({ secret }) {
  const router = useRouter();
  let token;
  const [dashboardContent, setDashboardContent] = useState(
    <div>
      <h1>Loading...</h1>
    </div>
  );

  useEffect(() => {
    token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
    } else {
      jwt.verify(token.split(" ")[1], secret, (err, decoded) => {
        if (err) {
          router.push("/admin/login");
          console.log(err);
        }
      });
    }
  });

  useEffect(() => {
    let messages = [];
    axios
      .get("/api/message", {
        headers: { Authorization: token },
      })
      .then((res) => {
        messages = res.data;

        setDashboardContent(
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
                </tr>
              ))}
            </tbody>
          </table>
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <div className="container">
      <h1 className="mb-5">Admin Dashboard</h1>
      <div>{dashboardContent}</div>
    </div>
  );
}

export async function getStaticProps() {
  const secret = process.env.JWT_SECRET;

  return { props: { secret } };
}

export default Dashboard;
