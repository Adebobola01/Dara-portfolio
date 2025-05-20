import styles from "./contact.module.scss";
import emailIcon from "../../assets/email_icon.png";
import githubIcon from "../../assets/github_icon.png";
import phoneIcon from "../../assets/phone_icon.png";
import whatsappIcon from "../../assets/whatsapp_icon.png";
import { useState } from "react";
import { motion } from "motion/react";

const CONTACT_LEFT_PUSH = window.innerWidth <= 900 ? "50%" : "60%";

const ContactDetails = () => {
  return (
    <div className={styles.contact_contact_me}>
      <h2>Contact Me</h2>
      <div className={styles.contact_contact_me_details}>
        <a>
          <img src={phoneIcon} alt="phone icon" />
          <p>+2348189117819</p>
        </a>
        <a>
          <img src={whatsappIcon} alt="whatsapp icon" />
          <p>WhatsApp</p>
        </a>
        <a>
          <img src={emailIcon} alt="email icon" />
          <p>Olasunkanmidara01@gmail.com</p>
        </a>
        <a target="_blank" href="https://github.com/Akoriola">
          <img src={githubIcon} alt="github icon" />
          <p>GitHub</p>
        </a>
      </div>
    </div>
  );
};

const Contact = ({ open, closeHandler }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <motion.div
      className={styles.contact_container}
      animate={{ left: open ? CONTACT_LEFT_PUSH : "-100vw" }}
      transition={{ type: "spring", duration: 1 }}
    >
      <ContactDetails />
      <form className={styles.contact_form}>
        <p onClick={closeHandler}>X</p>
        <h2>Get In Touch </h2>
        <span>Feel free to drop a message below</span>
        <input
          type="text"
          placeholder="Your Name"
          onChange={handleNameChange}
        />
        {/* <input type="text" placeholder="E"   /> */}
        <textarea
          placeholder="Type your message here..."
          onChange={handleMessageChange}
        />
        <a
          href={`mailto:Olasunkanmidara01@gmail.com?subject=${name} from portfolio &body=${message}`}
          className={styles.submit_button}
        >
          Send
        </a>
      </form>
    </motion.div>
  );
};

export default Contact;
