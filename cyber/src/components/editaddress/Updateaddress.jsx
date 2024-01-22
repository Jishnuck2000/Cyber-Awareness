import React, { useEffect, useState } from "react";
import "./Updateaddress.css";
import { Link,useNavigate,useParams } from "react-router-dom";
import axios from "axios";

function Updateaddress() {
  const [editaddress, setEditaddress] = useState([]);
  const token = localStorage.getItem("Token");
  console.log("Token:", token);
  const inputChange = (event) => {
    const { name, value } = event.target;
    setEditaddress({ ...editaddress, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:1111/api/user/updateaddress/${id}`, editaddress, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        console.log(data);
        navigate("/purchase")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:1111/api/user/viewoneaddress/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setEditaddress(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <div className="aar-bg">
        <div className="aar-bg1">
          <div className="aar-p1">ADD YOUR ADDRESS</div>
          <div className="aar-bg2">
            <input
              type="text"
              name="name"
              className="aar-i1"
              placeholder="   Enter your name"
              value={editaddress?.name}
              onChange={inputChange}
            ></input>
            <input
              type="text"
              name="location"
              className="aar-i1"
              placeholder="   Place you want to delivery"
              value={editaddress?.location}
              onChange={inputChange}
            ></input>
            <input
              type="number"
              name="phone_no"
              className="aar-i2"
              placeholder="   Enter your phone_no"
              value={editaddress?.phone_no}
              onChange={inputChange}
            ></input>
            <input
              type="text"
              name="house_name"
              className="aar-i2"
              placeholder="   Enter your house name"
              value={editaddress?.house_name}
              onChange={inputChange}
            ></input>
            <input
              type="text"
              name="city"
              className="aar-i3"
              placeholder="   Enter your city"
              value={editaddress?.city}
              onChange={inputChange}
            ></input>
            <input
              type="text"
              name="district"
              className="aar-i3"
              placeholder="   Enter your district"
              value={editaddress?.district}
              onChange={inputChange}
            ></input>
            <input
              type="text"
              name="state"
              className="aar-i3"
              placeholder="   Enter your state"
              value={editaddress?.state}
              onChange={inputChange}
            ></input>
            <input
              type="text"
              name="pincode"
              className="aar-i3"
              placeholder="   Enter your pincode"
              value={editaddress?.pincode}
              onChange={inputChange}
            ></input>
            <Link to = {'/purchase'}>
            <button
              className="aar-btn"
              onClick={(event) => handleSubmit(event)}
            >
              UPDATE
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updateaddress;
