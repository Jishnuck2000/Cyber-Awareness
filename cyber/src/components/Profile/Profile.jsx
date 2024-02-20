import React, { useEffect, useState } from "react";
import "./Profile.css";
import Image from "react-bootstrap/Image";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
  const redux = useSelector((state) => state.user.name);
  console.log(redux);

  const token = localStorage.getItem("Token");
  console.log("Token:", token);

  const [profileview, setProfile] = useState([]);
  const [proimg, setProimg] = useState({});
  const [viewproimg, setViewproimg] = useState([]);

  const handleImage = (event) => {
    console.log(event);
    // event.preventDefault();
    const { name } = event.target

    setProimg({ ...proimg, [name]: event.target.files[0] });
console.log(proimg);
    const formData = new FormData();
    formData.append("image", proimg.image);
    axios
      .post("https://cyber-care.onrender.com/api/user/addproimage", formData, {
      // .post("http://localhost:1111/api/user/addproimage", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  // };

  useEffect(() => {
    axios
      .get("https://cyber-care.onrender.com/api/user/viewprofile", {
      // .get("http://localhost:1111/api/user/viewprofile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        console.log(data.data.data[0]);
        setProfile(data.data.data[0]);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://cyber-care.onrender.com/api/user/viewproimage", {
      // .get("http://localhost:1111/api/user/viewproimage", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        console.log(response.data.data[0]);
        setViewproimg(response.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(viewproimg);

  return (
    <div>
      <div class="container-pro">
        {/* {profileview.map((item)=>( */}
        <div id="content">
          {/* <div className='field1'> */}

          <div id="blurer" />
          <div className="blob" />
          <div className="blob" />
          <div className="blob" />
          <div className="blob" />
          <div id="article">
            {/* <Image src='pro2.jpg' className='pro-2'></Image> */}
            <center>
              <div>
                <form action="" encType="multipart/formdata">
                  {/* {viewproimg == undefined ? (
                    <>
                      <h2>Null</h2>
                    </>
                  ) : (
                    <Image
                      src={`/upload/${viewproimg.image}`}
                      onError={(e)=>{e.target.src = '/eye.png'}}
                      className="man"
                    ></Image>
                  )}{" "} */}
                   <Image
                    src={
                      viewproimg!==undefined
                        ? `/upload/${viewproimg.image}`
                        : `/upload/man.png`
                    }
                    onError={(e) => {
                      e.target.src = "/eye.png";
                    }}
                    className="man"
                  ></Image>
                  <input
                    type="file"
                    id="file-upload"
                    name="image"
                    onChange={handleImage}
                    // onClick={(event)=>handleSubmit(event) }
                    hidden
                  />
                  <label htmlFor="file-upload">
                    <img
                      src="plus-profile.png"
                      alt=""
                      className="plus-pro"
                    ></img>
                  </label>

                </form>
              
              </div>
              <div>
                {" "}
                <p className="pr-p1">{profileview.username}</p>
                <br></br>
              </div>
              <div>
                {" "}
                <p className="pr-p2">{profileview.email_id}</p>
                <br></br>
              </div>
              <div>
                {" "}
                <p className="pr-p3">{profileview.phone_no}</p>
              </div>
              <Link to={"/profileaddress"}>
              <div className="pro-addiv">

              <img src="location-pin.png" className="location-pin">
              </img>              <div className="profile-address-details"> Address Details
</div>
              </div>
              </Link>

            </center>
          </div>
        </div>
        {/* </div> */}

        {/* ))}  */}
      </div>
      <div className="container2">
        <p className="div-p">www.sheildcybercrimeportal@gmail.com</p>
      </div>
    </div>
  );
}

export default Profile;
