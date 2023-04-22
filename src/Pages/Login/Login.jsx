import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import style from "./Login.module.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [gymData, setGymData] = useState(() => {
    const storedData = localStorage.getItem("gymUsers");
    return storedData ? JSON.parse(storedData) : [];
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmitData = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email) {
      alert("E-mail field is required");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    if (!password) {
      alert("Password field is required");
      return;
    }

    if (password.length < 5) {
      alert("Password must be at least 5 characters long");
      return;
    }

    const existingUser = gymData.find((user) => user.email === email && user.password === password);

    if (existingUser) {
      alert("Login successful");
    } else {
      alert("Login failed");
    }

    const userExists = gymData.find((user) => user.email === email);

    if (!userExists) {
      const newUser = {
        email,
        password,
      };

      const updatedData = [...gymData, newUser];
      localStorage.setItem("gymUsers", JSON.stringify(updatedData));
      setGymData(updatedData);
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
            onChange={handleInputChange}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="password"
            onChange={handleInputChange}
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
