import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";

import PostList from "../../components/PostList";

function Content(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (props.posts) {
      setTimeout(() => {
        setIsLoading(false);
      }, 250);
    }
  }, [props]);

  return (
    <div>
      <Spinner isLoading={isLoading} />
      <PostList posts={props.posts} />
    </div>
  );
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
