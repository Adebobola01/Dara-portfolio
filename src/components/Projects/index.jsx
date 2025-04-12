import styles from "./projects.module.scss";

const Project = ({ title, details }) => {
  return (
    <div className={styles.project}>
      <span></span>
      <div>
        <h2>{title}</h2>
        <p>{details} </p>
        <button>View Project</button>
      </div>
    </div>
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
