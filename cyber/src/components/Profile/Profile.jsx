import React, { useEffect, useState } from 'react'
import './Profile.css'
import Nav from '../Nav/Nav'
import Image from 'react-bootstrap/Image';
import axios from 'axios';


function Profile() {

  const token = localStorage.getItem("Token");
  console.log("Token:", token);

  const [profileview,setProfile] = useState([]);
  useEffect(()=>{
    axios
    .get('http://localhost:1111/api/user/viewprofile',{
     headers: {
      Authorization:`Bearer ${token}`,
     }, 
    })
    .then((data)=>{
      console.log(data.data.data[0]);
      setProfile(data.data.data[0]);
    })

    .catch((err)=>{
      console.log(err);
    })




  },[])
 
  return (
    <div>
<Nav/>
<div class="container">
{/* {profileview.map((item)=>( */}
<div id="content">

  {/* <div className='field1'> */}
    
  <div id="blurer" />
  <div className="blob" />
  <div className="blob" />
  <div className="blob" />
  <div className="blob" />
  <div id="article" >

    {/* <Image src='pro2.jpg' className='pro-2'></Image> */}
    <center>
    <div><Image src='man2.png' className='man'></Image></div>
   <div> <p className='pr-p1'>{profileview.username}</p><br></br></div>
   <div> <p className='pr-p2'>{profileview.email_id}</p><br></br></div>
   <div> <p className='pr-p3'>{profileview.phone_no}</p>
    </div></center></div>

    
   
    </div>  
    {/* </div> */}
 
{/* ))}  */}


</div>
<div className="container2">
        <p className="div-p">www.sheildcybercrimeportal@gmail.com</p>
      </div>

    </div>
  )
}

export default Profile