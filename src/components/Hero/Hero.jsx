import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  const fullText = "Donde tus clientes elijan, pickit entrega";
  const [displayedText, setDisplayedText] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsFinished(true);
      }
    }, 70); // Speed of typing

    return () => clearInterval(interval);
  }, []);

  // Refined title rendering to avoid layout shifts and double animations
  const renderTitle = () => {
    const mainPart = "Donde tus clientes elijan, ";
    const highlightPart = "pickit entrega";
    
    // Calculate how much of each part to show
    const mainCharsToShow = Math.min(displayedText.length, mainPart.length);
    const highlightCharsToShow = Math.max(0, displayedText.length - mainPart.length);
    
    const currentMain = mainPart.substring(0, mainCharsToShow);
    const currentHighlight = highlightPart.substring(0, highlightCharsToShow);

    return (
      <h1 className={`headline-xxl ${styles.title}`}>
        {currentMain}
        <span className={styles.highlight}>{currentHighlight}</span>
        {!isFinished && <span className={styles.cursor}>|</span>}
      </h1>
    );
  };

  return (
    <section className={styles.hero}>
      {/* Centered Content */}
      <div className={`container ${styles.container}`}>
        <p className={`overline-l ${styles.overline} animate-fade-in-up`}>
          LA RED DE PUNTOS MÁS SÓLIDA DEL PAÍS
        </p>
        
        {renderTitle()}

        <p className={`body-xl ${styles.description} animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
          Resolvemos el armado de pedidos, envíos Same Day, última milla y mucho más. <br /> Potencia para grandes empresas y simplicidad para emprendedores.
        </p>
        
        <div className={`${styles.actions} animate-fade-in-up`} style={{ animationDelay: '0.3s' }}>
          <Link to="/emprendedores" className="btn btn-primary btn-lg">Soy emprendedor</Link>
          <Link to="/empresas" className="btn btn-secondary btn-lg">Empresas</Link>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className={styles.blob}></div>
    </section>
  );
};

export default Hero;
