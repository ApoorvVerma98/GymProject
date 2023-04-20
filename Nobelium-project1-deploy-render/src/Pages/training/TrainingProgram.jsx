import React, { useRef } from "react";
import styles from "./TrainingProgram.module.css";
import TrainerPage from "./TrainerSection";

const programs = [
  {
    id: 1,
    name: "Body Building",
    description:
      "Build muscle and strength through weightlifting and resistance training.",
    imageUrl:
      "https://images.pexels.com/photos/4854251/pexels-photo-4854251.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Aerobics",
    description:
      "Improve cardiovascular health and burn calories with high-intensity, low-impact exercises.",
    imageUrl:
      "https://images.pexels.com/photos/8436753/pexels-photo-8436753.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Yoga",
    description:
      "Increase flexibility and mindfulness with various yoga poses and techniques.",
    imageUrl:
      "https://images.pexels.com/photos/8172920/pexels-photo-8172920.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Flexibility",
    description:
      "Improve mobility and range of motion with stretching exercises and techniques.",
    imageUrl:
      "https://images.pexels.com/photos/3823086/pexels-photo-3823086.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Zumba",
    description:
      "Dance to upbeat music and burn calories with this fun and energetic workout.",
    imageUrl:
      "https://images.pexels.com/photos/13409546/pexels-photo-13409546.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const TrainingPrograms = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollLeft -= 200;
  };

  const scrollRight = () => {
    containerRef.current.scrollLeft += 200;
  };

  return (
    <>
      <div className={styles.container}>
        <h2>Training Programs </h2>
        <div className={styles.scrollContainer} ref={containerRef}>
          {programs.map((program) => (
            <div key={program.id} className={styles.card}>
              <img src={program.imageUrl} alt={program.name} />
              <h2>{program.name}</h2>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.arrowContainer}>
          <button onClick={scrollLeft} className={styles.button}>&#8249;</button>
          <button onClick={scrollRight} className={styles.button}>&#8250;</button>
        </div>
      </div>
      <TrainerPage />
    </> 
  );
};

export default TrainingPrograms;

