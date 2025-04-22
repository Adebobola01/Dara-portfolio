import styles from "./services.module.scss";
import analysisIcon from "../../assets/analysis.png";
import interpretationIcon from "../../assets/interpretation.png";
import visualizationIcon from "../../assets/visualization.png";
import { motion } from "motion/react";
const Service = ({ image, title, details }) => {
  return (
    <motion.div
      initial={{ y: 70, opacity: 0.75 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      className={styles.service}
    >
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{details}</p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className={styles.services_section} id="services">
      <h3>Services I Provide</h3>
      <div className={styles.services_container}>
        <Service
          image={analysisIcon}
          title="Data Analysis"
          details="Identify trends, patterns, and anomalies"
        />
        <Service
          image={interpretationIcon}
          title="Data Visualization"
          details="Build interactive dashboards and charts using Power BI orTableau."
        />
        <Service
          image={visualizationIcon}
          title="Data Interpretation"
          details="Interpret results to support business or research decisions"
        />
        <Service
          image={visualizationIcon}
          title="Data Preparation"
          details="Prepare raw data for analysis using tools like Excel, Python (Pandas), or SQL"
        />
        <Service
          image={visualizationIcon}
          title="Data Documentation"
          details="Document data sources, processes, and metrics for team understanding and transparency"
        />
        <Service
          image={visualizationIcon}
          title="Data querying"
          details="Using SQL to extract, join, and manipulate data from relational databases"
        />
      </div>
    </section>
  );
};

export default Services;
