import React, { useEffect, useState } from "react";
import "./Profileaddress.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Sessiondetail from "../sessiondetails/Sessiondetail";

function Profileaddress() {
  const navigate = useNavigate();

  const [proaddress, setProaddress] = useState([]);
  const [proviewaddress, setProviewaddress] = useState([]);
  const [procheckedaddress, setProcheckedaddress] = useState([]);

  const token = localStorage.getItem("Token");
  // console.log("Token:", token);

  const inputChange = (event) => {
    const { name, value } = event.target;
    setProaddress({ ...proaddress, [name]: value });
  };

  const handleDelete = (_id) => {
    axios
      .delete(`https://cyber-care.onrender.com/api/user/deleteprofileaddress/${_id}`, {
      // .delete(`http://localhost:1111/api/user/deleteprofileaddress/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        console.log(response);
      });
    window.location.reload();
  };

  const handleUpdate = (_id) => {
    console.log(_id);

    axios
      .get("https://cyber-care.onrender.com/api/user/viewprofileaddress", {
      // .get("http://localhost:1111/api/user/viewprofileaddress", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://cyber-care.onrender.com/api/user/addprofileaddress", proaddress, {
      // .post("http://localhost:1111/api/user/addprofileaddress", proaddress, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((data) => {
        console.log(data.data.data);
        navigate("/Profileaddresslist");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("https://cyber-care.onrender.com/api/user/viewcheckedaddress", {
      // .get("http://localhost:1111/api/user/viewcheckedaddress", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        console.log("responsefromapi!!!!", response.data.data);
        setProcheckedaddress(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(procheckedaddress._id);

  // console.log(procheckedaddress);
  return (
    <div>
      <div className="pa-bg">
        <div className="pa-bg1">
          {procheckedaddress != null ? (
            <>
              <div className="pa-bg4">
                <img src="mappa.png" className="pa-map"></img>
                <div className="map-p1">Address</div>
                <div className="pa-p11">
                  {procheckedaddress.house_name}[house],
                  {procheckedaddress.street_address}[p.o],
                  {procheckedaddress.district},{procheckedaddress.state}
                </div>
              </div>
              <div className="pa-bg5">
                <img src="phone-callpa.png" className="pa-map"></img>
                <div className="phone-p1">Phone_no</div>
                <div className="pa-p22">{procheckedaddress.phone_no}</div>
              </div>
              <div className="pa-bg6">
                <img src="gmail.png" className="pa-map"></img>
                <div className="phone-p1">Email</div>
                <div className="pa-p33">{procheckedaddress.email}</div>
              </div>

              <div>
                <Link to={`/editprofileaddress/${procheckedaddress._id}`}>
                  <img
                    src="pen-pa.png"
                    className="pa-edit"
                    onClick={() => handleUpdate(procheckedaddress._id)}
                  ></img>
                </Link>
                <img
                  src="delete-pa.png"
                  className="pa-delete"
                  onClick={() => handleDelete(procheckedaddress._id)}
                ></img>
                <Link to={"/profileaddresslist"}>
                  <img src="check-pa.png" className="pa-check"></img>
                </Link>
              </div>
            </>
          ) : (
            <><div className="profile-vector">No Address Found !!!</div></>
          )}
        </div>
        <div className="pa-bg2">
          <div className="pa-bg3">
            <div className="pa-p1">Contact Details</div>
            <div className="pa-p2">House_Name</div>
            <input
              type="text"
              name="house_name"
              className="pa-i1"
              placeholder="   Enter house_name"
              onChange={inputChange}
            ></input>
            <div className="pa-p3">Street_Address</div>
            <input
              type="text"
              name="street_address"
              className="pa-i2"
              placeholder="   Enter street_address"
              onChange={inputChange}
            ></input>
            <div className="pa-p4">District</div>
            <input
              type="text"
              name="district"
              className="pa-i3"
              placeholder="   Enter district_name"
              onChange={inputChange}
            ></input>
            <div className="pa-p5">State</div>
            <input
              type="text"
              name="state"
              className="pa-i4"
              placeholder="   Enter state_name"
              onChange={inputChange}
            ></input>
            <div className="pa-p6">Phone_no</div>
            <input
              type="text"
              name="phone_no"
              className="pa-i5"
              placeholder="   Enter phone_no"
              onChange={inputChange}
            ></input>
            <div className="pa-p7">Email_Address</div>
            <input
              type="text"
              name="email"
              className="pa-i6"
              placeholder="   Enter email_address"
              onChange={inputChange}
            ></input>
            <Link to={"/profileaddresslist"}>
              <button
                className="pa-button"
                onClick={(event) => handleSubmit(event)}
              >
                ADD
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profileaddress;
