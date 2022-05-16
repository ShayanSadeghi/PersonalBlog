import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { checkToken } from "../../helpers/token-validation";
import MessageManager from "../../components/admin/MessageManager";
import PersonalDataManager from "../../components/admin/PersonalDataManager";
import SkillManager from "../../components/admin/SkillManager";
import ProjectManager from "../../components/admin/ProjectManager";

function Dashboard({ secret }) {
  const router = useRouter();
  const [token, setToken] = useState();
  const [isAuthorized, setAuthorizedStatus] = useState(false);
  const [messages, setMessages] = useState([]);
  const [personalData, setPersonalData] = useState([]);
  const [skillsData, setSkillData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const lsToken = localStorage.getItem("token");
    setAuthorizedStatus(checkToken(lsToken, secret, router));
  });

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (isAuthorized) {
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

      axios
        .get("/api/project")
        .then((res) => {
          setProjectsData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isAuthorized]);

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
            <div className="container text-primary">
              <h3 className="pt-5">Projects</h3>
              <ProjectManager projects={projectsData} token={token} />
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
