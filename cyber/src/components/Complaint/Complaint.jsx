import React, { useState } from "react";
import "./Complaint.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Image from 'react-bootstrap/Image';
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";






function Complaint() {
  const [complaint, setComplaint] = useState({});

  const inputChange = (event) => {
    const { name, value } = event.target;
    setComplaint({ ...complaint, [name]: value });
  };
  console.log(complaint);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:1111/api/admin/addcomplaint',complaint)
    .then((data)=>{
        console.log(data.data);
        navigate('/dis')
    })
    .catch((err) => {
      console.log(err);
      // toast.error(err.response.data.message, {
      //   position: "bottom-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored",
      // });
    });
  };
  const navigate = useNavigate();

  
  return (
    <div>
      <div className="body-c">
      {/* <ToastContainer /> */}

        <div className="bg-c">
          <p className="p-c1">Register Your Complaint</p>
          <input
            type="text"
            className="i-c1"
            placeholder="    Name"
            onChange={inputChange}
            name='Name'
          ></input>
          <input
            type="number"
            className="i-c2"
            placeholder="    Age"
            onChange={inputChange}
            name='Age'
          ></input>
          <input
            type="text"
            className="i-c3"
            placeholder="    Address"
            onChange={inputChange}
            name='Address'
          ></input>
          <input
            type="number"
            className="i-c4"
            placeholder="    Ph_no"
            onChange={inputChange}
            name='Phone_no'
          ></input>
          <input
            type="text"
            className="i-c5"
            placeholder="    Email"
            onChange={inputChange}
            name='Email'
          ></input>
          <textarea
            
            id=""
            cols="40"
            rows="2"
            className="i-c6"
            placeholder="  Discription"
            onChange={inputChange}
            name='Discription'
          ></textarea>
        </div>
        <input
          type="submit"
          value="Register"
          onClick={(event) => handleSubmit(event)}
          className="btn-c"
        ></input>
        <Link to={'/dis'}>
          
           <img src='file.png' className='csf' id="complaint-image" alt="" />
           </Link>
           <div className="complaint-flux">
           <Image src='vector3.png' className="captainamarica"></Image>
           </div>
      </div>
      <div className="container2">
        <p className="div-p">www.sheildcybercrimeportal@gmail.com</p>
      </div>
    </div>
  );
}

export default Complaint;
