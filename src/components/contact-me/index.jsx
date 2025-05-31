import styles from "./contact.module.scss";
import emailIcon from "../../assets/email_icon.png";
import githubIcon from "../../assets/github_icon.png";
import tableauIcon from "../../assets/tableau.svg"
import phoneIcon from "../../assets/phone_icon.png";
import whatsappIcon from "../../assets/whatsapp_icon.png";
import { useState, useRef } from "react";
import { motion } from "motion/react";

const CONTACT_LEFT_PUSH = window.innerWidth <= 900 ? "50%" : "60%";
console.log(CONTACT_LEFT_PUSH);

const ContactDetails = () => {
  return (
    <div className={styles.contact_contact_me}>
      <h2>Contact Me</h2>
      <div className={styles.contact_contact_me_details}>
        <a href="tel:+2348189117819">
          <img src={phoneIcon} alt="phone icon" />
          <p>+2348189117819</p>
        </a>
        <a target="_blank" href="https://wa.me/2348189117819">
          <img src={whatsappIcon} alt="whatsapp icon" />
          <p>WhatsApp</p>
        </a>
        <a target="_blank" href="mailto:Olasunkanmidara01@gmail.com">
          <img src={emailIcon} alt="email icon" />
          <p>Olasunkanmidara01@gmail.com</p>
        </a>
        <a target="_blank" href="https://github.com/Akoriola">
          <img src={githubIcon} alt="github icon" />
          <p>GitHub</p>
        </a>
        <a target="_blank" href="https://public.tableau.com/app/profile/olasunkanmi.oluwadara/vizzes">
          <img  style={{width: "2.5rem", height: "2.5rem"}} src={tableauIcon} alt="tableau icon" />
          <p>Tableau</p>
        </a>
      </div>
    </div>
  );
};

const Contact = ({ open, closeHandler }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const nameRef = useRef();
  const messageRef = useRef();

  console.log(name.length < 0 || message.length < 0);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const clearUserInputs = () => {
    nameRef.current.value = "";
    messageRef.current.value = "";
  };
  return (
    <motion.div
      className={styles.contact_container}
      animate={{ left: open ? CONTACT_LEFT_PUSH : "-100vw" }}
      transition={{ type: "spring", duration: 1 }}
    >
      <ContactDetails />
      <form className={styles.contact_form}>
        <div
          className={styles.contact_form_close}
          onClick={() => {
            clearUserInputs();
            closeHandler();
          }}
        >
          <span></span>
          <span></span>
        </div>

        <h2>Get In Touch </h2>
        <span>Feel free to drop a message below</span>
        <input
          type="text"
          placeholder="Your Name"
          onChange={handleNameChange}
          ref={nameRef}
        />
        {/* <input type="text" placeholder="E"   /> */}
        <textarea
          placeholder="Type your message here..."
          onChange={handleMessageChange}
          ref={messageRef}
        />
        <a
          href={
            !name || !message
              ? null
              : `mailto:Olasunkanmidara01@gmail.com?subject=${name} from portfolio &body=${message}`
          }
          className={`${styles.submit_button} ${
            !name || !message ? styles.submit_button_disabled : ""
          }`}
        >
          Send
        </a>
      </form>
    </motion.div>
  );
};

export default Contact;
