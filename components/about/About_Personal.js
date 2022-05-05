import { useRef } from "react";
import Layout from "../../styles/Timeline.module.css";

function About_Personal({ data }) {
  const isLeft = useRef(true);

  return (
    <div className={Layout.timeline}>
      {data.map((item) => {
        let side = Layout.left;

        if (!isLeft.current) {
          side = Layout.right;
        }
        isLeft.current = !isLeft.current;
        return (
          <div key={item.year} className={[Layout.container, side].join(" ")}>
            <div className={Layout.content}>
              <h2>{item.year}</h2>
              <h5>
                <em>{item.header}</em>
              </h5>
              <div dangerouslySetInnerHTML={item.body}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default About_Personal;
