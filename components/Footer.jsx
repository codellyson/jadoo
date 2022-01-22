import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import GooglePlay from "../images/GooglePlay.png";
import AppleStore from "../images/AppStore.png";
import Image from "next/image";
import SnapTop from "./SnapTop";
import Logo from "../images/STAHOS.png";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-main-content">
          {" "}
          <div className="content">
            <h1>
              {" "}
              <Image src={Logo} layout="responsive" alt="brand logo" />
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              vero hic quaerat ducimus impedit.
            </p>
          </div>
          <div className="content">
            <h3>Company</h3>
            <ul>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Career</a>
              </li>
              <li>
                <a>Mobile</a>
              </li>
            </ul>
          </div>
          <div className="content">
            <h3>Contact </h3>
            <ul className="contact-info">
              <li>
                <a>Help/FAQ</a>
              </li>
              <li>
                <a>Affiliates</a>
              </li>
              <li>
                <a>Press</a>
              </li>
            </ul>
          </div>
          <div className="content">
            <h3>More </h3>
            <ul className="contact-info">
              <li>
                <a>Airline Fees</a>
              </li>
              <li>
                <a>Airlines</a>
              </li>
              <li>
                <a>Low Fare Trips</a>
              </li>
            </ul>
          </div>
          <div className="content">
            <ul className="contact-info">
              <li>
                <span className="icon">
                  <FaFacebook />
                </span>
                <span className="icon">
                  <FaInstagram />
                </span>
                <span className="icon">
                  <FaTwitter />
                </span>
              </li>
              <li className="discover-app">
                <p>Discover Our App</p>
                <div>
                  <Image alt="google play icon" src={GooglePlay} />
                  <Image alt="Apple store icon" src={AppleStore} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p>Copyright &copy; 2022</p>
      <SnapTop />
    </footer>
  );
}

export default Footer;
