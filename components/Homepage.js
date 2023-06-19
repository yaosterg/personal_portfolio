import React from "react";
import styles from "../styles/Homepage.module.css";
import Typewriter from "typewriter-effect";

export default function Homepage() {
  return (
    <>
      <div className={styles.aboutmediv} id="Home">
        <div className={styles.aboutmeintro}></div>

        <div className={styles.aboutmeintro}>
          {" "}
          <h1 className={styles.typewriteheader}>
            <Typewriter
              options={{
                strings: [
                  "Hello there, my name is Yao Guan",
                  "Welcome to my portfolio page!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h4 className={styles.typewritetext}>
            {" "}
            <Typewriter
              options={{
                strings: ["I am a New York based Full Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h4>
        </div>
      </div>
    </>
  );
}
