import React from "react";
import styles from "../styles/Homepage.module.css";

export default function AboutMe() {
  return (
    <>
      <div id={styles.aboutmediv}>
        <div className={styles.aboutmeintro}></div>

        <div className={styles.aboutmeintro}>
          {" "}
          <h1>
            Hi, my name is <span>Yao Guan</span>
          </h1>
          <p>I'm a New York based Full Stack Developer</p>
        </div>
      </div>
    </>
  );
}
