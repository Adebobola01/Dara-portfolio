import styles from "./projects.module.scss";
import { motion } from "motion/react";
const Project = ({ title, details }) => {
  return (
    <motion.div
      initial={{ y: 70, opacity: 0.75 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      className={styles.project}
    >
      <span></span>
      <div>
        <h2>{title}</h2>
        <p>{details} </p>
        <button>View Project</button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className={styles.projects_section} id="projects">
      <div className={styles.projects_header}>
        <h2>Recent Projects</h2>
        <button>View All</button>
      </div>
      <div className={styles.projects_container}>
        <Project
          title="Loren Ipsum"
          details="Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        />
        <Project
          title="Loren Ipsum"
          details="Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        />
        <Project
          title="Loren Ipsum"
          details="Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        />
      </div>
    </section>
  );
};

export default Projects;
