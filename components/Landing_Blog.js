import Link from "next/link";
import Image from "next/image";
import pen_amico from "/img/Hand holding pen-amico.svg";

function Landing_Blog({ last_posts }) {
  return (
    <div className="vh-100 row">
      <div>
        <Link href="/posts" passHref>
          <a>
            <h3>Last Posts</h3>
          </a>
        </Link>
      </div>

      <div className="col">
        <Link href="https://storyset.com/creativity">
          <a target="_blank">
            <Image src={pen_amico} alt="pen" width={500} height={500} />
          </a>
        </Link>
      </div>

      <div className="col">
        {last_posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`} passHref>
            <div className="mt-3 p-4 rounded-pill alert-secondary">
              <p className="mb-0 lead text-decoration-underline ">
                {post.title.rendered}
              </p>
              <small className="text-muted fw-light">
                {post.date.slice(0, 10)}
              </small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Landing_Blog;
