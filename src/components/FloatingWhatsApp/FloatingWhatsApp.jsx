import { FaWhatsapp } from 'react-icons/fa';
import styles from './FloatingWhatsApp.module.css';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/5491123499000" 
      className={styles.floatingBtn}
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsApp;
