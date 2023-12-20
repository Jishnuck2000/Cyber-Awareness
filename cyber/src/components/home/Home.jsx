import React from "react";
import "./Home.css";
import Nav from "../Nav/Nav";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div  className="home-bg">
      <Nav />
      <div className="div">
        <div>
          <Image src="chome.webp" className="img-h"></Image>
          <p className="p-v">Secure Your Cyberspace With Us.</p>
          <p className="p-v1">Security Awareness Training.</p>
          <Link to={"/session"}>
            <input
              type="button"
              value="TO ENROLL THE SECTION"
              className="btn-h"
            ></input>
          </Link>
        </div>
        <div className="div2">
          <p className="p-v2">CYBER HYGIENE POSTS</p>
          <table cellPadding={20}>
            <tr>
              <td>
                <Image src="poster1.jpg" className="poster1"></Image>
              </td>
              <td>
                <Image src="poster2.jpg" className="poster1"></Image>
              </td>
              <td>
                <Image src="poster3.jpg" className="poster1"></Image>
              </td>
              <td>
                <Image src="poster4.jpg" className="poster1"></Image>
              </td>
            </tr>
            <tr>
              <td>
                <Image src="poster4.jpeg" className="poster2"></Image>
              </td>
              <td>
                <Image src="poster6.jpg" className="poster2"></Image>
              </td>
              <td>
                <Image src="poster7.jpeg" className="poster2"></Image>
              </td>
              <td>
                <Image src="poster8.jpeg" className="poster2"></Image>
              </td>
            </tr>
          </table>
          <p className="p-v3">CYBER AWARENESS VIDEOS</p>

          <table className="tt1" cellPadding={40}>
            <tr>
              <td>
                <video
                  className="video1"
                  height={"200px"}
                  width={"200px"}
                  autoPlay
                  muted
                >
                  <source src="video1.mp4" type="video/mp4" />
                </video>
              </td>
              <td>
                <video
                  className="video1"
                  height={"200px"}
                  width={"200px"}
                  autoPlay
                  muted
                >
                  <source src="video2.mp4" type="video/mp4" />
                </video>
              </td>

              <td>
                <video
                  className="video1"
                  height={"200px"}
                  width={"200px"}
                  autoPlay
                  muted
                >
                  <source src="video3.mp4" type="video/mp4" />
                </video>
              </td>
              <td>
                <video
                  className="video1"
                  height={"200px"}
                  width={"200px"}
                  autoPlay
                  muted
                >
                  <source src="video4.mp4" type="video/mp4" />
                </video>
              </td>
            </tr>
            <tr>
              <td>
                <video
                  className="video1"
                  height={"200px"}
                  width={"200px"}
                  autoPlay
                  muted
                >
                  <source src="video5.mp4" type="video/mp4" />
                </video>
              </td>
              <td>
                <video
                  className="video1"
                  height={"200px"}
                  width={"200px"}
                  autoPlay
                  muted
                >
                  <source src="video6.mp4" type="video/mp4" />
                </video>
              </td>
              <td>
                <video
                  className="video1"
                  height={"200px"}
                  width={"200px"}
                  autoPlay
                  muted
                >
                  <source src="video7.mp4" type="video/mp4" />
                </video>
              </td>
              <td>
                <video
                  className="video1"
                  height={"200px"}
                  width={"200px"}
                  autoPlay
                  muted
                >
                  <source src="video8.mp4" type="video/mp4" />
                </video>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="container2">
        <p className="div-p">www.sheildcybercrimeportal@gmail.com</p>
      </div>
    </div>
  );
}

export default Home;
