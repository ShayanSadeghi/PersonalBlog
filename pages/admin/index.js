import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import jwt from "jsonwebtoken";

import Messages from "../../components/admin/Messages";

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
    let msg = [];
    axios
      .get("/api/message", {
        headers: { Authorization: token },
      })
      .then((res) => {
        msg = res.data;
        setDashboardContent(<Messages messages={msg} token={token} />);
      })
      .catch((err) => {
        console.log("Error::", err);
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
