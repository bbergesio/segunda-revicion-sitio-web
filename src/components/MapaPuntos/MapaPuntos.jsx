import { Link } from 'react-router-dom';
import styles from './MapaPuntos.module.css';
import videoRetiro from '../../pages/Home/Retiro_punto_video (1).mp4';

const MapaPuntos = () => {
  return (
    <section className={styles.mapSection} id="mapa">
      <div className="container">
        <div className={styles.bannerCard}>
          <div className={styles.content}>
            <h2 className={`headline-l ${styles.title}`}>Nuestra red de puntos</h2>
            <p className={`body-l ${styles.description}`}>
              Gracias a su distribución estratégica, podrás enviar a todo el país.
            </p>
            <Link to="/punto-pickit" className="btn btn-primary btn-lg">Ver más</Link>
          </div>
          <div className={styles.imageContainer}>
            <video 
              src={videoRetiro} 
              className={styles.bannerVideo}
              autoPlay 
              muted 
              loop 
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapaPuntos;
