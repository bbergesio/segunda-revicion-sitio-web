import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <p className={`overline-l ${styles.overline} animate-fade-in-up`}>
          Ecosistema logístico integral de triple impacto
        </p>
        <h1 className={`headline-xxl ${styles.title} animate-fade-in-up`} style={{ animationDelay: '0.1s' }}>
          Resolvemos desde fulfillment hasta distribución de última milla
        </h1>
        <p className={`body-xl ${styles.description} animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
          Transformando la logística en LATAM
        </p>
        
        <div className={`${styles.actions} animate-fade-in-up`} style={{ animationDelay: '0.3s' }}>
          <button className="btn btn-primary btn-lg">Emprendedores</button>
          <button className="btn btn-secondary btn-lg">Empresas</button>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className={styles.blob}></div>
    </section>
  );
};

export default Hero;
