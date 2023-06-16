import React from "react";
import styles from "../styles/Homepage.module.css";

export default function Homepage() {
  return (
    <>
      <div className={styles.aboutmediv} id="Home">
        <div className={styles.aboutmeintro}></div>

        <div className={styles.aboutmeintro}>
          {" "}
          <h1>
            Hello there, my name is <span>Yao</span>
          </h1>
          <p>{"I'm a New York based Full Stack Developer"}</p>
        </div>
      </div>
    </>
  );
}
