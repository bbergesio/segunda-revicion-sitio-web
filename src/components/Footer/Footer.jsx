import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

import logoBlanco from '../../assets/Logotipo_pickit/Logotipo_blanco_desktop.svg';
import dataFiscal from '../../assets/Imagenes/Data_fiscal.jpg';
import unGlobalCompact from '../../assets/Imagenes/Un_global_compact.webp';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          {/* Column 1: Logo and Social */}
          <div className={styles.brand}>
            <img src={logoBlanco} alt="pickit logo" className={styles.logo} />
            <div className={styles.social}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <nav className={styles.nav}>
            <h4 className={styles.navTitle}>Menú</h4>
            <ul className={styles.navLinks}>
              <li><Link to="/nosotros" className={styles.link}>Nosotros</Link></li>
              <li><a href="https://pickit.bamboohr.com/careers" target="_blank" rel="noopener noreferrer" className={styles.link}>Trabajá con nosotros</a></li>
              <li><Link to="/contacto" className={styles.link}>Contacto</Link></li>
              <li><Link to="/puntos" className={styles.link}>Puntos pickit</Link></li>
              <li><Link to="/developers" className={styles.link}>Developers</Link></li>
              <li><Link to="/sustentabilidad" className={styles.link}>Sustentabilidad</Link></li>
            </ul>
          </nav>

          {/* Column 3: Help & WhatsApp */}
          <div className={styles.help}>
            <h4 className={styles.navTitle}>¿Necesitás ayuda?</h4>
            <a href="https://wa.me/5491123499000" target="_blank" rel="noopener noreferrer" className={styles.whatsappBox}>
              <div className={styles.whatsappIcon}>
                <FaWhatsapp size={24} />
              </div>
              <span className={styles.whatsappNumber}>+54 9 11 2349-9000</span>
            </a>
          </div>

          {/* Column 4: Certifications */}
          <div className={styles.certs}>
            <h4 className={styles.navTitle}>Compromiso</h4>
            <div className={styles.certLogos}>
              <img src={dataFiscal} alt="Data Fiscal" className={styles.certImg} />
              <img src={unGlobalCompact} alt="UN Global Compact" className={styles.certImgSmall} />
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            Copyright ©2026. Todos los derechos reservados.
          </div>
          <div className={styles.legal}>
            <Link to="/privacidad" className={styles.legalLink}>Políticas de privacidad</Link>
            <span className={styles.separator}>|</span>
            <Link to="/terminos" className={styles.legalLink}>Términos y condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
