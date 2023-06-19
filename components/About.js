import React from "react";
import styles from "../styles/About.module.css";
import Link from "next/link";
import { Flex, Spacer } from "@chakra-ui/react";
export default function About() {
  return (
    <div className={styles.aboutmediv} id="About">
      <div className={styles.box}>
        <Flex>
          {" "}
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
        </Flex>
        <div className={styles.aboutmeinfo}>
          <h1>Education & Experience:</h1>
          <p>
            2023: XPC Healthcare + AI Hackathon. Development of Subi-Health,
            your personalized aim at patient <br></br>empowerment and education.
            healthcare companion
          </p>
          <p>2023: Fullstack Academy - 17 week immersive program</p>
          <p>
            2021-2023: COVID Program Director & immunization lead at Mannings
            Pharmacy Corp
          </p>
          <p>2019-2023: Supervising pharmacist at Mannings Pharmacy Corp</p>
          <p>
            2018-2019: Staff Pharmacist at Mannings & Mannings 8th Avenue Corp
          </p>
          <p>
            2012-2018: University at Buffalo, School of Pharmacy and
            Pharmeutical Science - Doctorate of Pharmacy
          </p>
        </div>{" "}
      </div>
    </div>
  );
}
