import styles from "./about.module.scss";
import CheckmarkImg from "../../assets/checkmark.svg";
import image from "../../assets/dara's_pic.png";
import { motion } from "motion/react";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.about_profile}>
        <motion.div
          initial={{ y: 70, opacity: 0.75 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className={styles.about_profile_details}
        >
          <img
            src={image}
            alt="Dara's picture"
            className={styles.about_profile_details_image}
          />
          {/* <span className={styles.about_profile_details_image}></span> */}
          <div>
            <p>Oluwadara Olasukanmi</p>
            <span>Data Analyst</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 70, opacity: 0.75 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className={styles.about_profile_skills}
        >
          <span className={styles.about_profile_skills_skill}>
            <img src={CheckmarkImg} alt="checkmark" />
            <p> Data cleaning</p>
          </span>
          <span className={styles.about_profile_skills_skill}>
            <img src={CheckmarkImg} alt="checkmark" />
            <p> Data Collecting</p>
          </span>
          <span className={styles.about_profile_skills_skill}>
            <img src={CheckmarkImg} alt="checkmark" />
            <p> Data Exploration</p>
          </span>
          <span className={styles.about_profile_skills_skill}>
            <img src={CheckmarkImg} alt="checkmark" />
            <p> Data Visualization</p>
          </span>
          <span className={styles.about_profile_skills_skill}>
            <img src={CheckmarkImg} alt="checkmark" />
            <p> Predictive Modeling</p>
          </span>
          <span className={styles.about_profile_skills_skill}>
            <img src={CheckmarkImg} alt="checkmark" />
            <p> Group Work</p>
          </span>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 70, opacity: 0.75 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className={styles.about_details}
      >
        <h3>About Me</h3>
        <p>
          Data analyst with experience in processing, analysing and presenting
          data. Strong background in SQL, Python, Excel, Tableau, and proficient
          in using these tools to perform data manipulation, visualisation.
          Passionate about finding patterns and trends in data and using them to
          help organisations make informed decisions and achieve their goals.
        </p>
        <div>
          <button className="white_btn">Download CV</button>
          <button>My Works on GitHub</button>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
