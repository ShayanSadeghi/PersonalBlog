function About_Skills() {
  return (
    <div
      className="card col-md-3 col-sm-12 overflow-scroll"
      style={{ maxHeight: 300 }}
    >
      <h6 className="card-title pt-1 ps-1">Skills</h6>
      <div className="card-body">
        <div className="card-text">
          <strong>Python</strong>
          <p>numpy, pandas, matplotlib, sci-kit learn, keras, Tensorflow </p>

          <strong>Web-Development</strong>
          <p>
            Javascript, HTML5, CSS3, node-js, express, React, React-native
            <br />
            MySQL, PostgreSQL, SQLite, IBM-DB2, MongoDB, Redis
          </p>

          <strong>Other Skills...</strong>
          <p>Git, Docker, Linux, bash</p>
        </div>
      </div>
    </div>
  );
}

export default About_Skills;
