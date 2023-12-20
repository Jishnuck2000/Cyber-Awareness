import React, { useState } from "react";
import "./Register.css";
import Image from "react-bootstrap/Image";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [register, setRegister] = useState({});

  const inputChange = (event) => {
    const { name, value } = event.target;
    setRegister({ ...register, [name]: value });
  };
  console.log(register);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:1111/api/register/reg", register)
      .then((data) => {
        console.log(data);

        navigate("/log");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error(err.response.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      });
  };
  const navigate = useNavigate();

  return (
    <div>
      <Nav />
      
      <div className="body-r">
      <ToastContainer />
        <div className="bg">
          <p className="p1">REGISTER</p>
         
          <p className="p2">
            {" "}
            Don't have an account? Create your account,it takes less than a
            minute
          </p>
          <p className="p2"></p>
          <input
            type="text"
            className="i1"
            placeholder="     Username"
            name="username"
            onChange={inputChange}
          ></input>
          <input
            type="text"
            name="email_id"

            className="i2"
            placeholder="     Email Id"
            onChange={inputChange}
          ></input>

          <input
            type="number"
            className="i3"
            name="phone_no"

            placeholder="     Ph_no"
            onChange={inputChange}
          ></input>

          <input
            type="password"
            className="i4"
            name="password"

            placeholder="     Password"
            onChange={inputChange}
          ></input>
        </div>

        <input
          type="button"
          className="btn"
          value="Register"
          onClick={(event) => handleSubmit(event)}
        ></input>
        <p className="p4">Already have an account?</p>
        <Link to={"/log"}>
          <p className="p5">Login</p>
        </Link>
        <p className="p3">Login with social media</p>

        <Image src="facebook.png" className="face"></Image>
        <Image src="google.png" className="go"></Image>
        <Image src="twitter.png" className="tw"></Image>
      </div>
    </div>
  );
}

export default Register;
