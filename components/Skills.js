import React, { useEffect, useState } from "react";
import styles from "../styles/Skills.module.css";
import Button from "@mui/material/Button";

export default function Skills() {
  const [carousel, setCarousel] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      carousel > 10 ? setCarousel(0) : setCarousel(carousel + 1);
    }, 1500);
    return () => {};
  }, [carousel]);
  return (
    <div id={styles.carouselbox}>
      <section className={styles.carousel}>
        <ul className={styles.carousel__list}>
          <li
            className={styles.carousel__item}
            id={carousel === 0 ? styles.data_active : null}
          >
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="../images/HTML.webp"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>HTML</h2>
              <h3 className={styles.user__title}>Language</h3>
            </div>
          </li>
          <li
            className={styles.carousel__item}
            id={carousel === 1 ? styles.data_active : null}
          >
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="../images/Javascript.png"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Javascript</h2>
              <h3 className={styles.user__title}>Language</h3>
            </div>
          </li>
          <li
            className={styles.carousel__item}
            id={carousel === 2 ? styles.data_active : null}
          >
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="../images/Python.jpeg"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Python</h2>
              <h3 className={styles.user__title}>Language</h3>
            </div>
          </li>
          <li
            className={styles.carousel__item}
            id={carousel === 3 ? styles.data_active : null}
          >
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="../images/React.png"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>React.js</h2>
              <h3 className={styles.user__title}>Library</h3>
            </div>
          </li>
          <li
            className={styles.carousel__item}
            id={carousel === 4 ? styles.data_active : null}
          >
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="../images/Postgresql.svg"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>PostgreSQL</h2>
              <h3 className={styles.user__title}>Database</h3>
            </div>
          </li>

          <li
            className={styles.carousel__item}
            id={carousel === 5 ? styles.data_active : null}
          >
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="../images/Redux.webp"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Redux</h2>
              <h3 className={styles.user__title}>Library</h3>
            </div>
          </li>
          <li
            className={styles.carousel__item}
            id={carousel === 6 ? styles.data_active : null}
          >
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="../images/Next.avif"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Next.js</h2>
              <h3 className={styles.user__title}>Framework</h3>
            </div>
          </li>
          <li
            className={styles.carousel__item}
            id={carousel === 7 ? styles.data_active : null}
          >
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="../images/Node.jpeg"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Node.js</h2>
              <h3 className={styles.user__title}>Runtime Environment</h3>
            </div>
          </li>
          <li
            className={styles.carousel__item}
            id={carousel === 8 ? styles.data_active : null}
          >
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="../images/Express.png"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Express</h2>
              <h3 className={styles.user__title}>Framework </h3>
            </div>
          </li>
          <li
            className={styles.carousel__item}
            id={carousel === 9 ? styles.data_active : null}
          >
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="../images/Css.jpeg"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>CSS</h2>
              <h3 className={styles.user__title}>Language</h3>
            </div>
          </li>
          <li
            className={styles.carousel__item}
            id={carousel === 10 ? styles.data_active : null}
          >
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="https://cdn-media-1.freecodecamp.org/images/0*CPTNvq87xG-sUGdx.png"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Firebase</h2>
              <h3 className={styles.user__title}>Cloud</h3>
            </div>
          </li>
          <li
            className={styles.carousel__item}
            id={carousel === 11 ? styles.data_active : null}
          >
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="https://cdn-images-1.medium.com/v2/resize:fit:2050/1*BKssrX-qEmyN6YaRNTvNlw.png"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Material UI</h2>
              <h3 className={styles.user__title}>Component Library</h3>
            </div>
          </li>
        </ul>

        <div className={styles.carousel__nav}>
          <h1>Technical Skills</h1>
          {/* <Button className="prev" variant="primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-big-left-filled"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z"
                strokeWidth="0"
                fill="currentColor"
              ></path>
            </svg>
          </Button>

          <Button className="next" variant="primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-big-right-filled"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z"
                strokeWidth="0"
                fill="currentColor"
              ></path>
            </svg>
          </Button> */}
        </div>
      </section>
    </div>
  );
}
