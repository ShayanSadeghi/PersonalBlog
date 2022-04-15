import Link from "next/link";

function ContentList({ posts }) {
  return (
    <div>
      <h1>My Posts</h1>
      {posts.map((post) => (
        <div key={post.postId}>
          <h2>{post.title}</h2>
          <section dangerouslySetInnerHTML={{ __html: post.excerpt }}></section>
          <Link href={`/posts/${post.postId}`} passHref>
            <small>Read more...</small>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ContentList;
