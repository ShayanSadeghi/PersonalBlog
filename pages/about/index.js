import Head from "next/head";

function about() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
      </Head>
      <h1 className="mb-5">About</h1>

      <div className="row justify-content-between mb-5 g-5">
        <div
          className="card col-md-3 col-sm-12 overflow-scroll"
          style={{ maxHeight: 300 }}
        >
          <h6 className="card-title pt-1 ps-1">Personal Data</h6>
          <div className="card-body">
            <p className="card-text">Some Info here</p>
          </div>
        </div>

        <div
          className="card col-md-3 col-sm-12 overflow-scroll"
          style={{ maxHeight: 300 }}
        >
          <h6 className="card-title pt-1 ps-1">Educational</h6>
          <div className="card-body">
            <p className="card-text">Some Info here</p>
            <p className="card-text">Some Info here</p>
            <p className="card-text">Some Info here</p>
            <p className="card-text">Some Info here</p>
            <p className="card-text">Some Info here</p>
            <p className="card-text">Some Info here</p>
            <p className="card-text">Some Info here</p>
            <p className="card-text">Some Info here</p>
          </div>
        </div>

        <div
          className="card col-md-3 col-sm-12 overflow-scroll"
          style={{ maxHeight: 300 }}
        >
          <h6 className="card-title pt-1 ps-1">Experience</h6>
          <div className="card-body">
            <p className="card-text">Some Info here</p>
          </div>
        </div>
      </div>

      <div className="row justify-content-between g-5">
        <div
          className="card col-md-3 col-sm-12 overflow-scroll"
          style={{ maxHeight: 300 }}
        >
          <h6 className="card-title pt-1 ps-1">Skills</h6>
          <div className="card-body">
            <p className="card-text">Some Info here</p>
          </div>
        </div>

        <div
          className="card col-md-3 col-sm-12 overflow-scroll"
          style={{ maxHeight: 300 }}
        >
          <h6 className="card-title pt-1 ps-1">Interests</h6>
          <div className="card-body">
            <p className="card-text">Some Info here</p>
          </div>
        </div>

        <div
          className="card col-md-3 col-sm-12 overflow-scroll"
          style={{ maxHeight: 300 }}
        >
          <h6 className="card-title pt-1 ps-1">contact me</h6>
          <div className="card-body">
            <p className="card-text">Some Info here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
