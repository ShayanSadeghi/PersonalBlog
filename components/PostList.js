import Link from "next/link";

function ContentList({ posts }) {
  return (
    <div>
      <h1>My Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.postId}>
            <Link href={`/posts/${post.postId}`} passHref>
              <h4>{post.title}</h4>
            </Link>
            <section
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></section>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContentList;
