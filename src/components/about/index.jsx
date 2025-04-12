import styles from "./about.module.scss";
import CheckmarkImg from "../../assets/checkmark.svg";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.about_profile}>
        <div className={styles.about_profile_details}>
          {/* <img /> */}
          <span className={styles.about_profile_details_image}></span>
          <div>
            <p>Oluwadara Olasukanmi</p>
            <span>Data Analyst</span>
          </div>
        </div>
        <div className={styles.about_profile_skills}>
          <span className={styles.about_profile_skills_skill}>
            <img src={CheckmarkImg} alt="checkmark" />
            <p> Data cleaning</p>
          </span>
          <span className={styles.about_profile_skills_skill}>
            <img src={CheckmarkImg} alt="checkmark" />
            <p> Data cleaning</p>
          </span>
          <span className={styles.about_profile_skills_skill}>
            <img src={CheckmarkImg} alt="checkmark" />
            <p> Data cleaning</p>
          </span>
          <span className={styles.about_profile_skills_skill}>
            <img src={CheckmarkImg} alt="checkmark" />
            <p> Data cleaning</p>
          </span>
          <span className={styles.about_profile_skills_skill}>
            <img src={CheckmarkImg} alt="checkmark" />
            <p> Data cleaning</p>
          </span>
        </div>
      </div>
      <div className={styles.about_details}>
        <h3>About Me</h3>
        <p>
          Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
          condimentum ac, vestibulum eu nisl. Curabitur tempus urna at turpis
          condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper
          iaculis condimentum ac, vestibulum eu nisl. Vestibulum eu nisl.
          Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
          efficitur neque. Ut diam quam, semper iaculis condimentum ac,
          vestibulum eu nisl
        </p>
        <div>
          <button className="white_btn">Download CV</button>
          <button>My Works on GitHub</button>
        </div>
      </div>
    </section>
  );
};

export default About;
