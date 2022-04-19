import Link from "next/link";
import { useRouter } from "next/router";

function Landing_About() {
  const router = useRouter();

  return (
    <div className="row">
      <div className="col card mx-3">
        <Link href="/about" passHref className="card-title">
          <a>
            <h3>Who am I?</h3>
          </a>
        </Link>
        <div className="card-body">
          <p>
            My name is <strong>Shayan Sadeghi</strong>.
            <br />
            <br />
            I&apos;m a <strong>Data Scientist</strong> and a{" "}
            <strong>web developer</strong>.
            <br />
            <br />
            To read a brief about me or send me a message use the button bellow.
          </p>

          <button
            className="btn btn-primary d-grid"
            onClick={() => router.push("/about")}
          >
            Contact ME
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing_About;
