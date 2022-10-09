import React from "react";
import styles from "./SideBar.module.css";
import {
  MapPin,
  Suitcase,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";

export function SideBar(props) {
  return (
    <aside>
      <div>
        <div className={styles.card}>
          <div></div>
          <img
            className={styles.avatar}
            src="https://github.com/Caiotc.png"
            alt=""
          />
          <strong>Caio Theodoro de Carvalho</strong>
          <footer>
            <p> Front-End Developer</p>
          </footer>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.personalInfoCard}>
          <p>
            <MapPin />
            Brasil-SP
          </p>
          <p>
            <Suitcase /> DealerTrack
          </p>
          <p>
            <GithubLogo />{" "}
            <a href="https://github.com/Caiotc">github.com/Caiotc </a>
          </p>
          <p>
            <LinkedinLogo />{" "}
            <a href="https://www.linkedin.com/in/caio-theodoro-978692149/">
              My linkedin
            </a>
          </p>
          <p>
            <TwitterLogo />{" "}
            <a href="https://twitter.com/CaioTheodoro5">@CaioTheodoro5</a>
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.technologyCard}>
          <strong>Technology</strong>
          <div className={styles.technologyTagsContainer}>
            <a>
              <strong>C</strong>
            </a>
            <a>
              <strong>HTML</strong>
            </a>
            <a>
              <strong>CSS</strong>
            </a>
            <a>
              <strong>JAVASCRIPT</strong>
            </a>
            <a>
              <strong>DOTNET</strong>
            </a>
            <a>
              <strong>SQL</strong>
            </a>
            <a>
              <strong>NODEJS</strong>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.experiencesCard}>
          <strong>Experiences</strong>
          <div className={styles.experiencesContainer}>
            <div>
              <strong>Cox Automotive</strong>
              <p>november 2021 - at the moment</p>
              <p>software engineer</p>
            </div>
            <div>
              <strong>Agrotools</strong>
              <p>january 2021 - november 2021</p>
              <p>Software development intership</p>
            </div>
            <div>
              <strong>WeMakeTech</strong>
              <p>january 2019 - febreuary 2020</p>
              <p>Back-End Developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.experiencesCard}>
          <strong>Education</strong>
          <div className={styles.experiencesContainer}>
            <div>
              <strong>UNIFESP</strong>
              <p>2019 - at the moment</p>
              <p>Interdisciplinary cience and technology bachelors</p>
            </div>
            <div>
              <strong>RocketSeat</strong>
              <p>november 2022 - at the moment</p>
              <p>Ignite Bootcamp</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
