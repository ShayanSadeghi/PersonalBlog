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
          <div>
            {messages.map((message) => (
              <div key={message.id}>
                <h3>{message.title}</h3> <span>{message.date}</span>
                <h5>{message.name}</h5>
                <h6>
                  {message.email} | {message.phone}
                </h6>
                <p>{message.message}</p>
              </div>
            ))}
          </div>
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>{dashboardContent}</div>
    </div>
  );
}

export async function getStaticProps() {
  const secret = process.env.JWT_SECRET;

  return { props: { secret } };
}

export default Dashboard;
