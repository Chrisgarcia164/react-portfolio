import React from "react";
const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between",
  },
  h1: {},
  buttons: {
    margin: "1rem",
    padding: ".75rem 2rem",
    background: "white",
    border: "solid 1px black",
    borderRadius: "5px",
  },
};
export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.h1}>Christopher Garcia</h1>
      <div>
        <a href="#">
          <button style={styles.buttons}>Home</button>
        </a>
        <a href="#">
          <button style={styles.buttons}>About me</button>
        </a>
        <a href="#">
          <button style={styles.buttons}>Portfolio</button>
        </a>
        <a href="#">
          <button style={styles.buttons}>Resume</button>
        </a>
      </div>
    </header>
  );
}
