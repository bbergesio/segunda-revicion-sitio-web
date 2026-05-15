import styles from './VideoBanner.module.css';
import pickitLatam from '../../pages/Home/pickit_latam.png';

const VideoBanner = () => {
  return (
    <section className={styles.videoBanner}>
      <div className="container">
        <div className={styles.videoWrapper}>
          <img src={pickitLatam} alt="Pickit LATAM Video" className={styles.videoImage} />
          <div className={styles.playOverlay}>
            <div className={styles.playButton}>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="rgba(255,255,255,0.9)" />
                <polygon points="26,18 48,32 26,46" fill="var(--color-orange-default)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
