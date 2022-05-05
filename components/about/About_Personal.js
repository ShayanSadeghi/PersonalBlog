function About_Personal() {
  return (
    <div
      className="card col-md-3 col-sm-12 overflow-scroll"
      style={{ maxHeight: 300 }}
    >
      <h6 className="card-title pt-1 ps-1">Personal Data</h6>
      <div className="card-body">
        <p className="card-text">My name is Shayan</p>
        <p className="card-text">I'm living in Mashhad, Iran</p>
        <p className="card-text">
          I'm starting programming with C++ and VB when I was 16 or 17. Those
          years I just learn the concepts. After a while and try different
          fields like 3D modelling and animating (using 3ds-Max), I get back to
          the programming agin. This time I was programmer in a team made of
          universities friends and wrote code to make a CMMS program using
          MS.Access as a database and VBA. Those years I got familiar with SQL,
          and learned how to make a connection between logic and GUI in an
          application.
          <br />
          After that I dive in Web programming. HTML, CSS, Javascript, nodeJs,
          expressJs, ReactJS, React-Native was my way. I also work with
          databases such as MongoDb, Mysql, SqLite. Although I was able to use
          these database drivers and write direct commands, but I'd prefer to
          use ORMs most of the time.
          <br />I was getting familiar with Data-Mining because one of my
          university courses. I learned Python for that and now I'm able to
          create supervised and unsupervised models to gain knowledge from data.
        </p>
      </div>
    </div>
  );
}

export default About_Personal;
