import { useState } from "react";
import axios from "axios";

function login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const changeInputHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    axios
      .post("/api/login", loginData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginHandler} className="row g-3 justify-content-center">
        <div className="col-md-7 col-12 form-floating mb-3">
          <input
            id="username"
            name="username"
            type="text"
            onChange={changeInputHandler}
            value={loginData.username}
            className="form-control"
            placeholder="Username"
          />
          <label htmlFor="username">
            Username<span className="text-danger">*</span>
          </label>
        </div>

        <div className="col-md-7 col-12 form-floating mb-3">
          <input
            id="password"
            name="password"
            type="password"
            onChange={changeInputHandler}
            value={loginData.password}
            className="form-control"
            placeholder="Password"
          />
          <label htmlFor="password">
            Password<span className="text-danger">*</span>
          </label>
        </div>

        <div className="col-md-7 col-12 mb-3">
          <button
            id="submit"
            type="submit"
            className="py-2 form-control btn btn-success"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default login;
