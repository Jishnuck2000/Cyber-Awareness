import React, { useState } from "react";
import "./Addproductsadmin.css";
import axios from "axios";
import BASE_URL from "../const/const";


function Addproductsadmin() {
  const token = localStorage.getItem("Token");

  const [addproductsadmin, setAddproductsadmin] = useState([]);
  const inputChange = (event) => {
    const { name, value } = event.target;
    setAddproductsadmin({ ...addproductsadmin, [name]: value });
  };
  console.log(addproductsadmin);

  const handleImage = (event) => {
    const { name } = event.target


    setAddproductsadmin({ ...addproductsadmin, [name]:event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", addproductsadmin.image);
    formData.append("name", addproductsadmin.name);
    formData.append("usage", addproductsadmin.usage);
    formData.append("description", addproductsadmin.description);
    formData.append("validity", addproductsadmin.validity);
    formData.append("price", addproductsadmin.price);
console.log('working')
    axios
      // .post("http://localhost:1111/api/product/addproducts", formData, {
        .post(`${BASE_URL}/api/product/addproducts`, formData, {

        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        console.log(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="aps-bg">
        <form action=""  encType="multipart/formdata">
          <div className="aps-bg1">
            <h1 className="aps-h1">ADD PRODUCTS</h1>
            <input
              type="file"
              id="file-upload"
              name="image"
              onChange={handleImage}
              hidden
            />
            <label htmlFor="file-upload">
              <img src="picture.png" alt="" className="aps-img"></img>
            </label>

            <label className="aps-name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="   Enter your name"
              className="aps-i1"
              onChange={inputChange}
            />{" "}
            <br></br>
            <label className="aps-usage">Usage:</label>
            <input
              type="text"
              name="usage"
              placeholder="   Enter usage"
              className="aps-i2"
              onChange={inputChange}
            />
            <label className="aps-description">Description:</label>
            <textarea
              className="aps-i3"
              placeholder="  Discription"
              name="description"
              onChange={inputChange}
            ></textarea>
            <label className="aps-validity">Validity:</label>
            <input
              type="text"
              name="validity"
              placeholder="   Validity period"
              className="aps-i4"
              onChange={inputChange}
            />
            <label className="aps-price">Price:</label>
            <input
              type="text"
              name="price"
              placeholder="   Price value"
              className="aps-i5"
              onChange={inputChange}
            />
            <button type="button" onClick={(event)=>handleSubmit(event) }  className="aps-btn">
              ADD PRODUCT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addproductsadmin;
