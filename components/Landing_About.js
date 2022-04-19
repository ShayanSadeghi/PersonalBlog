import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import astronaut from "/img/Astronaut suit-pana.svg";

function Landing_About() {
  const router = useRouter();

  return (
    <div className="vh-100 row">
      <div>
        <Link href="/about" passHref className="">
          <a>
            <h3>Who am I?</h3>
          </a>
        </Link>
      </div>

      <div className="col">
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

      <div className="col">
        <Link href="https://storyset.com/creativity">
          <a target="_blank">
            <Image src={astronaut} width={500} height={500} alt="Who_AM_I" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Landing_About;
