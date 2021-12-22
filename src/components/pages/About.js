import React from "react";

export default function About() {
  const styles = {
    title: {
      textAlign: "center",
    },
    main: {
      fontSize: "25px",
      marginTop: "5rem",
    },
    section: {
      display: "flex",
      justifyContent: "center",
      gap: "4rem",
    },
  };
  return (
    <div>
      <h1 style={styles.title}>About Me</h1>
      <div style={styles.section}>
        <div style={styles.main}>
          <h2>Hobbies</h2>
          <ul>
            <li>Lifting</li>
            <li>Coding</li>
            <li>Football</li>
          </ul>
        </div>
        <div style={styles.main}>
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
