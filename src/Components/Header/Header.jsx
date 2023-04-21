import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <div className={style.container}>
      <NavLink to="/">
        <div className={style.logo}>
          <img
            src="https://obs.line-scdn.net/0h9p3Sjp44Zl8OKktBV7kZCDJvaDJ5BGAXdkV8Oi0jOGojTiYPMB98MSotPG1wSCgLMR4pOi4iO2gl"
            alt="imge"
          />
        </div>
        <div className={style.title}>
          
        </div>
      </NavLink>

      <div className={showNavbar ? style.navbar : style.responsive}>
        <NavLink to="/aboutus" className={style.list}>
          ABOUT
        </NavLink>
        <NavLink to="/pricing" className={style.list}>
          PLANS
        </NavLink>
        <NavLink to="/training" className={style.list}>
          TRAINING
        </NavLink>
        <NavLink to="/login" className={style.list}>
          JOIN US
        </NavLink>
      </div>

      <div
        className={style.bars_close}
        onClick={() => setShowNavbar(!showNavbar)}
      >
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
