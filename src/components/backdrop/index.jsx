import styles from "./backdrop.module.scss";

const Backdrop = ({ open, onClick }) => {
  return (
    <div
      className={styles.backdrop}
      style={{ display: open ? "block" : "none" }}
      onClick={onClick}
    ></div>
  );
};

export default Backdrop;
