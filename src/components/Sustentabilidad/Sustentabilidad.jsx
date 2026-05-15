import { Link } from 'react-router-dom';
import styles from './Sustentabilidad.module.css';
import logoPacto from '../../pages/Home/Pacto global.svg';

const Sustentabilidad = () => {
  return (
    <section className={styles.sustentabilidad}>
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.content}>
            <h2 className={styles.title}>Logística sustentable es posible</h2>
            <ul className={styles.descriptionList}>
              <li>Estrategia 2030</li>
              <li>Reporte de sustentabilidad</li>
              <li>Código de proveedores</li>
            </ul>
            <Link to="/sustentabilidad" className={styles.cta}>
              Ver más
            </Link>
          </div>
          <div className={styles.imageContainer}>
            <img src={logoPacto} alt="Pacto Global" className={styles.logoImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustentabilidad;
