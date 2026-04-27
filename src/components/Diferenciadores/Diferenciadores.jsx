import { RiMagicLine, RiSpeedUpLine, RiMoneyDollarCircleLine, RiTimerLine, RiLeafLine } from 'react-icons/ri';
import styles from './Diferenciadores.module.css';

const diferencias = [
  {
    icon: <RiMagicLine size={40} />,
    title: "Flexible",
    description: "Mejoramos la experiencia del usuario. Los compradores tienen mayor autonomía para retirar sus paquetes cuándo y dónde quieran."
  },
  {
    icon: <RiSpeedUpLine size={40} />,
    title: "Simple",
    description: "Podrás unificar y automatizar procesos en nuestro panel de Tiendanube o aplicativo para ventas por redes sociales."
  },
  {
    icon: <RiMoneyDollarCircleLine size={40} />,
    title: "Eficiente",
    description: "Ahorra en costos logísticos con la distribución estratégica de nuestros puntos."
  },
  {
    icon: <RiTimerLine size={40} />,
    title: "Ágil",
    description: "Entregamos 1 paquete cada 3 segundos."
  },
  {
    icon: <RiLeafLine size={40} />,
    title: "Sustentable",
    description: "Ofrece alternativas eco-amigables mejorando el impacto ambiental de tu empresa."
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
            <div key={index} className={styles.item}>
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
