import React, { useState } from "react";
import "./Nav.css";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

function Nav() {
  const Token = localStorage.getItem("Token");
  const Role = localStorage.getItem("Role");
  console.log(Token);
  console.log(Role);

  // console.log(alogin);

  const logout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("Role");

    window.location.reload();
  };
  return (
    <div>
      <nav className="container1">

        <Image src="/shield.png" className="cs"></Image>
        <p className="p-nav">SHIELD</p>

        <div className="fullnav">
          <Link to={"/hom"}>
            <p className="p2-nav">Home</p>
          </Link>
          <Link to={"/vcomp"}>
            <p className="p3-nav">Volunteer Registration</p>
          </Link>

          <Link to={"/vvol"}>
            <p className="p10-nav">View Volunteers</p>
          </Link>

          <Link to={"/comp"}>
            <p className="p4-nav">Complaint Registration</p>
          </Link>
          <Link to={"/about"}>
            <p className="p5-nav">About</p>
          </Link>
          {Token == null ? (
            <>
              <Link to={"/reg"}>
                <p className="p6-nav">Register</p>
              </Link>
              <Link to={"/log"}>
                <p className="p7-nav">Login</p>
              </Link>
            </>
          ) : (
            <>
              {""}
              <Link to={"/profile"}>
                <p className="p11-nav">Profile</p>
              </Link>
              <Link to={"/log"}>
                <p className="p12-nav" onClick={logout}>
                  Logout
                </p>
              </Link>
            </>
          )}

          {/* <p className="p9-nav">Click</p> */}
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
