import React, { useEffect, useState } from 'react'
import './Updatecart.css'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


function Updatecart() {

    const[updatecart,setUpdatecart] = useState();
    const token = localStorage.getItem("Token");


    const inputChange = (event) =>{
        const {name,value} = event .target;
        setUpdatecart({...updatecart, [name]:value});
      }

      const handleUpdatepicture = (event) => {
        const { name } = event.target
        setUpdatecart({...updatecart,[name]:event.target.files[0]});
      };
      console.log(updatecart)



      const handleSubmit = (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append("image", updatecart.image);
        formData.append("name", updatecart.name);
        formData.append("usage", updatecart.usage);
        formData.append("description", updatecart.description);
        formData.append("validity", updatecart.validity);
        formData.append("price", updatecart.price);
        axios
          .put(`https://cyber-care.onrender.com/api/product/updateproducts/${id}`, formData, {
          // .put(`http://localhost:1111/api/product/updateproducts/${id}`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((data) => {
            console.log(data.data.data);
            navigate('/cart')
          })
          .catch((err) => {
            console.log(err);
          });
      };


      const {id}=useParams()
console.log(id)
  useEffect(()=>{
    axios.get(`https://cyber-care.onrender.com/api/product/viewoneproduct/${id}`)
    // axios.get(`http://localhost:1111/api/product/viewoneproduct/${id}`)
    .then((response)=>{
      console.log(response.data)
      setUpdatecart(response.data.data)
      
     } )
  },[])
  const navigate = useNavigate();




  return (
    <div>
         <div>
      <div className="body-up">
        <form action=""  encType="multipart/formdata">
          <div className="aps-bg1">
            <h1 className="aps-h1">UPDATE HERE...</h1>
            <input
              type="file"
              id="file-upload"
              name="image"

              onChange={handleUpdatepicture}
              hidden
            />
            <label htmlFor="file-upload">
              <img src={`/upload/${updatecart?.image}`} alt="" className="aps-img"></img>
            </label>

            <label className="aps-name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="   Enter your name"
              value={updatecart?.name}
              className="aps-i1"
              onChange={inputChange}
            />{" "}
            <br></br>
            <label className="aps-usage">Usage:</label>
            <input
              type="text"
              name="usage"
              placeholder="   Enter usage"
              value={updatecart?.usage}
              className="aps-i2"
              onChange={inputChange}
            />
            <label className="aps-description">Description:</label>
            <textarea
              className="aps-i3"
              placeholder="  Description"
              value={updatecart?.description}

              name="description"
              onChange={inputChange}
            ></textarea>
            <label className="aps-validity">Validity:</label>
            <input
              type="text"
              name="validity"
              placeholder="   Validity period"
              value={updatecart?.validity}

              className="aps-i4"
              onChange={inputChange}
            />
            <label className="aps-price">Price:</label>
            <input
              type="text"
              name="price"
              placeholder="   Price value"
              value={updatecart?.price}

              className="aps-i5"
              onChange={inputChange}
            />
            <Link to={'/cart'}>
            <button type="button" onClick={(event)=>handleSubmit(event) }  className="aps-btn">
              ADD PRODUCT
            </button></Link>
          </div>
        </form>
      </div>
    </div>

    </div>
  )
}

export default Updatecart