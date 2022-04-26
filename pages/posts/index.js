import PostList from "../../components/PostList";

function Content(props) {
  return <PostList posts={props.posts} />;
}

export async function getStaticProps() {
  //fetch posts
  const posts = await fetch("http://localhost:8000/wp-json/wp/v2/posts")
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return [];
    });

  return {
    props: {
      posts: posts.map((post) => ({
        postId: post.id,
        date: post.date,
        modified: post.modified,
        title: post.title.rendered,
        status: post.status,
        content: post.content.rendered,
        excerpt: post.excerpt.rendered,
        authorId: post.author,
        tags: post.tags,
      })),
    },
  };
}

export default Content;
