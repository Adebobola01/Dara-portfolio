import styles from "./navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      {/* <div> */}
      <a href="/">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>

      {/* </div> */}
      {/* <ToggleBtn click={props.toggleClick} opened={props.toggleOpen} /> */}
    </nav>
  );
};

export default Navigation;
