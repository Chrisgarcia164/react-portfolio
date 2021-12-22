import React from "react";
import moodvie from "../images/Moodvie.png";
import interactions from "../images/DrugInteraction.png";
export default function Work() {
  const styles = {
    card: {
      border: "1px solid black",
      width: "20rem",
      backgroundColor: "white",
    },
    cards: {
      textAlign: "center",
      display: "flex",
      margin: "2rem",
      gap: "5rem",
    },
    img: {
      width: "20rem",
    },
  };
  return (
    <div>
      <div>
        <h2>Work</h2>
        <div style={styles.cards}>
          <div style={styles.card}>
            <h2>Moodvie</h2>
            <a href="https://teddysahr.github.io/project-1/">
              <img style={styles.img} src={moodvie} alt="Moodvie project" />
            </a>
            <p>
              Moodvie is a website where you can search for availability for any
              movie
            </p>
            <a href="https://github.com/teddysahr/project-1">
              Link to GitHub repository
            </a>
          </div>
          <div style={styles.card}>
            <h2>My Interactions</h2>
            <a href="https://my-interactions.herokuapp.com/">
              <img
                style={styles.img}
                src={interactions}
                alt="My interactions app"
              />
            </a>
            <p>
              My Interactions is a website that will inform you between the
              relationship between any two drugs
            </p>
            <a href="https://github.com/teddysahr/project-1">
              Link to GitHub repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
