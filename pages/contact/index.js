function index() {
  return (
    <div className="container mt-5 text-center">
      <div className="row  justify-content-center">
        <p className="mb-5"> Please feel free to send me any message. </p>
      </div>

      <form className="row g-3 justify-content-center">
        <div className="col-md-7 col-12 form-floating mb-3">
          <input
            id="name"
            type="text"
            className="form-control"
            placeholder="Your name"
            required
          />
          <label htmlFor="name">
            Name<span className="text-danger">*</span>
          </label>
        </div>

        <div className="col-md-7 col-12 form-floating mb-3">
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="Your Emaill"
            required
          />
          <label htmlFor="email">
            Email<span className="text-danger">*</span>
          </label>
        </div>

        <div className="col-md-7 col-12 form-floating mb-3">
          <input
            id="phone"
            type="text"
            className="form-control"
            placeholder="Your phone number"
          />
          <label htmlFor="phone">Phone</label>
        </div>

        <div className="col-md-7 col-12 form-floating mb-3">
          <input
            id="title"
            type="text"
            className="form-control"
            placeholder="Title"
          />
          <label htmlFor="title">
            Title<span className="text-danger">*</span>
          </label>
        </div>

        <div className="col-md-7 col-12 form-floating mb-3">
          <textarea
            id="message"
            type="text"
            className="form-control"
            placeholder="Message"
            style={{ height: 200 }}
            required
          ></textarea>
          <label htmlFor="message">
            Message<span className="text-danger">*</span>
          </label>
        </div>

        <div className="col-md-7 col-12 mb-3">
          <button
            id="submit"
            type="submit"
            className="py-2 form-control btn btn-success"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default index;
