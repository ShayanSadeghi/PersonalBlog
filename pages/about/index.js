import Head from "next/head";
import { useRouter } from "next/router";
import About_Personal from "../../components/about/About_Personal";
import About_Educational from "../../components/about/About_Educational";
import About_Skills from "../../components/about/About_Skills";
import About_Interests from "../../components/about/About_Interests";
import About_Experience from "../../components/about/About_Experience";

function about({ Personal_data }) {
  const router = useRouter();

  return (
    <div className="container">
      <Head>
        <title>About</title>
      </Head>
      <h1 className="mb-5">About</h1>

      <About_Personal data={Personal_data} />
      <div className="row justify-content-between mb-5 g-5">
        <About_Educational />
        <About_Experience />
      </div>

      <div className="row justify-content-between g-5 mb-5">
        <About_Skills />
        <About_Interests />
      </div>
      <div className="row justify-content-center g-5">
        <button
          onClick={() => router.push("/contact")}
          className="btn btn-success"
        >
          Contact me
        </button>
      </div>
    </div>
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
  return {
    props: { Personal_data },
  };
}

export default about;
