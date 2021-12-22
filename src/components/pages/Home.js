import React from "react";

export default function Home() {
  const styles = {
    title: {
      textAlign: "center",
      margin: "2rem 0 5rem 0",
    },
    main: {
      fontSize: "50px",
      textAlign: "center",
    },
  };
  return (
    <div>
      <h1 style={styles.title}>Welcome!</h1>
      <p style={styles.main}>Hi, my name is Chris and I write code!</p>
    </div>
  );
}
