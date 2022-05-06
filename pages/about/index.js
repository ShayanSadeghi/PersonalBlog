import Head from "next/head";
import { useRouter } from "next/router";
import About_Personal from "../../components/about/About_Personal";
import About_Skills from "../../components/about/About_Skills";

function about({ Personal_data, skill_data }) {
  const router = useRouter();

  return (
    <>
      <div className="container">
        <Head>
          <title>About</title>
        </Head>
        <h1 className="mb-5">About</h1>

        <About_Personal data={Personal_data} />

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
  const Personal_data = [
    {
      year: "2017",
      header: "First GUI and DATABASE EXPERIENCE.",
      body: {
        __html: `
        <div>
          <p>
            Working as a programmer in a team and making a CMMS program, using
            MS.Access and VBA. I learned:
          </p>
          <ul>
            <li>What is a RDBMS and how to use it</li>
            <li>Writing SQL queries</li>
            <li>Creating GUI and bind function to the form components</li>
          </ul>
        </div>
      `,
      },
    },
    {
      year: "2018",
      header: "Web Development",
      body: {
        __html: `<div>
              <p>
              My web development journey started with learning HTML, CSS and
              Javascript. I'm also got familiar with node-js and MongoDb. After
              that I started working with ReactJs and making a NoteApp.
               <br />
              RestAPI and MVC pattern were some other things that I learned.
              </p>
          </div> 
          `,
      },
    },
    {
      year: "2020",
      header: "Data Mining",
      body: {
        __html: `
          <div>
           <p>
              I was getting familiar with Data-Mining because one of my
              university courses. I learned Python for that and now I'm able to
              create supervised and unsupervised models to extract knowledge from data.
           </p>
          </div>
      `,
      },
    },
    {
      year: "NOW",
      header: "Exploring...",
      body: {
        __html: `
          <div>
           <p>There is a lot of exciting things to learn but for now, I'm going to...</p>
            <ul>
              <li>Add Rust-lang in my toolbox.</li>
              <li>Read deeper and learn more things about data-science.</li>
              <li>Dive into the cryptocurrency world and learn Solidity.</li>
            </ul>
          </div>
      `,
      },
    },
  ];

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
    props: { Personal_data, skill_data },
  };
}

export default about;
