import Header from '../../components/Header/Header';
import styles from './SustentabilidadPage.module.css';

const SustentabilidadPage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className="headline-xl">Sustentabilidad en Pickit</h1>
          <p className="body-l">Nuestro compromiso con el medio ambiente y la sociedad.</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className="card">
            <h2 className="headline-l">Compromiso 2026</h2>
            <p className="body-m">Estamos trabajando para reducir nuestra huella de carbono a través de rutas optimizadas y el uso de la red de puntos, lo que disminuye drásticamente los desplazamientos innecesarios.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustentabilidadPage;
