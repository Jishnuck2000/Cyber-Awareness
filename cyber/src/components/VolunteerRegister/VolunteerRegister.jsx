import React, { useState } from "react";
import "./VolunteerRegister.css";
import Nav from "../Nav/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VolunteerRegister() {
  // const token = localStorage.getItem("Token");
  const [volunteerregister, setVolunteer] = useState({});

  const inputChange = (event) => {
    const { name, value }   = event.target;
    setVolunteer({ ...volunteerregister, [name]: value });
  };
  const handleImage=(event)=>{
    const {name}=event.target
    setVolunteer({...volunteerregister,[name]:event.target.files[0]})
  }

  console.log(volunteerregister);
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("Image", volunteerregister.Image);
    formData.append("Name", volunteerregister.Name);
    formData.append("Age", volunteerregister.Age);
    formData.append("Address", volunteerregister.Address);
    formData.append("Phone_no", volunteerregister.Phone_no);
    formData.append("Qualification", volunteerregister.Qualification);
    formData.append("email_id",volunteerregister.email_id);
    formData.append("password",volunteerregister.password);

    axios
      .post("http://localhost:1111/api/register/volunteerregister", formData
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      )
      .then((data) => {
        console.log(data.data);

        navigate("/vvol");
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
      <div className="body-vr">
        <ToastContainer />
        <div className="bg-vr">
          <p className="p-vr">Volunteer Registration Form</p>

          <div className="file-vr">
            <div className="image-vr">
              <input type="file" id="file-upload" name="Image" onChange={handleImage}hidden />
              <label htmlFor="file-upload">
                <img src="upload.png" alt="" id="pro" />
              </label>
            </div>
                      
          </div>
          <form action="" onSubmit={handleSubmit} encType="multipart/formdata">
            {" "}
            <input
              type="text"
              name="Name"
              placeholder="    Name"
              className="i-vr"
              onChange={inputChange}
            ></input>
            <input
              type="number"
              name="Age"
              placeholder="    Age"
              className="i-vr1"
              onChange={inputChange}
            ></input>
            <input
              type="text"
              name="Address"
              placeholder="    Address"
              className="i-vr2"
              onChange={inputChange}
            ></input>
            <input
              type="text"
              name="Qualification"
              placeholder="    Qualification"
              className="i-vr3"
              onChange={inputChange}
            ></input>
            <input
              type="number"
              name="Phone_no"
              placeholder="    Phone_no"
              className="i-vr4"
              onChange={inputChange}
            ></input>
            <input
              type="text"
              name="email_id"
              placeholder="    Email"
              className="i-vr5"
              onChange={inputChange}
            ></input>
            <input
              type="password"
              name="password"
              placeholder="    Password"
              className="i-vr6"
              onChange={inputChange}
            ></input>
            <div>
              <input
                type="submit"
                value="Register"
                className="btn-vr"
                // onClick={(event) => handleSubmit(event)}
              ></input>
              <input type="button" value="Login" className="btn-vr1"></input>
            </div>
          </form>

          <p className="p-vr2">If account is already exist's please login. </p>
        </div>
      </div>
      <div className="container2">
        <p className="div-p">www.sheildcybercrimeportal@gmail.com</p>
      </div>
    </div>
  );
}

export default VolunteerRegister;
