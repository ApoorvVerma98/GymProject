import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import gymBackgroundImage1 from "./Image1.jpg";
import gymBackgroundImage3 from "./Image3.jpg";
import gymBackgroundImage4 from "./Image4.jpg";
import gymBackgroundImage5 from "./Image5.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState(0);
  const gymBackgroundImages = [
    gymBackgroundImage1,
    gymBackgroundImage3,
    gymBackgroundImage4,
    gymBackgroundImage5,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBackgroundImage(
        (currentBackgroundImage + 1) % gymBackgroundImages.length
      );
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentBackgroundImage, gymBackgroundImages]);

  return (
    <div className={styles.home}>
      <img
        className={styles.backgroundImage}
        src={gymBackgroundImages[currentBackgroundImage]}
        alt="Gym Background"
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>Take care of your body.</span>
          <br />
          <span className={styles.titleLine}>
            It's the only place you have to live.
          </span>
        </h1>
        <Link to="/Register">
          <button className={styles.joinButton}>Join With Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
