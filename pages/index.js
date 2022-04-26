import Head from "next/head";
import Landing_About from "../components/Landing_About";
import Landing_Blog from "../components/Landing_Blog";
import Landing_Github from "../components/Landing_Github";

export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>Next Blog</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <h1 className="mb-5 py-3">Welcome</h1>
      <Landing_Blog last_posts={props.last_posts} />
      <Landing_About />
      <Landing_Github pins={props.pins} />
    </div>
  );
}

export async function getStaticProps() {
  const gh = [
    { id: "1", title: "Tick8" },
    { id: "2", title: "NoteApp" },
    { id: "3", title: "xepersian_quickstart" },
  ];
  const last_posts = await fetch(
    "http://localhost:8000/wp-json/wp/v2/posts?_fields=id,title,date"
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return [];
    });

  return {
    props: {
      pins: gh,
      last_posts,
    },
  };
}
