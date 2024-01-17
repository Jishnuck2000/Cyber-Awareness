import React, { useEffect, useState } from 'react'
import './Sessionlist.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Sessionlist() {
const[sessionview,setSessionview] = useState([]);



useEffect(()=>{
    axios.get("http://localhost:1111/api/user/viewadminsessionform")

    .then((data) => {
        console.log(data.data.data);
        setSessionview(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
},[])




const navigate = useNavigate()

  return (
    <div>
        <div className='body-sl'>
            <div>
            <h1 className='p-sl1'>BOOK YOUR SESSIONS</h1>

            {sessionview.map((item) => (

            <div className='body-sl2'>

                <p className='p-sl2'>{item.date}</p>
                <p className='p-sl2'>{item.about}</p>
                <p className='p-sl2'>{item.time}</p>

<Link to = {`/session/${item.about}/${item.time}/${item.date}`}>
                <button className='btn-sl1'>BOOK</button></Link>


            </div>
                        ))} 

            </div>

        </div>



    </div>
  )
}

export default Sessionlist