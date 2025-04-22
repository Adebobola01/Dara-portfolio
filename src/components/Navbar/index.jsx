import Logo from "../Logo";
import styles from "./navbar.module.scss";
import Navigation from "../Navigation";

const Navbar = () => (
  <header className={styles.header}>
    <div className={styles.header_container}>
      <Logo />
      <Navigation />
    </div>
  </header>
);

export default Navbar;
