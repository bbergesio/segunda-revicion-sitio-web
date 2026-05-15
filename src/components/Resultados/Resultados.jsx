import { useState, useEffect, useRef } from 'react';
import styles from './Resultados.module.css';

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);
  const startTime = useRef(null);

  // Extract number and suffix (e.g., "7K" -> 7, "K")
  const numericPart = parseInt(end.replace(/\D/g, '')) || 0;
  const suffix = end.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function: easeOutExpo
      const easedPercentage = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(easedPercentage * numericPart));

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, numericPart, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const resultadosData = [
  {
    category: "ECONÓMICO",
    stats: [
      { value: "99", unit: "%", label: "Efectividad de entrega" },
      { value: "30", unit: "%", label: "Ahorros logísticos" }
    ]
  },
  {
    category: "SOCIAL",
    stats: [
      { prefix: "+", value: "7K", label: "Puntos pickit" },
      { value: "1K", label: "Repartidores" }
    ]
  },
  {
    category: "AMBIENTAL",
    stats: [
      { value: "60", unit: "%", label: "Ahorro KM recorridos" },
      { value: "75", unit: "%", label: "TN C02 menos por retiro en punto" }
    ]
  }
];

const Resultados = () => {
  return (
    <section className={styles.resultados} id="resultados">
      <div className="container">
        <div className={styles.header}>
          <h2 className="headline-l">Triple impacto</h2>
          <p className="body-xl">
            Somos el aliado estratégico de marcas líderes en la región, impulsando resultados con triple impacto.
          </p>
        </div>

        <div className={styles.cardsContainer}>
          {resultadosData.map((item, index) => (
            <div key={index} className={styles.impactCard}>
              <div className={styles.categoryLabel}>
                <h3 className="headline-s">{item.category}</h3>
              </div>
              <div className={styles.statsGrid}>
                {item.stats.map((stat, idx) => (
                  <div key={idx} className={styles.statBlock}>
                    <div className={styles.valueContainer}>
                      {stat.prefix && <span className={styles.prefix}>{stat.prefix}</span>}
                      <span className={styles.value}>
                        <CountUp end={stat.value} />
                      </span>
                      {stat.unit && <span className={styles.unit}>{stat.unit}</span>}
                    </div>
                    <p className={styles.statLabel}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <button className={`btn btn-primary btn-lg`}>Quiero que me contacten</button>
        </div>
      </div>
    </section>
  );
};

export default Resultados;
