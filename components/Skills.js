import React, { useEffect, useState } from "react";
import styles from "../styles/Skills.module.css";
import Button from "@mui/material/Button";

export default function Skills() {
  const [carousel, setCarousel] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      carousel > 10 ? setCarousel(0) : setCarousel(carousel + 1);
      console.log(carousel);
    }, 3000);
    return () => {};
  }, [carousel]);
  return (
    <div id={styles.carouselbox}>
      <section className={styles.carousel}>
        <ul className={styles.carousel__list}>
          <li className={styles.carousel__item}>
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=687&q=80"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Anthony Lee</h2>
              <h3 className={styles.user__title}>
                Archetypal Professor of Recognition
              </h3>
            </div>
          </li>
          <li className={styles.carousel__item}>
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=688&q=80"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Alicia Chevalier</h2>
              <h3 className={styles.user__title}>
                Corporate Usability Analyst
              </h3>
            </div>
          </li>
          <li className={styles.carousel__item}>
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=687&q=80"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Nate Boucher</h2>
              <h3 className={styles.user__title}>Customer Impact Officer</h3>
            </div>
          </li>
          <li className={styles.carousel__item}>
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="https://images.unsplash.com/photo-1614204424926-196a80bf0be8?fit=crop&w=687&q=80"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Leah Harris</h2>
              <h3 className={styles.user__title}>Designer and Bandit </h3>
            </div>
          </li>
          <li
            className={styles.carousel__item}
            id={carousel === 2 ? styles.data_active : null}
          >
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="https://pbs.twimg.com/card_img/1644247183221223426/WvG3uTyd?format=png&name=medium"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>React.js</h2>
              <h3 className={styles.user__title}>Technology</h3>
            </div>
          </li>
          <li className={styles.carousel__item}>
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=688&q=80"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Gal Gadot</h2>
              <h3 className={styles.user__title}>
                Acting Designer and Consultant{" "}
              </h3>
            </div>
          </li>
          <li className={styles.carousel__item}>
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?fit=crop&w=687&q=80"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Albert Sørensen</h2>
              <h3 className={styles.user__title}>
                Neural Big Shot of Anticipation{" "}
              </h3>
            </div>
          </li>
          <li className={styles.carousel__item}>
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="https://images.unsplash.com/photo-1553514029-1318c9127859?fit=crop&w=764&q=80"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Candice Marchand</h2>
              <h3 className={styles.user__title}>
                Mindful Realist of Motion Laws{" "}
              </h3>
            </div>
          </li>
          <li className={styles.carousel__item}>
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="https://images.unsplash.com/photo-1596813362035-3edcff0c2487?fit=crop&w=735&q=80"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Jennifer Salazar</h2>
              <h3 className={styles.user__title}>Design Habitué </h3>
            </div>
          </li>
          <li className={styles.carousel__item}>
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?fit=crop&w=687&q=80"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Antonin Dufour</h2>
              <h3 className={styles.user__title}>Human-Centered Designer</h3>
            </div>
          </li>
          <li className={styles.carousel__item}>
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="https://images.unsplash.com/photo-1530785602389-07594beb8b73?fit=crop&w=687&q=80"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Melissa Simon</h2>
              <h3 className={styles.user__title}>
                International Infrastructure Analyst
              </h3>
            </div>
          </li>
          <li className={styles.carousel__item}>
            <div className={styles.carousel__image}>
              <img
                className={styles.carousel__item__img}
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&w=687&q=80"
                width="480"
                height="720"
              />
            </div>
            <div className={styles.carousel__contents}>
              <h2 className={styles.user__name}>Brandon Murray</h2>
              <h3 className={styles.user__title}>Central Functionality VP</h3>
            </div>
          </li>
        </ul>

        <div className={styles.carousel__nav}>
          <Button className="prev" variant="primary">
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
          </Button>
        </div>
      </section>
    </div>
  );
}
