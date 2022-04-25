import { useState } from "react";

function Contact() {
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    message: "",
  });

  const changeInputHandler = (e) => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await fetch("/api/message", {
      method: "GET",
      body: JSON.stringify(messageData),
    })
      .then((res) => {
        console.log("done");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-5 text-center">
      <div className="row  justify-content-center">
        <p className="mb-5"> Please feel free to send me any message. </p>
      </div>

      <form onSubmit={submitHandler} className="row g-3 justify-content-center">
        <div className="col-md-7 col-12 form-floating mb-3">
          <input
            id="name"
            name="name"
            type="text"
            onChange={changeInputHandler}
            value={messageData.name}
            className="form-control"
            placeholder="Your name"
          />
          <label htmlFor="name">
            Name<span className="text-danger">*</span>
          </label>
        </div>

        <div className="col-md-7 col-12 form-floating mb-3">
          <input
            id="email"
            type="email"
            name="email"
            onChange={changeInputHandler}
            value={messageData.email}
            className="form-control"
            placeholder="Your Emaill"
          />
          <label htmlFor="email">
            Email<span className="text-danger">*</span>
          </label>
        </div>

        <div className="col-md-7 col-12 form-floating mb-3">
          <input
            id="phone"
            type="text"
            name="phone"
            onChange={changeInputHandler}
            value={messageData.phone}
            className="form-control"
            placeholder="Your phone number"
          />
          <label htmlFor="phone">Phone</label>
        </div>

        <div className="col-md-7 col-12 form-floating mb-3">
          <input
            id="title"
            type="text"
            name="title"
            onChange={changeInputHandler}
            value={messageData.title}
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
            name="message"
            onChange={changeInputHandler}
            value={messageData.message}
            className="form-control"
            placeholder="Message"
            style={{ height: 200 }}
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

export default Contact;
