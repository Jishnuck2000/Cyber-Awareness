import React, { useEffect, useState } from 'react'
import './Editprofileaddress.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Editprofileaddress() {
    const [editproaddress,setEditproaddress] = useState([]);
    const token = localStorage.getItem("Token");
    const inputChange = (event) => {
      const { name, value } = event.target;
      setEditproaddress({ ...editproaddress, [name]: value });
    };



    const handleSubmit = (event) => {
      event.preventDefault();
      axios
        .put(`https://cyber-care.onrender.com/api/user/updateproaddress/${id}`, editproaddress, {
        // .put(`http://localhost:1111/api/user/updateproaddress/${id}`, editproaddress, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((data) => {
          console.log(data);
          navigate("/profileaddress")
        })
        .catch((err) => {
          console.log(err);
        });
    };


    const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://cyber-care.onrender.com/api/user/viewoneprofileaddress/${id}`, {
      // .get(`http://localhost:1111/api/user/viewoneprofileaddress/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setEditproaddress(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate()

  return (
    <div className='epa-bg'>

<div className='pa-bg2'>
              <div className='pa-bg3'>
                <div className='pa-p1'>Contact Details</div>
                <div className='pa-p2'>House_Name</div>
                <input type='text' name='house_name' className='pa-i1' placeholder='   Enter house_name'value={editproaddress?.house_name}
              onChange={inputChange}></input>
                <div className='pa-p3'>Street_Address</div>
                <input type='text' name='street_address' className='pa-i2' placeholder='   Enter street_address' value={editproaddress?.street_address}
              onChange={inputChange}></input>
                <div className='pa-p4'>District</div>
                <input type='text' name='district' className='pa-i3' placeholder='   Enter district_name' value={editproaddress?.district}
              onChange={inputChange}></input>
                <div className='pa-p5'>State</div>
                <input type='text' name='state' className='pa-i4' placeholder='   Enter state_name' value={editproaddress?.state}
              onChange={inputChange}></input>
                <div className='pa-p6'>Phone_no</div>
                <input type='text' name='phone_no' className='pa-i5' placeholder='   Enter phone_no' value={editproaddress?.phone_no}
              onChange={inputChange}></input>
                <div className='pa-p7'>Email_Address</div>
                <input type='text' name='email' className='pa-i6' placeholder='   Enter email_address' value={editproaddress?.email}
              onChange={inputChange}></input>
                <button className="pa-button" onClick={(event) => handleSubmit(event)}>UPDATE</button>









                
                </div>  
            </div>

        </div>

    

    
  )
}

export default Editprofileaddress