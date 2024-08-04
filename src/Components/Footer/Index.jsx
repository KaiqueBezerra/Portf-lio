import styles from "./Index.module.css";
import { Instagram, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className={`${styles.footer} bg-dark text-light`}>
      <div className={styles.redes}>
        <a href="https://github.com/KaiqueBezerra" target="_blank">
          <Github className={`${styles.icons} ${styles.hover1}`} />
        </a>
        <a
          href="https://www.linkedin.com/in/kaique-bezerra-souza/"
          target="_blank"
        >
          <Linkedin className={`${styles.icons} ${styles.hover2}`} />
        </a>
        <a href="https://www.instagram.com/bezerra_kaique/" target="_blank">
          <Instagram className={`${styles.icons} ${styles.hover3}`} />
        </a>
      </div>
      <div className={`${styles.copy} ${styles.shadowInsetCenter} bg-dark`}>
        <p>&copy; 2024 - Kaique Bezerra de Souza</p>
      </div>
    </footer>
  );
};

export default Footer;
