import styles from './Sustentabilidad.module.css';
import bannerImg from '../../assets/Imagenes/banner sustentabilidad.png';

const Sustentabilidad = () => {
  return (
    <section className={styles.sustentabilidad}>
      <div className="container">
        <div className={styles.banner}>
          <img src={bannerImg} alt="Logística sustentable es posible" className={styles.bannerImage} />
        </div>
      </div>
    </section>
  );
};

export default Sustentabilidad;
