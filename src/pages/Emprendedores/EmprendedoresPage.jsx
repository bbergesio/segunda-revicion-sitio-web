import Header from '../../components/Header/Header';
import Contacto from '../../components/Contacto/Contacto';
import MapaPuntos from '../../components/MapaPuntos/MapaPuntos';
import styles from './EmprendedoresPage.module.css';

// Icons
import { RiMoneyDollarCircleLine, RiNodeTree, RiGlobalLine, RiCheckDoubleLine, RiTruckLine, RiStore2Line, RiExchangeLine, RiShieldUserLine, RiCustomerService2Line } from 'react-icons/ri';

// Image
import heroImage from '../../assets/Imagenes/emprendedor_hero.png';

const EmprendedoresPage = () => {
  const features = [
    { icon: <RiMoneyDollarCircleLine />, title: "Efectivo", text: "Reduce costos logísticos, tiempos e imposibles de entrega gracias a la distribución estratégica de nuestra red de puntos." },
    { icon: <RiNodeTree />, title: "Simple", text: "Podrás unificar y automatizar procesos en nuestro panel de tiendanube o aplicativo para ventas por redes sociales." },
    { icon: <RiGlobalLine />, title: "Cobertura", text: "Llevamos tu marca a todo el país a través de envíos nacionales o retiro en puntos." },
    { icon: <RiCheckDoubleLine />, title: "Flexible", text: "Mejoramos la experiencia de tus compradores. Podrán elegir si recibir sus paquetes en el domicilio o retirar cuando quieran." }
  ];

  return (
    <div className={styles.page}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <h1 className="headline-xl">Hacemos simple la logística</h1>
              <p className="body-l">Nuestras soluciones te permiten:</p>
              
              <div className={styles.featuresGrid}>
                {features.map((f, i) => (
                  <div key={i} className={styles.featureItem}>
                    <div className={styles.featureHeader}>
                      <span className={styles.featureIcon}>{f.icon}</span>
                      <h4 className="overline-l">{f.title}</h4>
                    </div>
                    <p className="body-m">{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.heroImageContainer}>
              <img src={heroImage} alt="Emprendedor trabajando" className={styles.heroImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Soluciones Section */}
      <section className={styles.soluciones}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="headline-l">Soluciones para tu emprendimiento</h2>
            <p className="body-l">Tenemos opciones que se adaptan al tamaño de tu tienda</p>
          </div>

          <div className={styles.soluGrid}>
            <div className={`card ${styles.soluCard}`}>
              <RiTruckLine size={32} className={styles.soluIcon} />
              <h3 className="headline-s">Envío a domicilio</h3>
              <p className="body-m">Realizamos recorridos más eficientes que permiten reducir costos y aumentar la efectividad de entrega.</p>
            </div>
            
            <div className={`card ${styles.soluCard}`}>
              <RiStore2Line size={32} className={styles.soluIcon} />
              <h3 className="headline-s">Retiro en punto</h3>
              <p className="body-m">Tus compradores eligen el punto más cercano y retiran cuando quieran.</p>
            </div>

            <div className={`card ${styles.soluCard}`}>
              <RiExchangeLine size={32} className={styles.soluIcon} />
              <h3 className="headline-s">Devoluciones</h3>
              <p className="body-m">Tus clientes pueden acercar sus paquetes a nuestros puntos habilitados.</p>
            </div>
          </div>

          <div className={styles.soluActions}>
            <a href="#contacto" className="btn btn-primary">Quiero que me contacten</a>
            <a href="#integrate" className="btn btn-secondary">¿Cómo me integro?</a>
          </div>
        </div>
      </section>

      {/* Replicating map section from Home with specific description */}
      <MapaPuntos description="Locales o tiendas estratégicos en las principales ciudades. Nos dejas tu paquete, nosotros hacemos el resto" />

      {/* Integrate Section */}
      <section className={styles.integrate} id="integrate">
        <div className="container">
          <div className={`card ${styles.integrateCard}`}>
            <h2 className="headline-l">Empezar es simple y fácil</h2>
            <p className="body-l">Podés realizar envíos con nuestra web de autogestión o integrarte a través de Tiendanube o Shopify.</p>
            
            <div className={styles.integrateActions}>
              <button className="btn btn-primary">Crear una cuenta</button>
              <a href="#contacto" className="btn btn-secondary">Quiero que me contacten</a>
            </div>
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
            <div className={`card ${styles.atencionCard}`}>
              <RiShieldUserLine size={32} color="var(--color-orange-default)" />
              <h3 className="headline-m">Para tu emprendimiento</h3>
              <ul className={styles.benefitsList}>
                <li>Visibilidad del estado de tus paquetes.</li>
                <li>Soporte y acompañamiento a tiempo completo.</li>
                <li>Respuesta a eventualidades en 72hs.</li>
              </ul>
            </div>

            <div className={`card ${styles.atencionCard}`}>
              <RiCustomerService2Line size={32} color="var(--color-orange-default)" />
              <h3 className="headline-m">Para tus compradores</h3>
              <ul className={styles.benefitsList}>
                <li>Notificaciones del estado de envío.</li>
                <li>Atención a consultas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Contacto />
    </div>
  );
};

export default EmprendedoresPage;
