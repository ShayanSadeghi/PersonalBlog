import Link from "next/link";

function PostList({ posts }) {
  return (
    <div className="container">
      <h1 className="my-5 h1">Posts</h1>
      {posts.map((post) => (
        <div key={post.postId}>
          <Link href={`/posts/${post.postId}`} passHref>
            <h2 className="lead text-primary">{post.title}</h2>
          </Link>

          <div className="container row">
            <section
              className="col-10"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            ></section>
            <small className="text-muted col">{post.date.slice(0, 10)}</small>
          </div>
          <Link href={`/posts/${post.postId}`} passHref>
            <em className="text-secondary btn btn-sm btn-outline-dark">
              Read more...
            </em>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PostList;
