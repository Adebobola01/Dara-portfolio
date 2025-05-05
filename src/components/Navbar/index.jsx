import Logo from "../Logo";
import styles from "./navbar.module.scss";
import Navigation from "../Navigation";

const Navbar = ({ drawerHandler, openDrawer }) => (
  <header className={styles.header}>
    <div className={styles.header_container}>
      <Logo />
      <Navigation drawerHandler={drawerHandler} openDrawer={openDrawer} />
    </div>
  </header>
);

export default Navbar;
