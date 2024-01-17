import React from "react";
import "./Home.css";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div  className="home-bg">
      <div className="div">
        <div>
          <Image src="chome.webp" className="img-h"></Image>
          <p className="p-v">Secure Your Cyberspace With Us.</p>
          <p className="p-v1">Security Awareness Training.</p>
          <Link to={"/sessionlist"}>
            <input
              type="button"
              value="TO ENROLL THE SESSION"
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


        <div className="home-container1">
          <h1 className="home-h1">
            BEST ANTIVIRUS SOFTWARE<br></br>
            PROTECTION - 2024
          </h1>
          <p className="home-p1">
            High quality security solutions reviewed
          </p>
          <p className="home-p2">
            The content is written by industry professinals and you will have a good insight into<br></br>
            what solutions offer the best security and which ones can be adapted or adjusted to<br></br>
            your own needs.We encourage you to read onward as you try to find the best <br></br>
            security options that suit your needs in the long run. 
          </p>
          <img src="TitleImg.svg" className="home-img1"></img>
          <Link to={'/cart'}>
          <button className="home-btn">Choose Your Security</button></Link>
        </div>








      </div>
      <div className="container2">
        <p className="div-p">www.sheildcybercrimeportal@gmail.com</p>
      </div>
    </div>
  );
}

export default Home;
