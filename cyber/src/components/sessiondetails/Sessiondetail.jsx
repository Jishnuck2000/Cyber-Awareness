import React, { useEffect, useState } from "react";
import "./Sessiondetails.css";
import axios from "axios";

function Sessiondetail() {
  const [sessiondetail, setSessiondetail] = useState([]);

  const handleDelete = (_id) => {
    axios.delete(`https://cyber-care.onrender.com/api/admin/deleteadminsession/${_id}`);
    // axios.delete(`http://localhost:1111/api/admin/deleteadminsession/${_id}`);

    window.location.reload();
  };

  useEffect(() => {
    axios
      .get("https://cyber-care.onrender.com/api/admin/viewadminsession")
      // .get("http://localhost:1111/api/admin/viewadminsession")
      .then((data) => {
        console.log(data.data.data);
        setSessiondetail(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
    {sessiondetail.length!==0?(

      <>
    <div>
      <div className="body-sd1">
        <div className="body-sd2">
          {/* <h1 className='h1-sd'>Booking Details,</h1> */}

          <table cellSpacing={60}>
            <tr className="tr1-sd">
              <th>Name</th>
              <th>Address</th>
              <th>Pincode</th>
              <th>City</th>
              <th>District</th>
              <th>State</th>
              <th>Date</th>
              <th>Time</th>
              <th>About</th>
              <th>Phone_no</th>
              <th>Email</th>
            </tr>
            {sessiondetail.map((item) => (
              <tr>
                <th className="th1-sd1">{item.Name}</th>
                <th className="th1-sd1">{item.Address}</th>
                <th className="th1-7">{item.Pincode}</th>
                <th className="th1-7">{item.City}</th>
                <th className="th1-7">{item.District}</th>
                <th className="th1-7">{item.State}</th>
                <th className="th1-7">{item.Date}</th>
                <th className="th1-7">{item.time}</th>
                <th className="th1-7">{item.about}</th>
                <th className="th1-7">{item.Phone_no}</th>
                <th className="th1-7">{item.Email}</th>
                <th>
                  <button
                    className="btn2-sd"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
    </>
    ):(<>
     <div className="booked-body">
    <h1><img src='empty-box.png' className="empty-img"></img></h1></div>


    </>)}
    </>

  );
}

export default Sessiondetail;
