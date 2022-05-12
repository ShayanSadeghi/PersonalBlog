import { useState, useEffect } from "react";
import axios from "axios";

import Head from "next/head";
import { useRouter } from "next/router";
import About_Personal from "../../components/about/About_Personal";
import About_Skills from "../../components/about/About_Skills";

function about({ skill_data }) {
  const router = useRouter();
  const [personalData, setPersonalData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/personal")
      .then((res) => {
        setPersonalData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container">
        <Head>
          <title>About</title>
        </Head>
        <h1 className="mb-5">About</h1>

        <About_Personal data={personalData} />

        <About_Skills data={skill_data} />
      </div>
      <div className="">
        <button
          onClick={() => router.push("/contact")}
          className="btn btn-lg btn-primary"
          style={{ position: "fixed", bottom: 50, right: 50 }}
        >
          Contact me
        </button>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const skill_data = [
    {
      title: "python",
      items: [
        { name: "numpy" },
        { name: "pandas" },
        { name: "matplotlib" },
        { name: "sci-kit learn" },
        { name: "Tensorflow" },
        { name: "keras" },
        { name: "Selenium" },
      ],
    },
    {
      title: "javascript",
      items: [
        { name: "node-js" },
        { name: "express" },
        { name: "ReactJs" },
        { name: "Redux" },
        { name: "React-Native" },
        { name: "NextJs" },
        { name: "GraphQL" },
      ],
    },
    {
      title: "database",
      items: [
        { name: "MongoDb" },
        { name: "Mysql" },
        { name: "Sqlite" },
        { name: "PostgreSQL" },
        { name: "Redis" },
      ],
    },
    {
      title: "other",
      items: [
        { name: "git" },
        { name: "Agile" },
        { name: "linux" },
        { name: "docker" },
      ],
    },
  ];

  return {
    props: { skill_data },
  };
}

export default about;
