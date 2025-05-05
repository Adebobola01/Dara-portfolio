import React from "react";
import styles from "./toggleBtn.module.scss";

const ToggleBtn = ({ click, openDrawer }) => {
  console.log(openDrawer);
  return (
    <button className={`${styles.toggleButton}`} onClick={click}>
      <span
        className={`${styles.toggle_button__bar} ${
          openDrawer ? styles.toggle_trans : null
        } `}
      ></span>
      <span
        className={`${styles.toggle_button__bar} ${
          openDrawer ? styles.toggle_trans : null
        }`}
      ></span>
      <span
        className={`${styles.toggle_button__bar} ${
          openDrawer ? styles.toggle_trans : null
        }`}
      ></span>
    </button>
  );
};

export default ToggleBtn;
