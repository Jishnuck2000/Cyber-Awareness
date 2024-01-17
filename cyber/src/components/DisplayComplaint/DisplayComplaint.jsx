import React, { useEffect, useState } from "react";
import "./DisplayCom.css";
import axios from "axios";

function DisplayComplaint() {
  const [complaint, setComplaint] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1111/api/user/view")

      .then((data) => {
        console.log(data.data);
        setComplaint(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <div>
      <div className="display-bg">
      <div className="bg-vc">
      <p className="p-vc">Compalint History</p>

        <table align="center" border={20} cellPadding={15} cellSpacing={5} className="table1">
          <tr>
            <td>
              {" "}
              <p className="p-vc1">Name</p>
            </td>
            <td>
              <p className="p-vc2">Age</p>
            </td>
            <td>
              <p className="p-vc3">Address</p>
            </td>
            <td>
              <p className="p-vc4">Phone_no</p>
            </td>
            <td>
              <p className="p-vc5">Email</p>
            </td>
            <td>
              <p className="p-vc6">Matter</p>
            </td>
           
          </tr>
          {complaint.map((item) => (
            <tr className="tr-vc">
              <td className="td-vc1">{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.Address}</td>
              <td>{item.Phone_no}</td>
              <td>{item.Email}</td>
              <td>{item.Discription}</td>
             
            </tr>
          ))}
        </table>
       
      </div>
      </div> <div className="container2">
        <p className="div-p">www.sheildcybercrimeportal@gmail.com</p>
      </div>
     </div>
  );
}

export default DisplayComplaint;
