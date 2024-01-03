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




        <div className="vs-bg1">


    





        <table>
          {sessionbooking.map((item)=>

          (
            <>
          <tr >
            <td className="td-vs">NAME:</td>
            <td className="td-vs2">{item.Name}</td></tr>
            <tr>
              <td className="td-vs">ADDRESS:</td>
            <td className="td-vs2">{item.Address}</td></tr>
            <tr>
              <td className="td-vs">PINCODE:</td>
            <td className="td-vs2">{item.Pincode}</td></tr>
            <tr>
              <td className="td-vs">CITY:</td>
            <td className="td-vs2">{item.City}</td></tr>
            <tr>
              <td className="td-vs">DISTRICT:</td>
            <td className="td-vs2">{item.District}</td></tr>
            <tr>
              <td className="td-vs">STATE:</td>
            <td className="td-vs2">{item.State}</td></tr>
            <tr>
              <td className="td-vs">DATE:</td>
            <td className="td-vs2">{item.Date}</td></tr>
            <tr>
              <td className="td-vs">TIME:</td>
            <td className="td-vs2">{item.time}</td></tr>
            <tr>
              <td className="td-vs">ABOUT:</td>
            <td className="td-vs2">{item.about}</td></tr>
            <tr>
              <td className="td-vs">PHONE_NO:</td>
            <td className="td-vs2">{item.Phone_no}</td></tr>
            <tr>
              <td className="td-vs">EMAIL:</td>
            <td className="td-vs2">{item.Email}</td>
          </tr>
            </>
          ))}
        </table>
        <p className="p-vs3">Booking Successfull!</p>
        </div>
      </div>
    </div>
  );
}

export default Viewsession;
