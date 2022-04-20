import Link from "next/link";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
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
        <Link href="https://twitter.com/010Shayan" passHref>
          <a target="_blank">
            <button className="btn text-light">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </button>
          </a>
        </Link>
        <Link href="https://www.instagram.com/shayan.saadeghi/" passHref>
          <a target="_blank">
            <button className="btn text-light">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </button>
          </a>
        </Link>
      </ul>
    </footer>
  );
}

export default Footer;
