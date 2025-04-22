import React from "react";
import styles from "./toggleBtn.module.scss";

const ToggleBtn = ({ click }) => {
  return (
    <button className={`${styles.toggleButton}`} onClick={click}>
      <span className={`${styles.toggle_button__bar} `}></span>
      <span className={`${styles.toggle_button__bar} `}></span>
      <span className={`${styles.toggle_button__bar} `}></span>
    </button>
  );
};

export default ToggleBtn;
