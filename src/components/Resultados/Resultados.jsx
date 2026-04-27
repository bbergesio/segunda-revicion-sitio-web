import styles from './Resultados.module.css';

const resultados = [
  {
    title: "Económico",
    items: [
      "99% efectividad de entrega",
      "30% ahorro en costos logísticos"
    ]
  },
  {
    title: "Social",
    items: [
      "+7000 puntos pickit",
      "+1000 repartidores"
    ]
  },
  {
    title: "Ambiental",
    items: [
      "60% menos km recorridos",
      "75% menos TN C02 por retiro en punto"
    ]
  }
];

const Resultados = () => {
  return (
    <section className={styles.resultados} id="resultados">
      <div className="container">
        <div className={styles.header}>
          <p className="body-xl">
            Somos el aliado estratégico de +xxx marcas en la región logrando triple impacto:
          </p>
        </div>

        <div className={styles.grid}>
          {resultados.map((col, index) => (
            <div key={index} className={styles.column}>
              <h2 className="headline-m">{col.title}</h2>
              <ul className={styles.list}>
                {col.items.map((item, idx) => (
                  <li key={idx} className="body-l">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <button className={`btn btn-primary ${styles.ctaBtn}`}>Quiero que me contacten</button>
        </div>
      </div>
    </section>
  );
};

export default Resultados;
