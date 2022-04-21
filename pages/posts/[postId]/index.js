import Head from "next/head";
import PostTags from "../../../components/PostTags";

function ContentDetail({ post, tags }) {
  return (
    <div className="container mt-5">
      <Head>
        <title>{post.title.rendered}</title>
        <meta name="keywords" content={tags.join()} />
      </Head>
      <h2 className="mb-5">{post.title.rendered}</h2>
      <article>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
        <hr />
        <PostTags tags={tags} />
      </article>
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

  let tags = await Promise.all(
    post.tags.map((tag) =>
      fetch(`http://localhost:8000/wp-json/wp/v2/tags/${tag}?_fields=name`)
    )
  );
  tags = await Promise.all(tags.map((tag) => tag.json()));
  tags = tags.map((tag) => tag.name);

  return {
    props: {
      post,
      tags,
    },
  };
}

export default ContentDetail;
