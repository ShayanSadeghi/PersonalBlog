function ContentDetail({ post }) {
  return (
    <div>
      <h2>{post.title.rendered}</h2>
      <article
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      ></article>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await (
    await fetch("http://localhost:8000/wp-json/wp/v2/posts")
  ).json();

  return {
    fallback: false,
    paths: posts.map((post) => `/posts/${post.id}`),
  };
}

export async function getStaticProps(context) {
  // fetch post
  const postId = context.params.postId;
  const post = await (
    await fetch(`http://localhost:8000/wp-json/wp/v2/posts/${postId}`)
  ).json();

  return {
    props: {
      post,
    },
  };
}

export default ContentDetail;
