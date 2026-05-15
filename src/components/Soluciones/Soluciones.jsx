import { Link } from 'react-router-dom';
import { RiFlashlightFill } from 'react-icons/ri';
import styles from './Soluciones.module.css';

// Import images from src/pages/Home
import imgWarehouse from '../../pages/Home/Warehouse_&_Fulfillment.svg';
import imgDomicilio from '../../pages/Home/Envío_a_Domicilio.svg';
import imgRetiro from '../../pages/Home/Retiro_en_punto.svg';
import imgDespacho from '../../pages/Home/Puntos_de_Despacho.svg';
import imgFintech from '../../pages/Home/Envío_Fintech_en_el_día.svg';
import imgDevoluciones from '../../pages/Home/Gestión_de_Devoluciones.svg';
import imgMeliFlex from '../../pages/Home/SameDay_MeliFlex.svg';

const soluciones = [
  {
    image: imgWarehouse,
    title: "Warehouse & Fulfillment",
    description: "Optimizamos tiempos y costos con tecnología para el almacenaje y preparación de pedidos. Conectamos toda tu operación hasta la entrega final en el domicilio del cliente."
  },
  {
    image: imgDomicilio,
    title: "Envío a Domicilio",
    description: "Eficiencia en rutas para reducir costos y maximizar entregas. Realizamos dos visitas; si no hay contacto, el paquete aguarda en el punto pickit más cercano para su retiro."
  },
  {
    image: imgRetiro,
    title: "Retiro en Punto",
    description: "Brinda flexibilidad con un 99% de efectividad. Los compradores eligen el punto más conveniente para recoger sus paquetes en el horario que mejor se adapte a su rutina diaria."
  },
  {
    image: imgDespacho,
    title: "Puntos de Despacho",
    description: "Ideal para marketplaces que buscan optimizar la primera milla. Ofrecemos una red estratégica de puntos para que los vendedores entreguen sus productos con total libertad."
  },
  {
    image: imgFintech,
    title: "Envío Fintech en el día",
    description: "Diseñado para servicios financieros: almacenamos tus plásticos y productos en nuestra red para que tus clientes los reciban en 24 horas, en cualquier lugar y con total seguridad."
  },
  {
    image: imgMeliFlex,
    title: "Same Day / Meli Flex",
    description: "Gracias a nuestras entregas en el día, tus clientes reciben sus compras en la puerta de su hogar de forma rápida y simple. Gestionamos toda la operación para garantizar inmediatez."
  },
  {
    image: imgDevoluciones,
    title: "Gestión de Devoluciones",
    description: "Potencia tu experiencia de compra ofreciendo devolver tus productos en puntos pickit. Te brindamos completa visibilidad del trayecto."
  }
];

const Soluciones = () => {
  return (
    <section className={styles.soluciones} id="soluciones">
      {/* Animated Particles Background */}
      <div className={styles.particlesContainer}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className={styles.header}>
          <h2 className="headline-l">Soluciones</h2>
          <p className="body-l">
            Gracias a nuestra red de puntos ofrecemos múltiples opciones, combinando efectividad y flexibilidad para optimizar la experiencia del cliente.
          </p>
        </div>

        <div className={styles.grid}>
          {soluciones.map((item, index) => (
            <div key={index} className={`card ${styles.card}`}>
              <div className={styles.iconContainer}>
                {item.image ? (
                  <img src={item.image} alt={item.title} className={styles.iconImage} />
                ) : (
                  item.icon
                )}
              </div>
              <h3 className="headline-s">{item.title}</h3>
              <p className="body-m">{item.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <Link to="/emprendedores" className="btn btn-primary">Soy emprendedor</Link>
          <Link to="/empresas" className="btn btn-secondary">Empresas</Link>
        </div>
      </div>
    </section>
  );
};

export default Soluciones;
