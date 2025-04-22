import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import styles from "./navigation.module.scss";
import ToggleBtn from "../toggleBtn";

const Navigation = () => {
  const lenis = useRef(null);
  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 0.6, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });
    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    lenis.current.scrollTo(element);
  };
  return (
    <>
      <nav className={styles.navigation}>
        {/* <div> */}
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("services")}>Services</button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
        <button onClick={() => scrollToSection("footer")}>Contact</button>

        {/* </div> */}
        {/* <ToggleBtn click={props.toggleClick} opened={props.toggleOpen} /> */}
      </nav>
      <ToggleBtn />
    </>
  );
};

export default Navigation;
