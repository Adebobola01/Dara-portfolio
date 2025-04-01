import styles from "./hero.module.scss";
import HeroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_details}>
        <p>Hi, I’m Oluwadara Olasunkanmi</p>
        <p>DATA ANALYST</p>
        <div className={styles.hero_details_btns}>
          <button>Hire Me</button>
          <button>Download CV</button>
        </div>
      </div>
      <img src={HeroImg} alt="hero image" />
    </section>
  );
};

export default Hero;
