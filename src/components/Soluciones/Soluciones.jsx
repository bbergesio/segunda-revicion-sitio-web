import { Link } from 'react-router-dom';
import { RiBuilding2Line, RiTruckLine, RiStore2Line, RiMapPinLine, RiFlashlightLine, RiFlashlightFill, RiRefund2Line } from 'react-icons/ri';
import styles from './Soluciones.module.css';

const soluciones = [
  {
    icon: <RiBuilding2Line size={32} />,
    title: "Warehouse & Fulfillment",
    description: "Optimizamos tiempos y costos mediante tecnología para la recolección, almacenamiento y preparación de tus pedidos. Además, nos encargamos de conectar la distribución hasta el domicilio."
  },
  {
    icon: <RiTruckLine size={32} />,
    title: "Domicilio",
    description: "Optimizamos las rutas para lograr entregas más eficientes, lo que se traduce en una reducción de costos y un aumento de la efectividad. Realizamos dos intentos de entrega; si el comprador no se encuentra, el paquete se deposita en el punto pickit más cercano para que pueda ser retirado a su conveniencia."
  },
  {
    icon: <RiStore2Line size={32} />,
    title: "Retiro en punto",
    description: "Brinda mayor flexibilidad y garantiza un 99% de efectividad en las entregas. Los compradores seleccionan el punto de retiro más conveniente y recogen su paquete en el momento que deseen."
  },
  {
    icon: <RiMapPinLine size={32} />,
    title: "Puntos de despacho",
    description: "Enfocado para marketplace que buscan optimizar costos en la primera milla, contamos con una red de puntos estratégicamente distribuida para que tus vendedores puedan acercar sus productos cuándo quieran."
  },
  {
    icon: <RiFlashlightLine size={32} />,
    title: "Envíos en el día",
    description: "Gracias al almacenamiento de tus productos en nuestros puntos pickit tus clientes reciben su compra en 24 horas en la puerta de su hogar."
  },
  {
    icon: <RiFlashlightFill size={32} color="var(--color-yellow-default)" />,
    title: "Meli Flex",
    description: "Tus envíos llegan hoy. Gestionamos de forma integral toda tu operación para que lleguen en el día."
  },
  {
    icon: <RiRefund2Line size={32} />,
    title: "Devoluciones",
    description: "Potencia tu experiencia de compra ofreciendo devolver tus productos en puntos pickit. Te brindamos completa visibilidad del trayecto."
  }
];

const Soluciones = () => {
  return (
    <section className={styles.soluciones} id="soluciones">
      <div className="container">
        <div className={styles.header}>
          <h2 className="headline-l">Soluciones</h2>
          <p className="body-l">
            Gracias a nuestra red de puntos ofrecemos múltiples opciones, combinando Efectividad y Flexibilidad para optimizar la experiencia del cliente.
          </p>
        </div>

        <div className={styles.grid}>
          {soluciones.map((item, index) => (
            <div key={index} className={`card ${styles.card}`}>
              <div className={styles.iconContainer}>
                {item.icon}
              </div>
              <h3 className="headline-s">{item.title}</h3>
              <p className="body-m">{item.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <Link to="/emprendedores" className="btn btn-primary">Emprendedores</Link>
          <Link to="/empresas" className="btn btn-secondary">Empresas</Link>
        </div>
      </div>
    </section>
  );
};

export default Soluciones;
