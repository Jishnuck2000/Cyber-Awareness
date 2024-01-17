import React, { useState } from 'react'
import './Adminsessionform.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Adminsessionform() {

const[adminsessionform,setAdminsessionform] = useState([]);

const inputChange = (event) => {
  const { name, value } = event.target;
  setAdminsessionform({ ...adminsessionform, [name]: value });
};
console.log(adminsessionform)

const handleSubmit = (event) => {
  event.preventDefault();

  axios.post('http://localhost:1111/api/admin/adminsessionform',adminsessionform)


  .then((data)=>{
    console.log(data.data);
    navigate('/sessionlist')
})
.catch((err) => {
  console.log(err);
});
};

const navigate = useNavigate();

  return (
    <div>
        <div className='body-asf'>
           <div> <p className='p-asf'>ADD SESSIONS,</p></div>
            <div className='body-asf1'>
                <input type ='date' className='i-asf1' name='date' onChange={inputChange}></input><br></br>
                <textarea  placeholder=' about session...' className='i-asf2' name='about' onChange={inputChange}></textarea>
                <input type ='time' className='i-asf3' name='time' onChange={inputChange}></input><br></br>
                <button className='btn-asf'           onClick={(event) => handleSubmit(event)}
>ADD</button>


            </div>
        </div>
        <div className="container2">
        <p className="div-p">www.sheildcybercrimeportal@gmail.com</p>
      </div>
    </div>
  )
}


export default Adminsessionform;