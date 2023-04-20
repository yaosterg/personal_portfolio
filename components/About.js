import React from "react";
import styles from "../styles/About.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.aboutmediv}>
      <div className={styles.aboutmeinfo}>
        <h1>ABOUT</h1>
        <p>{"I'm curious, ambitious, and love new challenges :)"}</p>
        <p>My interest focuses on new and emerging tech</p>
        <p> Formerly a healthcare provider, Pharmacist.</p>
        <p>
          {" "}
          Hobbies: Snowboarding, bouldering, volleyball, baking, trying new
          restaurants, anime, GoT & HotD Fan
        </p>
      </div>

      <div className={styles.aboutmeinfo}>
        <h1>CONTACT</h1>
        <div className={styles.contactinfo}>
          <div>
            <p>Yao Guan</p>
            <p>New York, NY</p>
            <p>yaozongguan@gmail.com</p>
          </div>
          <div>
            <Link className={styles.resumeinfo} href="/resume.pdf">
              Resume
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.aboutmeinfo}>
        <h1>Education</h1>
        <h4>2023: Fullstack Academy - 17 week immersive program</h4>
        <h4>
          2018: University at Buffalo, School of Pharmacy and Pharmeutical
          Science - Doctorate of Pharmacy
        </h4>
      </div>
    </div>
  );
}
