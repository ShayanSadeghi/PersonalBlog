import Link from "next/link";

function Landing_Github({ pins }) {
  return (
    <div className="col card mx-3 ">
      <Link
        className="card-title"
        href="https://github.com/ShayanSadeghi"
        passHref
      >
        <a target="_blank">
          <h3>Github</h3>
        </a>
      </Link>
      {pins.map((pin) => (
        <div key={pin.id} className="card my-4 p-2">
          <p className="lead">{pin.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Landing_Github;
