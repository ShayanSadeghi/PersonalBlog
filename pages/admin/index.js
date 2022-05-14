import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import jwt from "jsonwebtoken";

import MessageManager from "../../components/admin/MessageManager";
import PersonalDataManager from "../../components/admin/PersonalDataManager";
import SkillManager from "../../components/admin/SkillManager";

function Dashboard({ secret }) {
  const router = useRouter();
  let token;
  const [isAuthorized, setAuthorizedStatus] = useState(false);
  const [messages, setMessages] = useState([]);
  const [personalData, setPersonalData] = useState([]);
  const [skillsData, setSkillData] = useState([]);

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
      .get("/api/personal")
      .then((res) => {
        setPersonalData(res.data);
      })
      .catch((err) => {
        console.log("Error::", err);
      });
    axios
      .get("/api/skill")
      .then((res) => {
        setSkillData(res.data);
      })
      .catch((err) => {
        console.log(err);
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
              <h3 className="pt-5 text-primary">Messages</h3>
              <MessageManager messages={messages} token={token} />
            </div>
            <div className="container text-primary">
              <h3 className="pt-5">Personal Data</h3>
              <PersonalDataManager data={personalData} token={token} />
            </div>
            <div className="container text-primary">
              <h3 className="pt-5">Skills</h3>
              <SkillManager data={skillsData} token={token} />
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
