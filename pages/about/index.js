import Head from "next/head";
import { useRouter } from "next/router";
import About_Personal from "../../components/about/About_Personal";
import About_Educational from "../../components/about/About_Educational";
import About_Skills from "../../components/about/About_Skills";
import About_Interests from "../../components/about/About_Interests";
import About_Experience from "../../components/about/About_Experience";

function about() {
  const router = useRouter();

  return (
    <div className="container">
      <Head>
        <title>About</title>
      </Head>
      <h1 className="mb-5">About</h1>

      <div className="row justify-content-between mb-5 g-5">
        <About_Personal />
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

export default about;
