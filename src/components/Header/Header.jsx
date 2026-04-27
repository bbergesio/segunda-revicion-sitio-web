import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import styles from './Header.module.css';

// Using the assets from our src/assets folder
import logoDesktop from '../../assets/Logotipo_pickit/Logotipo_naranja_desktop.svg';
import logoMobile from '../../assets/Logotipo_pickit/Logotipo_mobile_naranja.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Logo */}
        <Link to="/" className={styles.logoContainer}>
          <picture>
            <source media="(max-width: 768px)" srcSet={logoMobile} />
            <img src={logoDesktop} alt="Pickit Logo" className={styles.logo} />
          </picture>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            <li><NavLink to="/empresas" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Empresas</NavLink></li>
            <li><NavLink to="/emprendedores" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Emprendedores</NavLink></li>
            <li><NavLink to="/punto-pickit" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Punto pickit</NavLink></li>
            <li><NavLink to="/nosotros" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Nosotros</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Blog</NavLink></li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className={styles.actions}>
          <a href="https://tracking.pickit.com.ar/" target="_blank" rel="noopener noreferrer" className={`btn btn-secondary ${styles.ctaBtnSm}`}>Seguir envío</a>
          
          {/* Mobile Menu Toggle */}
          <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.isOpen : ''}`}>
        <nav className={styles.mobileNavContent}>
          <ul className={styles.mobileNavLinks}>
            <li><NavLink to="/empresas" className={({ isActive }) => isActive ? styles.active : ''} onClick={toggleMenu}>Empresas</NavLink></li>
            <li><NavLink to="/emprendedores" className={({ isActive }) => isActive ? styles.active : ''} onClick={toggleMenu}>Emprendedores</NavLink></li>
            <li><NavLink to="/punto-pickit" className={({ isActive }) => isActive ? styles.active : ''} onClick={toggleMenu}>Punto pickit</NavLink></li>
            <li><NavLink to="/nosotros" className={({ isActive }) => isActive ? styles.active : ''} onClick={toggleMenu}>Nosotros</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? styles.active : ''} onClick={toggleMenu}>Blog</NavLink></li>
          </ul>
          <div className={styles.mobileNavFooter}>
             <a href="https://tracking.pickit.com.ar/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{width: '100%', textAlign: 'center'}}>Seguir envío</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
