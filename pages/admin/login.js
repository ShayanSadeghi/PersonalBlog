import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import axios from "axios";

function login({ secret }) {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      jwt.verify(token.split(" ")[1], secret, (err, decoded) => {
        if (!err) {
          router.push("/admin");
        }
      });
    }
  });

  const changeInputHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    axios
      .post("/api/login", loginData)
      .then((res) => {
        console.log("login...");
        if (res.data.data.token) {
          localStorage.setItem("token", `Bearer ${res.data.data.token}`);
          router.push("/admin");
        }
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

export async function getStaticProps() {
  const secret = process.env.JWT_SECRET;

  return { props: { secret } };
}

export default login;
