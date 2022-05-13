import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

import About_Personal from "../../components/about/About_Personal";
import About_Skills from "../../components/about/About_Skills";

function about({ personal_data, skill_data }) {
  const router = useRouter();

  return (
    <>
      <div className="container">
        <Head>
          <title>About</title>
        </Head>
        <h1 className="mb-5">About</h1>

        <About_Personal data={personal_data} />

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
  let skill_data = [];
  let personal_data = [];
  await axios.get("http://localhost:3000/api/personal").then((res) => {
    personal_data = res.data;
  });

  await axios.get("http://localhost:3000/api/skill").then((res) => {
    skill_data = res.data;
  });

  return {
    props: { personal_data, skill_data },
  };
}

export default about;
