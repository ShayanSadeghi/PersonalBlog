import Link from "next/link";
import Image from "next/image";

import hand_coding from "/img/Hand coding-bro.svg";

function Landing_Github({ pins }) {
  return (
    <div className="vh-100 row">
      <Link className="" href="https://github.com/ShayanSadeghi" passHref>
        <a target="_blank">
          <h3>Github</h3>
        </a>
      </Link>

      <div className="col">
        <Link href="https://storyset.com/creativity">
          <a target="_blank">
            <Image src={hand_coding} width={500} height={500} alt="Coding" />
          </a>
        </Link>
      </div>

      <div className="col">
        {pins.map((pin) => (
          <div key={pin.id} className="">
            <Link href="https://github.com/ShayanSadeghi" passHref>
              <a target="_blank" className="alert-primary">
                <p className="lead">{pin.title}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing_Github;
