import React from "react";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projectscontainer} id="Projects">
      <div className={styles.projectsproject}>
        <div className={styles.projects_container}>
          <div
            className={styles.projectatag}
            href="https://unsplash.com/photos/fsH1KjbdjE8"
            target="_blank"
          >
            <div className={styles.project}>
              <img
                className={styles.projectimgtag}
                src="../images/Fatstack/main.png"
              />
              <div className={styles.project__content}>
                <h2>Fat Stack</h2>
              </div>
            </div>
          </div>
          <div
            className={styles.projectatag}
            href="https://unsplash.com/photos/QwoNAhbmLLo"
            target="_blank"
          >
            <div className={styles.project}>
              <img
                className={styles.projectimgtag}
                src="../images/Fatstack/bio.png"
              />
              <div className={styles.project__content}>
                <h3>
                  Track, view and analyze personal finances with ease. Integrate
                  with banking and spending data or use standalone.
                </h3>
              </div>
            </div>
          </div>
          <a
            className={styles.projectatag}
            href="https://fat-stack.onrender.com/"
            target="_blank"
          >
            <div className={styles.project}>
              <img
                className={styles.projectimgtag}
                src="../images/Fatstack/demo.png"
              />
              <div className={styles.project__content}>
                <h2>Demo</h2>
              </div>
            </div>
          </a>
          <a
            className={styles.projectatag}
            href="https://www.youtube.com/watch?v=WcWmsI1jO9E&list=PLx0iOsdUOUmm3RLOnoRpUArwuuVa5_u9r&index=10"
            target="_blank"
          >
            <div className={styles.project}>
              <img
                className={styles.projectimgtag}
                src="../images/Fatstack/youtube.png"
                alt="space-04"
              />
              <div className={styles.project__content}>
                <h2>Youtube</h2>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.projects_container1}>
          <div className={styles.projects_title}>
            <h1>Projects</h1>
          </div>
          <div className={styles.projectatag}>
            <div className={styles.project}>
              <img
                className={styles.projectimgtag}
                src="../images/Hod/main.png"
              />
              <div className={styles.project__content}>
                <h2>House of Divide</h2>
              </div>
            </div>
          </div>
          <div
            className={styles.projectatag}
            href="https://unsplash.com/photos/QwoNAhbmLLo"
            target="_blank"
          >
            <div className={styles.project}>
              <img
                className={styles.projectimgtag}
                src="../images/Hod/bio.png"
              />
              <div className={styles.project__content}>
                <h3>
                  A RESTful web platform that allows for CRUD operations on
                  campus-student information.
                </h3>
              </div>
            </div>
          </div>
          <a
            className={styles.projectatag}
            href="https://houseofdividee.vercel.app/"
            target="_blank"
          >
            <div className={styles.project}>
              <img
                className={styles.projectimgtag}
                src="../images/Hod/demo.png"
                alt="space-03"
              />
              <div className={styles.project__content}>
                <h2>Demo</h2>
              </div>
            </div>
          </a>
        </div>
        <div className={styles.projects_container}>
          <div className={styles.projectatag}>
            <div className={styles.project}>
              <img
                className={styles.projectimgtag}
                src="../images/striide/main.png"
                alt="space-01"
              />
              <div className={styles.project__content}>
                <h2>STRIIDE</h2>
              </div>
            </div>
          </div>
          <div className={styles.projectatag}>
            <div className={styles.project}>
              <img
                className={styles.projectimgtag}
                src="../images/striide/bio.png"
                alt="space-02"
              />
              <div className={styles.project__content}>
                <h3>
                  Full stack app serving users as an e-commerce, while allowing
                  admins to analyze and manage users and product data
                </h3>
              </div>
            </div>
          </div>
          <a
            className={styles.projectatag}
            href="https://striiide.onrender.com/"
            target="_blank"
          >
            <div className={styles.project}>
              <img
                className={styles.projectimgtag}
                src="../images/striide/demo.png"
                alt="space-03"
              />
              <div className={styles.project__content}>
                <h2>Demo</h2>
              </div>
            </div>
          </a>
          <a
            className={styles.projectatag}
            href="https://www.youtube.com/watch?v=Oaci8Ilac7g"
            target="_blank"
          >
            <div className={styles.project}>
              <img
                className={styles.projectimgtag}
                src="../images/striide/youtube.png"
                alt="space-04"
              />
              <div className={styles.project__content}>
                <h2>Youtube</h2>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
