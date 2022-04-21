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
          <div className="row">
            <Link href={`/posts/${post.postId}`} passHref>
              <em className="col-xs-12 col-sm-12 col-md-2 text-secondary btn btn-sm btn-outline-dark">
                Read more...
              </em>
            </Link>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PostList;
