import React, { useEffect, useState } from 'react'
import './Volunteerstatus.css'
import axios from 'axios';
import Image from "react-bootstrap/Image";



function Volunteerstatus() {

    const[volunteerstatus,setVolunteerstatus] = useState([]);


    const handlesubmit=(_id)=>{

        axios.put(`https://cyber-care.onrender.com/api/volunteer/updatevolunteers/approved/${_id}`)
        // axios.put(`http://localhost:1111/api/volunteer/updatevolunteers/approved/${_id}`)

        .then((response)=>{
            console.log(response)
            const approvedstatus = volunteerstatus.filter((data)=>{
                if(data._id === _id){
                    data.status= 'approved'
                }
                return data
            })
            setVolunteerstatus(approvedstatus)
        })
        .catch((err)=>{
            console.log(err)
        })

    }

    const handleReject=(_id)=>{

        axios.put(`https://cyber-care.onrender.com/api/volunteer/updatevolunteers/rejected/${_id}`)
        // axios.put(`http://localhost:1111/api/volunteer/updatevolunteers/rejected/${_id}`)

        .then((response)=>{
            console.log(response)

            const rejectedstatus = volunteerstatus.filter((data)=>{
                if(data._id === _id){
                    data.status = 'rejected'
                }
                return data
            })
            setVolunteerstatus(rejectedstatus)


        })

    }

    useEffect(()=>{
        axios.get("https://cyber-care.onrender.com/api/volunteer/viewvolunteers")
        // axios.get("http://localhost:1111/api/volunteer/viewvolunteers")

        .then((response)=>{
            console.log(response)
            setVolunteerstatus(response.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })



    },[])




  return (
    <div>
        <div className='body-status'>

            <div  className='container-vs'>
                <table className='table-bgvs'>
                {volunteerstatus.map((item)=>(
                    <tr>
                        <td><Image src={`/upload/${item.Image}`} className='vstatus-img'></Image></td>
                        <td className='vs-td'>{item.Name}</td>
                        <td className='vs-td'>{item.Age}</td>
                        <td className='vs-td'>{item.Address}</td>
                        <td className='vs-td'>{item.Qualification}</td>
                        <td className='vs-td'>{item.Phone_no}</td>
                        <td className='vs-td'>{item.status}</td>
                        <td><button className='btn-vs1' onClick={()=>handlesubmit(item._id)}>Approved</button></td>
                        <td><button className='btn-vs2'onClick={()=>handleReject(item._id)}>Rejected</button></td>



                    </tr>
))}
                </table>
            </div>

        </div>
        <div className="container2">
        <p className="div-p">www.sheildcybercrimeportal@gmail.com</p>
      </div>

    </div>
  )
}

export default Volunteerstatus