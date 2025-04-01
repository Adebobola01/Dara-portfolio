import Logo from "../Logo";
import styles from "./navbar.module.scss";
import Navigation from "../Navigation";

const Navbar = () => (
  <header className={styles.header}>
    <Logo />
    <Navigation />
  </header>
);

export default Navbar;
