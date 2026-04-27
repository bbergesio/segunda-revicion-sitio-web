import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import styles from './Sustentabilidad.module.css';

const Sustentabilidad = () => {
  return (
    <section className={styles.sustentabilidad}>
      <div className="container">
        <Link to="/sustentabilidad" className={styles.banner}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h2 className="headline-m">Somos parte del cambio.</h2>
              <p className="body-l">Conocé nuestra estrategia 2030 y resultados ambientales.</p>
            </div>
            <div className={styles.icon}>
              <HiArrowRight size={32} />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Sustentabilidad;
