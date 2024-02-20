import React, { useState } from 'react'
import './Addaddressform.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Addaddressform() {

const[address,setAddress] = useState([]);

const token = localStorage.getItem("Token");
  console.log("Token:", token);
const inputChange = (event) => {
  const { name, value } = event.target;
  setAddress({ ...address, [name]: value });
};
console.log(address)

const handleSubmit = (event) => {
  event.preventDefault();

  // axios.post('http://localhost:1111/api/user/addaddress',address,
  axios.post('https://cyber-care.onrender.com/api/user/addaddress',address,

  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  )


  .then((data)=>{
    console.log(data.data.data);
    navigate("/purchase")
})
.catch((err) => {
  console.log(err);
});
};

const navigate = useNavigate();
  return (
    <div>

      <div className='aar-bg'>
        <div className='aar-bg1'>
          <div className='aar-p1'>ADD YOUR ADDRESS</div>
          <div className='aar-bg2'>
            <input type='text' name='name' className='aar-i1' placeholder='   Enter your name' onChange={inputChange}></input>
            <input type='text' name='location' className='aar-i1' placeholder='   Place you want to delivery' onChange={inputChange}></input>
            <input type='number' name='phone_no' className='aar-i2' placeholder='   Enter your phone_no' onChange={inputChange}></input>
            <input type='text' name='house_name' className='aar-i2' placeholder='   Enter your house name' onChange={inputChange}></input>
            <input type='text' name='city' className='aar-i3' placeholder='   Enter your city' onChange={inputChange}></input>
            <input type='text' name='district' className='aar-i3' placeholder='   Enter your district' onChange={inputChange}></input>
            <input type='text' name='state' className='aar-i3' placeholder='   Enter your state' onChange={inputChange}></input>
            <input type='text' name='pincode' className='aar-i3' placeholder='   Enter your pincode' onChange={inputChange}></input>
            <button className='aar-btn'   onClick={(event) => handleSubmit(event)}>SUBMIT</button>


            


            




          </div>
        </div>
      </div>

    </div>
  )
}

export default Addaddressform