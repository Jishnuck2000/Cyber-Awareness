import React, { useEffect, useState } from "react";
import "./Nav.css";
import Image from "react-bootstrap/Image";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const Navigate = useNavigate();
  const Token = localStorage.getItem("Token");
  const Role = localStorage.getItem("Role");
  console.log(Token);
  console.log(Role);

  // console.log(alogin);

  const logout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("Role");

    Navigate("/hom");
    window.location.reload();
  };
  useEffect(() => {
    // console.log("+626525626526525");
    if (Token !== null) {
      // console.log("tesrtinggg");
      setTimeout(logout, 3540000);
    }
  }, []);

  return (
    <div>
      <nav className="container1">
        <Image src="/shield.png" className="cs"></Image>
        <p className="p-nav">SHIELD</p>

        <div className="fullnav">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="label">
            <img src="/ham.png" alt="jhfgd" className="hamburger" />
          </label>
          <div className="ul">
            <Link to={"/hom"}>
              <p className="p2-nav">Home</p>
            </Link>

            <Link to={"/comp"}>
              <p className="p4-nav">Complaint Registration</p>
            </Link>

            <Link to={"/vcomp"}>
              <p className="p3-nav">Volunteer Registration</p>
            </Link>

            {Role == 1 ? (
              <>
                <Link to={"/vvol"}>
                  <p className="p10-nav">View Volunteers</p>
                </Link>

                <Link to={"/vs"}>
                  <p className="p44-nav">Volunteer Request</p>
                </Link>
                <Link to={"/adminsessionform"}>
                  <p className="p11-nav">Add Sessions</p>
                </Link>

                <Link to={"/sd"}>
                  <p className="p45-nav">Sessionbooking Details</p>
                </Link>

                <Link to={"/addproductsadmin"}>
                  <p className="p111-nav">Add Products</p>
                </Link>

                <Link to={"/profile"}>
                  <p className="p11p-nav">Profile</p>
                </Link>
              </>
            ) : (
              ""
            )}

            {Role == 2 ? (
              <>
                <Link to={"/bookedsessions"}>
                  <p className="p45-nav">Booked Sessions</p>
                </Link>

                <Link to={"/profile"}>
                  <p className="p11-nav">Profile</p>
                </Link>
              </>
            ) : (
              ""
            )}

            {Role == 3 ? (
              <>
                <Link to={"/volunteerprofile"}>
                  <p className="p46-nav">Profile</p>
                </Link>
              </>
            ) : (
              ""
            )}
            <Link to={"/about"}>
              <p className="p5a-nav">About</p>
            </Link>
            {Token == null ? (
              <>
                <Link to={"/"}>
                  <p className="p6-nav">Register</p>
                </Link>
                <Link to={"/log"}>
                  <p className="p7-nav">Login</p>
                </Link>
              </>
            ) : (
              <>
                {""}
                {/* <Link to={"/profile"}>
                <p className="p11-nav">Profile</p>
              </Link> */}
                <Link to={""}>
                  <p className="p12l-nav" onClick={logout}>
                    Logout
                  </p>
                </Link>
                <Link to={"/addtocart"}>
                  <img src="carts.png" className="cart-nav"></img>
                </Link>
              </>
            )}

            {/* <p className="p9-nav">Click</p> */}
          </div>
        </div>
        {/* {
     alogin!=false?
     <div className='expandnav'>
  dghdhdghf
</div>:
<div>dfgdfg</div>
  } */}
      </nav>
    </div>
  );
}

export default Nav;
