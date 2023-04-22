import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import style from "./Register.module.css";
import Swal from "sweetalert2";

const Register = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [gymData, setGymData] = useState(() => {
    const storedData = localStorage.getItem("gymUsers");
    return storedData ? JSON.parse(storedData) : [];
  });

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

    const { name, email, password, confirmPassword } = inputValue;

    if (name.trim() === "") {
      Swal.fire("Name field is required");
      return;
    } else if (name.trim().length < 3) {
      Swal.fire("Name size must be greater than Three");
      return;
    } else if (/\d/.test(name)) {
      Swal.fire("Name must be a string");
      return;
    }

    
    if (email.trim() === "") {
      Swal.fire("E-mail field is required");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      Swal.fire("Please enter valid email address");
      return;
    }

  
    if (password.trim() === "") {
      Swal.fire("Password field is required");
      return;
    } else if (password.length < 5) {
      Swal.fire("Password size must be greater than Five");
      return;
    } else if (password !== confirmPassword) {
      Swal.fire("Password must be same");
      return;
    }

    const existingUser = gymData.find((user) => user.email === email);
    if (existingUser) {
      Swal.fire("User with this email already exists");
      return;
    }

    const newUser = { name, email, password };
    setGymData([...gymData, newUser]);
    localStorage.setItem("gymUsers", JSON.stringify([...gymData, newUser]));

    Swal.fire("Successfull!", "You clicked the button!", "success");
  };

  return (
    <>
      <div className={style.container}>
        <h1> Register Here </h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmai">
            <Form.Control
              name="name"
              type="name"
              onChange={getRegister}
              placeholder="Enter your name"
              value={inputValue.name} // add value attribute to set input value
              required // add required attribute for form validation
              minLength={3} // add minLength attribute for form validation
              pattern="[A-Za-z]+" // add pattern attribute for form validation
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="email"
              type="email"
              onChange={getRegister}
              placeholder="Enter email"
              value={inputValue.email} // add value attribute to set input value
              required // add required attribute for form validation
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" // add pattern attribute for form validation
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="password"
              type="password"
              onChange={getRegister}
              placeholder="Password"
              value={inputValue.password} // add value attribute to set input value
              required // add required attribute for form validation
              minLength={5} // add minLength attribute for form validation
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="confirmPassword"
              type="password"
              onChange={getRegister}
              placeholder="Confirm Password"
              value={inputValue.confirmPassword} // add value attribute to set input value
              required // add required attribute for form validation
              minLength={5} // add minLength attribute for form validation
              pattern={inputValue.password} // add pattern attribute to ensure the value matches the password input
            />
          </Form.Group>
  
          <Button className={style.Button} onClick={handleSubmitData}>
            Submit
          </Button>
          <p className="mt-3">
            <span style={{ color: "white" }}>Already Have an Account</span>
            <Button
              className={style.redirectButton}
              onClick={() => (window.location.href = "/Login")}
            >
              Login
            </Button>
          </p>
        </Form>
      </div>
    </>
  );
}

export default Register;

  