import Link from "next/link";

function ContentList({ posts }) {
  return (
    <div>
      <h1>My Posts</h1>
      {posts.map((post) => (
        <div key={post.postId}>
          <Link href={`/posts/${post.postId}`} passHref>
            <h4>{post.title}</h4>
          </Link>
          <section dangerouslySetInnerHTML={{ __html: post.excerpt }}></section>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ContentList;
