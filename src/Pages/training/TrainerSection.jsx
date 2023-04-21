import React, { useState } from "react";
import styles from "./TrainingProgram.module.css";
import { Link } from "react-router-dom";

const trainers = [
  {
    id: 1,
    name: "John Doe",
    image:
      "https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialty: "Body Building",
    description:
      "John is an experienced bodybuilder with over 10 years of experience. He has won several competitions and is known for his expertise in strength training.",
  },
  {
    id: 2,
    name: "Jane Doe",
    image:
      "https://images.pexels.com/photos/3822668/pexels-photo-3822668.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialty: "Aerobics",
    description:
      "Jane is a certified aerobics instructor with a passion for helping people achieve their fitness goals. She specializes in high-intensity workouts that get results.",
  },
  {
    id: 3,
    name: "Denise Austin",
    image:
      "      https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialty: "Yoga",
    description:
      "Denise is a certified yoga instructor with a focus on mindfulness and relaxation. She believes that yoga is not just a physical practice, but a way of life.",
  },
  {
    id: 4,
    name: "Alice Johnson",
    image:
      "https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialty: "Flexibility",
    description:
      "Alice is a flexibility expert with a background in dance. She specializes in stretching and mobility exercises that can help improve your posture and prevent injuries.",
  },
  {
    id: 5,
    name: "Natasha",
    image:
      "https://images.unsplash.com/photo-1599552683573-9dc48255fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHp1bWJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    specialty: "Zumba",
    description:
      "Natasha is a certified Zumba instructor with a passion for dance and fitness. She believes that exercise should be fun and accessible to everyone.",
  },
];

const TrainerCard = ({ trainer, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={trainer.image} alt={trainer.name} />
      <h3>{trainer.name}</h3>
      <p>{trainer.specialty}</p>
    </div>
  );
};

const TrainerPage = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const handleSignUpClick = () => {
    // Redirect the user to the register page with the selected trainer's ID
    if (selectedTrainer) {
      window.location.href = `/register?trainerId=${selectedTrainer.id}`;
    }
  };

  return (
    <div className={styles.container}>
      <h2>Meet our Trainers</h2>
      <div className={styles.scrollContainer}>
        {trainers.map((trainer) => (
          <TrainerCard
            key={trainer.id}
            trainer={trainer}
            onClick={() => setSelectedTrainer(trainer)}
          />
        ))}
      </div>
      {selectedTrainer ? (
        <div className={styles.selectedTrainer}>
          <img src={selectedTrainer.image} alt={selectedTrainer.name} />
          <h3>{selectedTrainer.name}</h3>
          <p>{selectedTrainer.description}</p>
          <button className= {styles.trainerSessionbutton} onClick={handleSignUpClick}>
            Sign up for a session with {selectedTrainer.name}
          </button>
        </div>
      ) : (
        <p style={{ color: "white" }}>
          Please select a trainer to view their details.
        </p>
      )}
    </div>
  );
};

export default TrainerPage;
