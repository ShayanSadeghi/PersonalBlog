import { useState } from "react";
import axios from "axios";

import styles from "../../styles/Toast.module.css";

function Contact() {
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState();

  const changeInputHandler = (e) => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post("/api/message", messageData)
      .then((res) => {
        setResponseMessage(
          <div
            className={[
              styles.snackbar,
              styles.snackbarSucess,
              styles.showSnack,
            ].join(" ")}
          >
            Message sent successfully
          </div>
        );

        setTimeout(async () => {
          setResponseMessage();
        }, 3000);
        setMessageData({
          name: "",
          email: "",
          phone: "",
          title: "",
          message: "",
        });
      })
      .catch((err) => {
        setResponseMessage(
          <div
            className={[
              styles.snackbar,
              styles.snackbarError,
              styles.showSnack,
            ].join(" ")}
          >
            Some error happened
          </div>
        );

        setTimeout(async () => {
          setResponseMessage();
        }, 3000);
      });
  };

  return (
    <>
      <div className="container mt-5 text-center">
        <div className="row  justify-content-center">
          <p className="mb-5"> Please feel free to send me any message. </p>
        </div>

        <form
          onSubmit={submitHandler}
          className="row g-3 justify-content-center"
        >
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
              className="py-2 form-control btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {responseMessage}
    </>
  );
}

export default Contact;
