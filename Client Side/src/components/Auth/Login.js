import axios from "axios";
import { useState } from "react";

import classes from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3005/api/login", {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log("login done");
      window.location.href = "/";
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.center}>
        <div className={classes.form}>
          <img
            src="https://th.bing.com/th/id/R.8f185ac6c4a78763aa31acf73ee3e46b?rik=X7w93PUB4j3AXg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_568656.png&ehk=YMUL5OvijifwVr2xWFpqoEf4STb07PZwQdnl0ispWMc%3d&risl=&pid=ImgRaw&r=0"
            alt="Avatar icon"
            height="100px"
            width="100px"
            className={classes.image}
          />
          <label for="email" className={classes["input-title"]}>
            Email
          </label>
          <br />
          <input
            type="email"
            className={classes["input-box"]}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label for="pwd" className={classes["input-title"]}>
            Password
          </label>
          <br />
          <input
            type="password"
            className={classes["input-box"]}
            name="pwd"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" className={classes.button}>
            Log In
          </button>
          <a href="signup" className={classes.link}>
            Don't have an account? Sign up here
          </a>
        </div>
      </div>
    </form>
  );
};

export default Login;
