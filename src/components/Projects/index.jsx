import styles from "./projects.module.scss";
import { motion } from "motion/react";

import ProjectImg from "../../assets/flood.png";
import ProjectImg2 from "../../assets/geospatial.png";
import ProjectImg3 from "../../assets/Retail-sales.png";

const Project = ({ title, details, img, link }) => {
  return (
    <motion.div
      initial={{ y: 70, opacity: 0.75 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      className={styles.project}
    >
      <img src={img} alt="project image" />
      <div>
        <h2>{title}</h2>
        <p>{details} </p>
        <a href={link} target="_blank" >View Project</a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className={styles.projects_section} id="projects">
      <div className={styles.projects_header}>
        <h2>Recent Projects</h2>
        <a href="https://github.com/Akoriola/Portfolio_Projects">View All</a>
      </div>
      <div className={styles.projects_container}>
        <Project
          title="Initial Insight from Retail Sales Data"
          details="In this project, a dataset containing retail sales data was analyzed to identify initial insights. The objective was to provide a quick review of the dataset and present observations that could inform further analysis."
          img={ProjectImg}
          link="https://github.com/Akoriola/HNG/blob/main/Sales%20data%20sample(stage%200%20HNG).ipynb"
        />
        <Project
          title="Outlier Detection in Election Data Using Geospatial Analysis"
          details="This project aimed to identify potential voting irregularities in election results by detecting outlier polling units where the voting results deviated significantly from neighboring units. The focus was on ensuring the transparency and integrity of the election results."
          img={ProjectImg2}
          link="https://github.com/Akoriola/HNG/blob/main/outlier%20detection%20(hng%20stage1).ipynb"
        />
        <Project
          title="Flood Prediction in Lagos"
          details="This project involved predicting the likely date of the next flood in Lagos using historical flood data, weather patterns, and other relevant data sources. The objective was to develop a predictive model that could help authorities and residents prepare for potential flooding events."
          img={ProjectImg3}
          link="https://github.com/Akoriola/HNG/blob/main/Flood%20prediction%20Stage%202(HNG)%20(1).ipynb"
        />
      </div>
    </section>
  );
};

export default Projects;
