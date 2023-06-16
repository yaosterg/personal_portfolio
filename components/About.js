import React from "react";
import styles from "../styles/About.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.aboutmediv} id="About">
      <div className={styles.box}>
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
          <h1>Education & Experience:</h1>
          <h4>
            2023: XPC Healthcare + AI Hackathon. Development of Subi-Health,
            your personalized aim at patient empowerment and education.
            healthcare companion
          </h4>
          <h4>2023: Fullstack Academy - 17 week immersive program</h4>
          <h4>
            2021-2023: COVID Program Director & immunization lead at Mannings
            Pharmacy Corp
          </h4>
          <h4>2019-2023: Supervising pharmacist at Mannings Pharmacy Corp</h4>
          <h4>
            2018-2019: Staff Pharmacist at Mannings & Mannings 8th Avenue Corp
          </h4>
          <h4>
            2012-2018: University at Buffalo, School of Pharmacy and
            Pharmeutical Science - Doctorate of Pharmacy
          </h4>
        </div>{" "}
      </div>
    </div>
  );
}
