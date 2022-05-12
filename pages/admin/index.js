import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import jwt from "jsonwebtoken";

import Messages from "../../components/admin/Messages";
import PersonalData from "../../components/admin/PersonalData";

function Dashboard({ secret }) {
  const router = useRouter();
  let token;
  const [isAuthorized, setAuthorizedStatus] = useState(false);
  const [messages, setMessages] = useState([]);
  const [personalData, setPersonalData] = useState([]);

  useEffect(() => {
    token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
      setAuthorizedStatus(false);
    } else {
      jwt.verify(token.split(" ")[1], secret, (err, decoded) => {
        setAuthorizedStatus(true);

        if (err) {
          router.push("/admin/login");
          console.log(err);
        }
      });
    }
  });

  useEffect(() => {
    axios
      .get("/api/message", {
        headers: { Authorization: token },
      })
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        console.log("Error::", err);
      });

    axios
      .get("/api/personal", { headers: { Authorization: token } })
      .then((res) => {
        setPersonalData(res.data);
      })
      .catch((err) => {
        console.log("Error::", err);
      });
  }, [token]);

  return (
    <div className="container">
      <h1 className="mb-5">Admin Dashboard</h1>
      <div>
        {!isAuthorized ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <div>
            <div className="container">
              <Messages messages={messages} token={token} />
            </div>
            <div className="container">
              <PersonalData data={personalData} token={token} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const secret = process.env.JWT_SECRET;

  return { props: { secret } };
}

export default Dashboard;
