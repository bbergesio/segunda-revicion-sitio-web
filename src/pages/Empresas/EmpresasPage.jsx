import Header from '../../components/Header/Header';
import Contacto from '../../components/Contacto/Contacto';
import styles from './EmpresasPage.module.css';

// Icons
import { RiRocketLine, RiBox3Line, RiUserHeartLine, RiShieldCheckLine, RiCustomerService2Line, RiNotification3Line, RiTimeLine } from 'react-icons/ri';
import { HiOutlineArrowRight } from 'react-icons/hi';

// Assets
import logoShopify from '../../assets/Integraciones_Naranja/Shopify_orange.svg';
import logoTiendaNube from '../../assets/Integraciones_Naranja/Tienda_nube_orange.svg';
import logoVtex from '../../assets/Integraciones_Naranja/Vtex_orange.svg';
import logoWoocommerce from '../../assets/Integraciones_Naranja/woocomerce_orange.svg';

const EmpresasPage = () => {
  const soluciones = [
    { title: "Warehouse & Fulfillment", desc: "Optimizamos tiempos y costos mediante tecnología para la recolección, almacenamiento y preparación de tus pedidos. Además, nos encargamos de conectar la distribución hasta el domicilio." },
    { title: "Domicilio", desc: "Optimizamos las rutas para lograr entregas más eficientes, lo que se traduce en una reducción de costos y un aumento de la efectividad. Realizamos dos intentos de entrega; si el comprador no se encuentra, el paquete se deposita en el punto pickit más cercano." },
    { title: "Retiro en punto", desc: "Brinda mayor flexibilidad y garantiza un 99% de efectividad en las entregas. Los compradores seleccionan el punto de retiro más conveniente y recogen su paquete en el momento que deseen." },
    { title: "Puntos de despacho", desc: "Enfocado para marketplace que buscan optimizar costos en la primera milla, contamos con una red de puntos estratégicamente distribuida para que tus vendedores puedan acercar sus productos cuándo quieran." },
    { title: "Envíos en el día", desc: "Gracias al almacenamiento de tus productos en nuestros puntos pickit tus clientes reciben su compra en 24 horas en la puerta de su hogar." },
    { title: "Flex", desc: "Tus envíos llegan hoy. Gestionamos de forma integral toda tu operación para que lleguen en el día." },
    { title: "Devoluciones", desc: "Potencia tu experiencia de compra ofreciendo devolver tus productos en puntos pickit. Te brindamos completa visibilidad del trayecto." }
  ];

  return (
    <div className={styles.page}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className="headline-xl">Transformamos tu logística</h1>
            <p className="body-l">Gestionamos todo el proceso de punta a punta mejorando la experiencia de entrega.</p>
            
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <p className="body-m">Integrate con nosotros</p>
              </div>
              <div className={styles.stepDivider}></div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <p className="body-m">Prepará tus pedidos, nosotros lo llevamos a destino</p>
              </div>
              <div className={styles.stepDivider}></div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <p className="body-m">Tus clientes reciben sus paquetes, donde y cuando quieran.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soluciones Section */}
      <section className={styles.soluciones}>
        <div className="container">
          <div className={styles.solucionesHeader}>
            <h2 className="headline-l">Soluciones a medida</h2>
            <p className="body-l">Gracias a nuestra tecnología logística nos adaptamos a tu estrategia de distribución.</p>
          </div>

          <div className={styles.solucionesGrid}>
            {soluciones.map((sol, index) => (
              <div key={index} className={`card ${styles.solCard}`}>
                <h3 className="headline-s">{sol.title}</h3>
                <p className="body-m">{sol.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.solucionesActions}>
            <a href="#contacto" className="btn btn-primary">Quiero que me contacten</a>
            <button className="btn btn-secondary">¿Cómo me integro? <HiOutlineArrowRight /></button>
          </div>
        </div>
      </section>

      {/* Estamos Cerca Section */}
      <section className={styles.cerca}>
        <div className="container">
          <div className={`card ${styles.cercaCard}`}>
            <div className={styles.cercaGrid}>
              <div className={styles.cercaText}>
                <h2 className="headline-l">Estamos cerca de tus compradores</h2>
                <p className="body-l">Más de 7000 puntos distribuidos estratégicamente en Argentina, Colombia, Chile, México, Perú y Uruguay.</p>
                <p className="body-m">Tenemos una amplia cobertura en todo el país.</p>
              </div>
              <div className={styles.countries}>
                {['AR', 'CO', 'CL', 'MX', 'PE', 'UY'].map(c => <span key={c} className={styles.countryBadge}>{c}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integración Fácil Section */}
      <section className={styles.facil}>
        <div className="container">
          <div className={styles.facilContent}>
            <h2 className="headline-l">Empezar es fácil</h2>
            <p className="body-l">Podés integrar tu e-commerce a través de nuestra API o en las principales plataformas. Te damos soporte durante todo el proceso.</p>
            
            <div className={styles.logos}>
              <img src={logoVtex} alt="VTEX" />
              <img src={logoWoocommerce} alt="WooCommerce" />
              <img src={logoShopify} alt="Shopify" />
              <img src={logoTiendaNube} alt="TiendaNube" />
            </div>

            <a href="#contacto" className="btn btn-primary">Quiero que me contacten</a>
          </div>
        </div>
      </section>

      {/* Atención Section */}
      <section className={styles.atencion}>
        <div className="container">
          <div className={styles.atencionHeader}>
            <h2 className="headline-l">Atención centrada en la experiencia</h2>
            <p className="body-l">Contamos con un modelo híbrido que combina IA + Atención personalizada para cuidar cada instante de la experiencia.</p>
          </div>

          <div className={styles.atencionGrid}>
            {/* Box 1: Para tu empresa */}
            <div className={`card ${styles.atencionCard}`}>
              <div className={styles.atencionIcon}><RiShieldCheckLine size={32} /></div>
              <h3 className="headline-m">Para tu empresa</h3>
              <ul className={styles.atencionList}>
                <li><RiBox3Line /> Visibilidad del estado de tus paquetes.</li>
                <li><RiUserHeartLine /> Soporte y acompañamiento a tiempo completo.</li>
                <li><RiTimeLine /> Respuesta a eventualidades en 72hs.</li>
              </ul>
            </div>

            {/* Box 2: Para tus compradores */}
            <div className={`card ${styles.atencionCard}`}>
              <div className={styles.atencionIcon}><RiCustomerService2Line size={32} /></div>
              <h3 className="headline-m">Para tus compradores</h3>
              <ul className={styles.atencionList}>
                <li><RiNotification3Line /> Notificaciones del estado de envío.</li>
                <li><RiRocketLine /> Atención a consultas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Contacto />
    </div>
  );
};

export default EmpresasPage;
