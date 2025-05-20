import styles from "./hero.module.scss";
import HeroImg from "../../assets/hero1.png";
import HeroImg2 from "../../assets/hero2.png";
import HeroImg3 from "../../assets/hero3.png";
import { motion } from "motion/react";

const Hero = ({ hireButtonClick }) => {
  return (
    <section className={styles.hero} id="home">
      <motion.div
        initial={{ y: 70, opacity: 0.75 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className={styles.hero_details}
      >
        <p>Hi, I’m Oluwadara Olasunkanmi</p>
        <p>DATA ANALYST</p>
        <div className={styles.hero_details_btns}>
          <button onClick={hireButtonClick}>Hire Me</button>
          <button className="white_btn">Download CV</button>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -30, opacity: 0.75 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className={styles.hero_image_container}
      >
        <img src={HeroImg} alt="hero image 1" />
        <img src={HeroImg2} alt="hero image 2" />
        <img src={HeroImg3} alt="hero image 3" />
      </motion.div>
    </section>
  );
};

export default Hero;
