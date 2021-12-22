import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  const styles = {
    header: {
      fontSize: "30px",
      display: "flex",
      justifyContent: "space-around",
      textDecoration: "none",
      listStyle: "none",
      border: "1px solid black",
      alignItems: "center",
    },
    button: {
      border: "2px solid black ",
      margin: "1rem 0 .5rem 0 ",
      padding: "0 1rem",
      borderRadius: "5px",
      fontSize: "20px",
    },
    a: {
      color: "black",
    },
  };
  return (
    <ul style={styles.header}>
      <li>Christopher Garcia</li>
      <li style={styles.button}>
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          style={styles.a}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li style={styles.button}>
        <a
          style={styles.a}
          href="#about"
          onClick={() => handlePageChange("About")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li style={styles.button}>
        <a
          style={styles.a}
          href="#Work"
          onClick={() => handlePageChange("Work")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Blog" ? "nav-link active" : "nav-link"}
        >
          Work
        </a>
      </li>
      <li style={styles.button}>
        <a
          style={styles.a}
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
