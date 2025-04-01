import styles from "./hero.module.scss";
import HeroImg from "../../assets/hero.png";
import HeroImg2 from "../../assets/hero2.png";
import { useState } from "react";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const toggleImage = () => {
    setHover(!hover);
  };

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
      <img
        src={hover ? HeroImg2 : HeroImg}
        onMouseOver={toggleImage}
        alt="hero image"
        onMouseLeave={toggleImage}
      />
    </section>
  );
};

export default Hero;
