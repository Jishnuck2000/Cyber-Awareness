import React, { useEffect, useState } from "react";
import "./Viewvolunteer.css";
import Nav from "../Nav/Nav";
import Image from "react-bootstrap/Image";
import axios from "axios";
import { Link } from "react-router-dom";


function Viewvolunteer() {
  // const token = localStorage.getItem("Token");
  // console.log("Token:", token);
  const [volunteerregister, setVolunteer] = useState([]);
 console.log(volunteerregister)
  const handleDelete = (_id) => {
    // console.log(_id)
    // const volunteer = volunteerregister.map((item)=>{

    //   return item._id;
    // })
    // .indexOf(_id);
    // volunteerregister.splice(volunteer,1);
    

    axios
    .delete(`http://localhost:1111/api/volunteer/volunteerdelete/${_id}`)
    .then((response)=>{
      console.log(response)
     } )
     window.location.reload()
}
const handleUpdate = (_id)=>{
  console.log(_id)

  axios
  .get("http://localhost:1111/api/volunteer/viewvolunteers")
}



  useEffect(() => {
    axios
      .get("http://localhost:1111/api/volunteer/viewvolunteers/approved", {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      })



      
      .then((response) => {
        console.log("responsefromapi", response);
        setVolunteer(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });



      
  }, []);

  return (
    <div>
      <Nav />

     
      <div className="body-vv">
        <div className="body-vvv">
      {volunteerregister.map((item)=>(

      <div className="card">
  <div className="card__img">
    <svg width="100%" xmlns="http://www.w3.org/2000/svg">
      <rect height={450} width={540} fill="#ffffff" />
      <defs>
        <linearGradient
          gradientTransform="rotate(222,648,379)"
          y2="100%"
          y1={0}
          x2={0}
          x1={0}
          gradientUnits="userSpaceOnUse"
          id="a"
        >
          <stop stopColor="#ffffff" offset={0} />
          <stop stopColor="#FC726E" offset={1} />
        </linearGradient>
        <pattern
          viewBox="0 0 1080 900"
          y={0}
          x={0}
          height={250}
          width={300}
          id="b"
          patternUnits="userSpaceOnUse"
        >
          <g fillOpacity="0.5">
            <polygon points="90 150 0 300 180 300" fill="#444" />
            <polygon points="90 150 180 0 0 0" />
            <polygon points="270 150 360 0 180 0" fill="#AAA" />
            <polygon points="450 150 360 300 540 300" fill="#DDD" />
            <polygon points="450 150 540 0 360 0" fill="#999" />
            <polygon points="630 150 540 300 720 300" />
            <polygon points="630 150 720 0 540 0" fill="#DDD" />
            <polygon points="810 150 720 300 900 300" fill="#444" />
            <polygon points="810 150 900 0 720 0" fill="#FFF" />
            <polygon points="990 150 900 300 1080 300" fill="#DDD" />
            <polygon points="990 150 1080 0 900 0" fill="#444" />
            <polygon points="90 450 0 600 180 600" fill="#DDD" />
            <polygon points="90 450 180 300 0 300" />
            <polygon points="270 450 180 600 360 600" fill="#666" />
            <polygon points="270 450 360 300 180 300" fill="#AAA" />
            <polygon points="450 450 360 600 540 600" fill="#DDD" />
            <polygon points="450 450 540 300 360 300" fill="#999" />
            <polygon points="630 450 540 600 720 600" fill="#999" />
            <polygon points="630 450 720 300 540 300" fill="#FFF" />
            <polygon points="810 450 720 600 900 600" />
            <polygon points="810 450 900 300 720 300" fill="#DDD" />
            <polygon points="990 450 900 600 1080 600" fill="#AAA" />
            <polygon points="990 450 1080 300 900 300" fill="#444" />
            <polygon points="90 750 0 900 180 900" fill="#222" />
            <polygon points="270 750 180 900 360 900" />
            <polygon points="270 750 360 600 180 600" fill="#DDD" />
            <polygon points="450 750 540 600 360 600" />
            <polygon points="630 750 540 900 720 900" />
            <polygon points="630 750 720 600 540 600" fill="#444" />
            <polygon points="810 750 720 900 900 900" fill="#AAA" />
            <polygon points="810 750 900 600 720 600" fill="#666" />
            <polygon points="990 750 900 900 1080 900" fill="#999" />
            <polygon points="180 0 90 150 270 150" fill="#999" />
            <polygon points="360 0 270 150 450 150" fill="#444" />
            <polygon points="540 0 450 150 630 150" fill="#FFF" />
            <polygon points="900 0 810 150 990 150" />
            <polygon points="0 300 -90 450 90 450" fill="#222" />
            <polygon points="0 300 90 150 -90 150" fill="#FFF" />
            <polygon points="180 300 90 450 270 450" fill="#FFF" />
            <polygon points="180 300 270 150 90 150" fill="#666" />
            <polygon points="360 300 270 450 450 450" fill="#222" />
            <polygon points="360 300 450 150 270 150" fill="#FFF" />
            <polygon points="540 300 450 450 630 450" fill="#444" />
            <polygon points="540 300 630 150 450 150" fill="#222" />
            <polygon points="720 300 630 450 810 450" fill="#AAA" />
            <polygon points="720 300 810 150 630 150" fill="#666" />
            <polygon points="900 300 810 450 990 450" fill="#FFF" />
            <polygon points="900 300 990 150 810 150" fill="#999" />
            <polygon points="0 600 -90 750 90 750" />
            <polygon points="0 600 90 450 -90 450" fill="#666" />
            <polygon points="180 600 90 750 270 750" fill="#AAA" />
            <polygon points="180 600 270 450 90 450" fill="#444" />
            <polygon points="360 600 270 750 450 750" fill="#444" />
            <polygon points="360 600 450 450 270 450" fill="#999" />
            <polygon points="540 600 630 450 450 450" fill="#666" />
            <polygon points="720 600 630 750 810 750" fill="#222" />
            <polygon points="900 600 810 750 990 750" fill="#FFF" />
            <polygon points="900 600 990 450 810 450" fill="#222" />
            <polygon points="0 900 90 750 -90 750" fill="#DDD" />
            <polygon points="180 900 270 750 90 750" fill="#444" />
            <polygon points="360 900 450 750 270 750" fill="#FFF" />
            <polygon points="540 900 630 750 450 750" fill="#AAA" />
            <polygon points="720 900 810 750 630 750" fill="#FFF" />
            <polygon points="900 900 990 750 810 750" fill="#222" />
            <polygon points="1080 300 990 450 1170 450" fill="#222" />
            <polygon points="1080 300 1170 150 990 150" fill="#FFF" />
            <polygon points="1080 600 990 750 1170 750" />
            <polygon points="1080 600 1170 450 990 450" fill="#666" />
            <polygon points="1080 900 1170 750 990 750" fill="#DDD" />
          </g>
        </pattern>
      </defs>
      <rect height="100%" width="100%" fill="url(#a)" y={0} x={0} />
      <rect height="100%" width="100%" fill="url(#b)" y={0} x={0} />
    </svg>
  </div>   

  
<Image src={`/upload/${item.Image}`} className="man2"></Image>
  <div className="card__title">{item.Name}</div>

  <div className="card__subtitle">{item.Age}</div>
  <div className="card__subtitle">{item.Address}</div>
  <div className="card__subtitle">{item.Qualification}</div>
  <div className="card__subtitle">{item.Phone_no}</div>

  <div className="card__wrapper">
    <Link to = {`/update/${item._id}`}>
    <button className="card__btn66" onClick={()=>handleUpdate(item._id)}>Edit</button></Link>
    <button className="card__btn card__btn-solid66" onClick={()=>handleDelete(item._id)}>Delete</button>
  </div>
</div>))}
</div></div>
<div className="container2">
        <p className="div-p">www.sheildcybercrimeportal@gmail.com</p>
      </div>
    </div>
  );
}

export default Viewvolunteer;
