import styles from "./footer.module.scss";
import emailIcon from "../../assets/email_icon.png";
import githubIcon from "../../assets/github_icon.png";
import phoneIcon from "../../assets/phone_icon.png";
import whatsappIcon from "../../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.footer_container}>
        <div className={styles.footer_heading}>
          <p>LET’S GET IN TOUCH</p>
          <h2>Contact me and let’s work together</h2>
        </div>
        <div className={styles.footer_body}>
          <div className={styles.footer_details}>
            <button>Contact Me</button>
            <h2>Oluwadara Olasunkanmi</h2>
            <p>
              Data analyst passionate about transforming complex data into
              clear, actionable insights that drive success
            </p>
            <div className={styles.footer_details_icons}>
              <img src={whatsappIcon} alt="whatsapp icon" />
              <img src={emailIcon} alt="email icon" />
              <img src={githubIcon} alt="github icon" />
            </div>
          </div>
          <div className={styles.footer_navigation}>
            <h2>Navigation</h2>
            <div>
              <a href="/">Home</a>
              <a href="/#about">About</a>
              <a href="/#services">Services</a>
              <a href="/#projects">Projects</a>
              <a href="/#contact">Contact</a>
            </div>
          </div>
          <div className={styles.footer_contact}>
            <h2>Contact</h2>
            <div className={styles.footer_contact_details}>
              <div>
                <img src={phoneIcon} alt="phone icon" />
                <p>+2348189117819</p>
              </div>
              <div>
                <img src={whatsappIcon} alt="whatsapp icon" />
                <p>WhatsApp</p>
              </div>
              <div>
                <img src={emailIcon} alt="email icon" />
                <p>Olasunkanmidara01@gmail.com</p>
              </div>
              <div>
                <img src={githubIcon} alt="github icon" />
                <p>GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
