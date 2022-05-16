import styles from "../../styles/Skills.module.css";

function About_Skills({ data }) {
  let counter = 0;
  return (
    <div>
      <h2 className="mb-5">Skills</h2>
      <div className="row">
        {data.map((skill) => {
          let overlay_style = "overlay0";

          if (counter % 2) {
            overlay_style = "overlay1";
          }
          counter += 1;
          return (
            <div
              key={skill.title}
              className={["col-sm-12 col-md-6 col-lg-3", styles.container].join(
                " "
              )}
            >
              <div className={styles.initial_block}>
                <div className="h-100 align-items-center d-flex">
                  <h4 className="text-center w-100">{skill.title}</h4>
                </div>
                <div
                  className={[
                    styles.overlay,
                    styles[overlay_style],
                    "align-items-center",
                  ].join(" ")}
                >
                  {skill.subSkills.split(",").map((item) => (
                    <div key={item.trim()} className="p-1">
                      <h6 className={styles.text}>{item.trim()}</h6>
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
