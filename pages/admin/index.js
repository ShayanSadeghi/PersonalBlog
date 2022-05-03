import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";

function Dashboard({ secret }) {
  const router = useRouter();
  const [dashboardContent, setDashboardContent] = useState(
    <div>
      <h1>Loading...</h1>
    </div>
  );

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/admin/login");
    } else {
      jwt.verify(token.split(" ")[1], secret, (err, decoded) => {
        if (err) {
          router.push("/admin/login");
          console.log(err);
        } else {
          setDashboardContent(
            <div>
              <h1>Admin Dashboard</h1>
            </div>
          );
        }
      });
    }
  });

  return <>{dashboardContent}</>;
}

export async function getStaticProps() {
  const secret = process.env.JWT_SECRET;

  return { props: { secret } };
}

export default Dashboard;
