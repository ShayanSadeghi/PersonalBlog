import Link from "next/link";

function Nav() {
  return (
    <nav>
      <ul className="nav bg-dark fixed-top">
        <li className="nav-link active">
          <Link href="/">
            <a className="nav-link active link-light">Home</a>
          </Link>
        </li>
        <li className="nav-link active">
          <Link href="/about">
            <a className="nav-link active link-light">About </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
