import { useRef } from "react";
import styles from "../../styles/Timeline.module.css";

function About_Personal({ data }) {
  const isLeft = useRef(true);

  return (
    <div className={styles.timeline}>
      {data.map((item) => {
        let side = styles.left;

        if (!isLeft.current) {
          side = styles.right;
        }
        isLeft.current = !isLeft.current;
        return (
          <div key={item.year} className={[styles.container, side].join(" ")}>
            <div className={styles.content}>
              <h2>{item.year}</h2>
              <h5>
                <em>{item.header}</em>
              </h5>
              <div dangerouslySetInnerHTML={{ __html: item.body }}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default About_Personal;
