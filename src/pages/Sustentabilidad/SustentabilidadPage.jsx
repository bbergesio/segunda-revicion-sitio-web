import Header from '../../components/Header/Header';
import styles from './SustentabilidadPage.module.css';

const SustentabilidadPage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className="headline-xl">Sección Sustentabilidad</h1>
          <div className={styles.heroDescription}>
            <p className="body-l">
              Desde pickit apostamos a un modelo logístico, sustentable, inclusivo y colaborativo en el que tanto los vendedores como los compradores obtienen mayor beneficio y calidad de servicio, igualando oportunidades.
            </p>
            <p className="body-l">
              Las características de nuestro modelo permite optimizar los km recorridos por cada entrega, impactando positivamente en las emisiones de carbono.
            </p>
            <p className="body-l">
              Desde 2022, formamos parte de la Red Pacto Global para alinear nuestros objetivos de negocio a la Agenda 2030 contribuyendo a los ODS 5, 8, 11 y 13.
            </p>
          </div>
          
          <div className={styles.heroActions}>
            <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Reporte de sustentabilidad
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Código de proveedores
            </a>
          </div>
        </div>
      </section>

      <section className={styles.cardsSection}>
        <div className="container">
          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <h2 className="headline-l">Impacto Positivo</h2>
              <div className={styles.cardContent}>
                <p className="body-m">
                  Nuestro propósito es aportar valor al mundo a través de la logística, buscando conectar a las personas con sus pedidos de una forma sustentable, brindando una mejor experiencia contribuyendo a que miles de personas se trasladen menos para adquirir sus productos, siendo responsables de la huella de carbono que generamos.
                </p>
                <p className="body-m">
                  Creemos en apoyar los vínculos económicos, sociales y ambientales de las ciudades donde operamos adoptando una postura de optimización y reducción de las emisiones.
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <h2 className="headline-l">Bienestar Social</h2>
              <div className={styles.cardContent}>
                <p className="body-m">
                  Nos motiva cuidar de quienes hacen pickit, por eso buscamos generar un ambiente que fomente: el progreso, la participación plena y la igualdad de oportunidades de liderazgo sin importar género o etnia, protegiendo los derechos laborales y promoviendo un entorno seguro tanto con nuestros proveedores directos como prestadores de servicio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustentabilidadPage;
