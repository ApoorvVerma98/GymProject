import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { ImFacebook2, ImYoutube } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.footer_title}>
          <h2>
            <span>OX GYM</span>
          </h2>
          <p>
            "At OX GYM, we're passionate about helping you achieve your fitness
            goals. Our state-of-the-art facilities and experienced trainers are
            here to support you every step of the way. Join us today!"
          </p>
          <div className={style.social_icons}>
            <a href="https://www.facebook.com/">
              <ImFacebook2 className={style.icons} id="facebook-icon" />
            </a>
            <a href="https://www.linkedin.com/">
              <BsLinkedin className={style.icons} id="linkedin-icon" />
            </a>
            <a href="https://twitter.com/">
              <FaTwitter className={style.icons} id="twitter-icon" />
            </a>
            <a href="https://www.youtube.com/">
              <ImYoutube className={style.icons} id="youtube-icon" />
            </a>
          </div>
        </div>
        <div className={style.vertical_line}></div>
        <div className={style.footer_content}>
          <ul>
            <h3>
              <span>OX GYM</span>
            </h3>
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/training">Training</Link>
            <Link to="/pricing">Plans</Link>
          </ul>
          
          <ul>
            <h3>
              <span>Services</span>
            </h3>
            <Link to="/apply">Apply Online</Link>
            <Link to="/positions">Available Positions</Link>
            <Link to="/contactus">Contact Us</Link>
            
          </ul>
          <div className= {style.map}>
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14251.04143269719!2d94.2044286!3d26.7520224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3746c3ffad690a53%3A0x859a47106c6c766f!2sOX%20GYM!5e0!3m2!1sen!2sin!4v1682072372462!5m2!1sen!2sin"
            width="60"
            height="45"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p>Email us at : apoorv.verma9@gmail.com<br/>
             Mobile No. +91-7061255244 </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
