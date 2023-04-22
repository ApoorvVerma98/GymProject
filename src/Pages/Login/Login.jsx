import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import style from "./Login.module.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [gymData, setGymData] = useState([]);

  const getRegister = (e) => {
    const { value, name } = e.target;
    setInputValue(() => {
      return {
        ...inputValue,
        [name]: value,
      };
    });
  };
  const handleSubmitData = (e) => {
    e.preventDefault();

    const getUserArr = localStorage.getItem("gymUsers");
    console.log(getUserArr);

    const { email, password } = inputValue;
    if (email == "") {
      alert("E-mail field is required");
    } else if (!email.includes("@")) {
      alert("Please enter valid email address");
    } else if (password == "") {
      alert("Password field is required");
    } else if (password.length < 5) {
      alert("Password size must be greater than Five");
    } else {
      if (getUserArr && getUserArr.length) {
        const userArr = JSON.parse(getUserArr);
        const user = userArr.find(
          (item) => item.email === email && item.password === password
        );
        if (user) {
          alert("Login Successfull");
        } else {
          alert("Login Failed");
        }
      } else {
        alert("Login Failed");
      }

      localStorage.setItem(
        "gymUsers",
        JSON.stringify([...gymData, inputValue])
      );
    }
  };

  return (
    <div className={style.container}>
      <h1>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="email"
            onChange={getRegister}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="password"
            onChange={getRegister}
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmitData}>
          Login
        </Button>
        <p className={style.para}>
          Don't have an account? <NavLink to="/Register">Register</NavLink>
        </p>
      </Form>
    </div>
  );
};

export default Login;
