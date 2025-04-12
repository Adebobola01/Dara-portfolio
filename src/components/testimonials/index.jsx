import styles from "./testimonials.module.scss";
import starsIcon from "../../assets/stars.png";

const Testimonial = ({ content, name, profession }) => {
  return (
    <div className={styles.testimonial_container}>
      <blockquote>{`" ${content} "`}</blockquote>
      <span>- {name}</span>
      <p>{profession}</p>
      <img src={starsIcon} alt="stars icon" />
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2>Testimonials</h2>
      <div>
        <Testimonial
          content={
            "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia."
          }
          name="Person 1"
          profession="Profession"
        />
        <Testimonial
          content={
            "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia."
          }
          name="Person 2"
          profession="Profession"
        />
      </div>
    </section>
  );
};

export default Testimonials;
