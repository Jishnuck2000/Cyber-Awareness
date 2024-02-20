import React, { useState } from "react";
import "./Login.css";
import Image from "react-bootstrap/Image";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from 'sweetalert';


function Login() {
  const [login, setLogin] = useState({});
  const [eye, seteye] = useState(false);
  const inputChange = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };
  const showPass = () => {
    seteye((prev) => !prev);
  };
  console.log(login);
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://cyber-care.onrender.com/api/login/", login)
      // .post("http://localhost:1111/api/login/", login)
      .then((data) => {
        localStorage.setItem("Token", data.data.token);
        localStorage.setItem("Role", data.data.userRole);
        console.log(data);
        swal("Login Successfull!", "You clicked the button!", "success");


        navigate("/hom");
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
      <div className="body">
        <div className="login-body">
        <Image src="team.png" className="team"></Image>
        <Image src="user.png" className="user"></Image>

        <input
          type="text"
          placeholder="     Username"
          name="email_id"
          className="n1"
          onChange={inputChange}
        ></input>
        {eye !== false ? (
          <>
            <Image src="eye.png" className="pass" onClick={showPass}></Image>
          </>
        ) : (
          <>
            {" "}
            <Image src="closedeye.png" className="pass" onClick={showPass}></Image>
          </>
        )}
        <input
          type={eye ? "text" : "password"}
          placeholder="     Password"
          name="password"
          className="n2"
          onChange={inputChange}
        ></input>
        <input type="checkbox" className="box"></input>
        <p className="p11">Remember me</p>
        <p className="p22">Forgot password?</p>
        <input
          type="button"
          value="Login"
          className="btn1"
          onClick={(event) => handleSubmit(event)}
        ></input>
      </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
