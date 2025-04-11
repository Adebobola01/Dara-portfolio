import styles from "./services.module.scss";
import analysisIcon from "../../assets/analysis.png";
import interpretationIcon from "../../assets/interpretation.png";
import visualizationIcon from "../../assets/visualization.png";

const Service = ({ image, title, details }) => {
  return (
    <div className={styles.service}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{details}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className={styles.services_section}>
      <h3>Services I Provide</h3>
      <div className={styles.services_container}>
        <Service
          image={analysisIcon}
          title="Data Analysis"
          details="Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero"
        />
        <Service
          image={interpretationIcon}
          title="Data Visualization"
          details="Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero "
        />
        <Service
          image={visualizationIcon}
          title="Data Interpretation"
          details="Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero "
        />
      </div>
    </section>
  );
};

export default Services;
