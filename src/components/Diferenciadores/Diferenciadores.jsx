import { RiMagicLine, RiSpeedUpLine, RiMoneyDollarCircleLine, RiTimerLine, RiLeafLine } from 'react-icons/ri';
import styles from './Diferenciadores.module.css';

const diferencias = [
  {
    icon: <RiMagicLine size={40} />,
    title: "Flexibilidad",
    description: "Autonomía total para retirar paquetes dónde y cuándo el usuario prefiera."
  },
  {
    icon: <RiSpeedUpLine size={40} />,
    title: "Simplicidad",
    description: "Integración vía eCommerce, API o desarrollo propio según tu necesidad."
  },
  {
    icon: <RiMoneyDollarCircleLine size={40} />,
    title: "Eficiencia",
    description: "Reducción de costos mediante nuestra red estratégica de puntos."
  },
  {
    icon: <RiTimerLine size={40} />,
    title: "Agilidad",
    description: "Velocidad operativa real: entregamos un paquete cada tres segundos."
  }
];

const Diferenciadores = () => {
  return (
    <section className={styles.diferenciadores} id="diferenciadores">
      <div className="container">
        <div className={styles.header}>
          <p className="overline-l">Un modelo, múltiples beneficios</p>
          <h2 className="headline-l">Lo que nos diferencia</h2>
        </div>

        <div className={styles.grid}>
          {diferencias.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h3 className="headline-m">{item.title}</h3>
              <p className="body-l">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciadores;
