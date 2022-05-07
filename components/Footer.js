import Link from "next/link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <footer className="bg-dark  ">
      <ul className="nav justify-content-center">
        <Link href="https://github.com/ShayanSadeghi" passHref>
          <a target="_blank">
            <button className="btn text-light">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </button>
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/shayan-sadeghi" passHref>
          <a target="_blank">
            <button className="btn text-light">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </button>
          </a>
        </Link>
      </ul>
    </footer>
  );
}

export default Footer;
