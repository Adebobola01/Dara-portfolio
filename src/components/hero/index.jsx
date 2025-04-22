import styles from "./hero.module.scss";
import HeroImg from "../../assets/hero1.png";
import HeroImg2 from "../../assets/hero2.png";
import HeroImg3 from "../../assets/hero3.png";

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.hero_details}>
        <p>Hi, I’m Oluwadara Olasunkanmi</p>
        <p>DATA ANALYST</p>
        <div className={styles.hero_details_btns}>
          <button>Hire Me</button>
          <button className="white_btn">Download CV</button>
        </div>
      </div>
      <div className={styles.hero_image_container}>
        <img src={HeroImg} alt="hero image 1" />
        <img src={HeroImg2} alt="hero image 2" />
        <img src={HeroImg3} alt="hero image 3" />
      </div>
    </section>
  );
};

export default Hero;
