import styles from "../../styles/Skills.module.css";

function About_Skills({ data }) {
  return (
    <div>
      <h2 className="mb-5">Skills</h2>
      <div className="row">
        {data.map((skill) => {
          return (
            <div
              key={skill.title}
              className={[
                "col-sm-12 col-md-6 col-lg-3",
                styles.container,
                styles[`container_${skill.title}`],
              ].join(" ")}
            >
              <div className={styles.initial_block}>
                <div className="h-100 align-items-center d-flex">
                  <h4 className="text-center w-100">{skill.title}</h4>
                </div>
                <div
                  className={[
                    styles.overlay,
                    styles[`overlay_${skill.title}`],
                    "align-items-center",
                  ].join(" ")}
                >
                  {skill.items.map((item) => (
                    <div key={item.name} className="p-1">
                      <h6 className={styles.text}>{item.name}</h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About_Skills;
