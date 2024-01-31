import React, { useEffect, useState } from 'react'
import './Profileaddresslist.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


function Profileaddresslist() {
    const[proaddresslist,setProaddresslist] = useState([])
    const token = localStorage.getItem("Token");

    const handleDelete = (_id) =>{

      axios.delete(`http://localhost:1111/api/user/deleteprofileaddress/${_id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
  
      .then((response)=>{
        console.log(response)
       } )
       window.location.reload()
  }




    const primaryAddress = (id) => {
        console.log(id);
    
        axios
          .put(
            `http://localhost:1111/api/user/updateprofileaddresstype/${id}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            console.log(response.data.data);
            const unchecked = proaddresslist.filter((data) => {
              return (data.addresstype = "");
            });
            const checked = unchecked.filter((data) => {
              if (data._id == id) {
                return(data.addresstype = "primary");
              }
              return data;
            });
            setProaddresslist(checked);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      };


      
    useEffect(() => {
        axios
          .get("http://localhost:1111/api/user/viewprofileaddress", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
    
          .then((response) => {
            console.log("responsefromapi", response);
            setProaddresslist(response.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
    
    
    
      }, []);

  return (
    <div>
<div className='pal-bg'>

<div className='pal-bg1'>


    <div className='pal-bg2'>
    {proaddresslist.map((item)=>(
<>
{item.addresstype == "primary" ? (
    <label className="container-pal">
  <input defaultChecked="checked" type="checkbox" onClick={()=>primaryAddress(item._id)}/>
  <div className="checkmark-pal"/>
  </label>
):(
<label className="container-pal">
<input  type="checkbox"  onClick={()=>primaryAddress(item._id)}/>
<div className="checkmark-pal"/>
 </label>

  
  )}
<div className='pal-width'>
<div className='pal-p1'>{item.house_name}[House]</div>
<div className='pal-p2'>{item.street_address}[P.O]</div>
<div className='pal-p3'>{item.district},{item.state}</div>
<div className='pal-p4'>Ph:{item.phone_no}</div>
<div className='pal-p5'>Mail:{item.email}</div>
<Link to = {"/profileaddress"}>
<button className='pal-back'>Back</button></Link>

</div>

<img src='delete-pa.png' className='pa-delete' onClick={()=>handleDelete(item._id)}></img>

</>

))}

    </div>
</div>



</div>
    </div>
  )
}

export default Profileaddresslist