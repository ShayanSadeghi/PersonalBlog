import Link from "next/link";

function Landing_Blog({ last_posts }) {
  return (
    <div className="col card mx-3">
      <Link href="/posts" passHref className="card-title">
        <a>
          <h3>Last Posts</h3>
        </a>
      </Link>
      <div className="card-body">
        {last_posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`} passHref>
            <div className="my-5">
              <p className="lead text-decoration-underline">
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
