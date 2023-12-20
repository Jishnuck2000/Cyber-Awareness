import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import "./Viewsession.css";
import axios from "axios";

function Viewsession() {
  const token = localStorage.getItem("Token");
  console.log("Token:", token);

  const [sessionbooking, setSession] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1111/api/user/user-viewsession", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((data) => {
        console.log(data);
        setSession(data.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Nav />
      <div className="vs-bg">
        <table>
          {/* {sessionbooking.map((item)=>( */}
          <tr >
            <td className="td-vs">NAME:</td>
            <td className="td-vs2">{sessionbooking.Name}</td></tr>
            <tr>
              <td className="td-vs">ADDRESS:</td>
            <td className="td-vs2">{sessionbooking.Address}</td></tr>
            <tr>
              <td className="td-vs">PINCODE:</td>
            <td className="td-vs2">{sessionbooking.Pincode}</td></tr>
            <tr>
              <td className="td-vs">CITY:</td>
            <td className="td-vs2">{sessionbooking.City}</td></tr>
            <tr>
              <td className="td-vs">DISTRICT:</td>
            <td className="td-vs2">{sessionbooking.District}</td></tr>
            <tr>
              <td className="td-vs">STATE:</td>
            <td className="td-vs2">{sessionbooking.State}</td></tr>
            <tr>
              <td className="td-vs">DATE:</td>
            <td className="td-vs2">{sessionbooking.Date}</td></tr>
            <tr>
              <td className="td-vs">PHONE_NO:</td>
            <td className="td-vs2">{sessionbooking.Phone_no}</td></tr>
            <tr>
              <td className="td-vs">EMAIL:</td>
            <td className="td-vs2">{sessionbooking.Email}</td>
          </tr>
          {/* ))} */}
        </table>
        <p className="p-vs3">Booking Successfull!</p>
      </div>
    </div>
  );
}

export default Viewsession;
