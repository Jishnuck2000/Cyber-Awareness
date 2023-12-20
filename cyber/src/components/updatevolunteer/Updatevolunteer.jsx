import React, { useEffect, useState } from 'react'
import './Updatevolunteer.css'
import Nav from '../Nav/Nav'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Updatevolunteer() {

const [volunteerupdate,setUpdate] = useState();
console.log(volunteerupdate)

const inputChange = (event) =>{
  const {name,value} = event .target;
  setUpdate({...volunteerupdate, [name]:value});
}

const handleSubmit = (event)=>{
  event.preventDefault();
  axios
  .put(`http://localhost:1111/api/volunteer/volunteerupdate/${id}`,volunteerupdate)
  .then((data)=>{
    console.log(data)
    toast.error(data, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    navigate("/vvol")
  })
}

const {id}=useParams()
console.log(id)
  useEffect(()=>{
    axios.get(`http://localhost:1111/api/volunteer/viewvolunteer/${id}`)
    .then((response)=>{
      console.log(response.data)
      setUpdate(response.data.data)
      
     } )
  },[])
  const navigate = useNavigate();
  return (
    <div>
<Nav/>
<div className='update-vbg'>

<ToastContainer/>





<div className='bg-vr'>
            <p className='p-vr'>Make Your Changes</p>


            <div className="file-vr">
              <div className="image-vr">
                <input type="file" id="file-upload" name="image" hidden />
                <label htmlFor="file-upload">
                  <img
                    src="upload.png"
                    alt=""
                    id="pro"
                  />
                </label>
              </div>
            </div>

  <input type='text' name='Name' placeholder='    Name' value={volunteerupdate?.Name} className='i-vr'  onChange={inputChange}></input>
  <input type='number' name='Age' placeholder='    Age' value={volunteerupdate?.Age} className='i-vr1'  onChange={inputChange}></input>
  <input type='text' name='Address' placeholder='    Address' value={volunteerupdate?.Address} className='i-vr2'  onChange={inputChange}></input>
  <input type='text' name='Qualification' placeholder='    Qualification' value={volunteerupdate?.Qualification} className='i-vr3'  onChange={inputChange}></input>
  <input type='number' name='Phone_no' placeholder='    Phone_no' value={volunteerupdate?.Phone_no} className='i-vr4'  onChange={inputChange}></input>
  
  <div>
    <Link to={'/vvol'}>
  <input type='button' value='Update' className='btn-vr' onClick={(event)=>handleSubmit(event) }
></input></Link>
</div>

          </div>
        </div>


    </div>





  )
}

export default Updatevolunteer