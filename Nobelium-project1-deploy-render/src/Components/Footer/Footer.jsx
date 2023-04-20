import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { ImFacebook2, ImYoutube } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.footer_title}>
          <h2>
            <span>OX GYM</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos magni,
            aut labore laudantium totam commodi beatae expedita
          </p>

          <div className={style.social_icons}>
            <ImFacebook2 className={style.icons} />
            <BsLinkedin className={style.icons} />
            <ImWhatsapp className={style.icons} />
            <ImYoutube className={style.icons} />
          </div>
        </div>

        <div className={style.footer_content}>
          <hr />
          <ul>
            <h3>
              <span>OX GYM</span>
            </h3>
            <Link to="/">Home</Link>
            <Link to="/aboutus">AboutUs</Link>
            <Link to="/location">Traning</Link>
          </ul>

          <ul>
            <h3>
              <span>Services</span>
            </h3>
            <Link>Apply Online</Link>
            <Link>Available Positions</Link>
          </ul>

          <ul>
            <h3>
              <span>About Us</span>
            </h3>
            <Link>Meet Our Team</Link>
            <Link>Our Responsibilities</Link>
            <Link>Our Codes</Link>
            <Link>Our Values</Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
