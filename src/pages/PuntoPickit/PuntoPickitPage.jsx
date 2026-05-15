import { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './PuntoPickitPage.module.css';

// Icons
import { RiMoneyDollarCircleLine, RiUserAddLine, RiTeamLine, RiLineChartLine, RiArrowDownSLine, RiErrorWarningLine } from 'react-icons/ri';

// Image
import heroImg from '../../assets/Imagenes/punto_pickit_hero.png';

const PuntoPickitPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hasStreetAccess, setHasStreetAccess] = useState('');
  
  const benefits = [
    { icon: <RiMoneyDollarCircleLine />, title: "Generá ingresos extras", desc: "Te pagamos por cada paquete entregado." },
    { icon: <RiUserAddLine />, title: "Te acompañamos en cada instancia", desc: "Contamos con equipo de soporte para ayudarte." },
    { icon: <RiTeamLine />, title: "Trabajo en equipo", desc: "Participá del proceso logístico de grandes empresas." },
    { icon: <RiLineChartLine />, title: "Visibilidad de tu negocio", desc: "Aumentá las visitas de compradores potenciales." },
  ];

  const testimonials = [
    { name: "Maria Gomez", role: "Dueña", point: "Moda & Estilo (CABA)", text: "Desde que soy Punto Pickit, el tráfico de gente en mi local aumentó un 30%. Es increíble como algo tan simple genera nuevas ventas." },
    { name: "Carlos Ruiz", role: "Titular", point: "Electro-Service (Córdoba)", text: "Pickit nos ayudó a modernizarnos. El sistema es muy fácil de usar y el pago por cada paquete es un excelente extra a fin de mes." },
    { name: "Laura Martinez", role: "Gerente", point: "El Almacen de Juan (Rosario)", text: "Ser parte de una red tan grande como Pickit nos da prestigio y seguridad. Los clientes están felices de poder retirar cerca de su casa." },
  ];

  const faqs = [
    { q: "¿Qué es un punto pickit?", a: "Son locales o tiendas de barrio que generan ingresos extra entregando y recibiendo paquetes de e-commerce." },
    { q: "¿Qué necesito para ser punto pickit?", a: "Tener local a la calle con acceso a internet, contar con teléfono o tablet del comercio con sistema operativo Android 6.0 o superior para instalar el aplicativo, espacio disponible para almacenar paquetes y no operar con otro servicio de entrega paquetes." },
    { q: "¿Qué documentación tengo que presentar?", a: "Debes enviar tu dirección de facturación, número y comprobante de la tributaria, tipo de contribuyente, N° y comprobante de ID bancario, fotografía de tu identificación, fotografía de frente del local y espacio de guardado." },
    { q: "¿Cuándo recibo mis comisiones?", a: "Las solicitudes para facturar estarán disponibles a partir del 1º del mes. Recordá que la factura debe estar a nombre de la razón social de pickit." },
    { q: "¿Cuál es el horario mínimo que debo estar disponible?", a: "Para poder operar, deberás tener atención comercial mínima de 8 horas de lunes a viernes. Los paquetes se entregan en tu punto entre las 9 y las 15 hs." },
    { q: "¿Cómo puedo ser parte de la comunidad pickit?", a: "Dejanos tus datos en el formulario de esta página y un asesor te contactará para explicarte los pasos a seguir." },
  ];

  return (
    <div className={styles.page}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <h1 className="headline-xl">Generá ingresos extras recibiendo y entregando paquetes de e-commerce.</h1>
            <div className={styles.heroActions}>
              <a href="#contacto" className="btn btn-primary">Quiero ser punto pickit</a>
              <button className="btn btn-secondary">Iniciar sesión</button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src={heroImg} alt="Dueño de comercio recibiendo paquete Pickit" className={styles.img} />
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className={styles.benefits}>
        <div className="container">
          <div className={styles.benefitsGrid}>
            {benefits.map((b, i) => (
              <div key={i} className={`card ${styles.benefitCard}`}>
                <div className={styles.benefitIcon}>{b.icon}</div>
                <h3 className="headline-s">{b.title}</h3>
                <p className="body-m">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof (Testimonials) Section */}
      <section className={styles.testimonials}>
        <div className="container">
          <h2 className="headline-l text-center">Historias de nuestros puntos</h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={`card ${styles.testimonialCard}`}>
                <p className="body-l italic">"{t.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorInfo}>
                    <strong>{t.name}</strong>
                    <span className="body-s">{t.role} - {t.point}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-xl">
             <a href="#contacto" className="btn btn-primary">Quiero ser punto pickit</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqs}>
        <div className="container narrow">
          <h2 className="headline-l text-center mb-xl">Preguntas frecuentes</h2>
          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <div key={i} className={`${styles.faqItem} ${activeFaq === i ? styles.active : ''}`}>
                <button className={styles.faqQuestion} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  {f.q}
                  <RiArrowDownSLine className={styles.arrow} />
                </button>
                <div className={styles.faqAnswer}>
                  <p className="body-m">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contact} id="contacto">
        <div className="container narrow">
          <div className={styles.formHeader}>
            <h2 className="headline-l text-center">¿Querés formar parte de puntos pickit?</h2>
            <p className="body-l text-center">Completá el formulario y sumate a la red.</p>
          </div>
          <div className={`card ${styles.formCard}`}>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label className="overline-s">¿Tu negocio cuenta con un local de atención al público a la calle?</label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input type="radio" value="si" name="street_access" onChange={() => setHasStreetAccess('si')} /> Sí
                  </label>
                  <label className={styles.radioLabel}>
                    <input type="radio" value="no" name="street_access" onChange={() => setHasStreetAccess('no')} /> No
                  </label>
                </div>
              </div>

              {hasStreetAccess === 'no' && (
                <div className={styles.errorAlert}>
                  <RiErrorWarningLine size={24} />
                  <p className="body-m">Lo sentimos por el momento puntos pickit funcionan en locales con atención al publico a la calle.</p>
                </div>
              )}

              <div className={styles.gridInputs}>
                <div className={styles.inputField}>
                  <label htmlFor="nombre" className="overline-s">Nombre completo</label>
                  <input type="text" id="nombre" disabled={hasStreetAccess === 'no'} />
                </div>
                <div className={styles.inputField}>
                  <label htmlFor="email" className="overline-s">Correo electrónico</label>
                  <input type="email" id="email" disabled={hasStreetAccess === 'no'} />
                </div>
                <div className={styles.inputField}>
                  <label htmlFor="celular" className="overline-s">Celular</label>
                  <input type="tel" id="celular" disabled={hasStreetAccess === 'no'} />
                </div>
                <div className={styles.inputField}>
                  <label htmlFor="comercio" className="overline-s">Nombre del comercio</label>
                  <input type="text" id="comercio" disabled={hasStreetAccess === 'no'} />
                </div>
                <div className={styles.inputField}>
                  <label htmlFor="cuit" className="overline-s">Cuit</label>
                  <input type="text" id="cuit" disabled={hasStreetAccess === 'no'} />
                </div>
                <div className={styles.inputField}>
                  <label htmlFor="ciudad" className="overline-s">Ciudad</label>
                  <input type="text" id="ciudad" disabled={hasStreetAccess === 'no'} />
                </div>
                <div className={styles.inputField}>
                  <label htmlFor="provincia" className="overline-s">Provincia</label>
                  <input type="text" id="provincia" disabled={hasStreetAccess === 'no'} />
                </div>
                <div className={styles.inputField}>
                  <label htmlFor="cp" className="overline-s">Código postal</label>
                  <input type="text" id="cp" disabled={hasStreetAccess === 'no'} />
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-full mt-l" disabled={hasStreetAccess === 'no' || hasStreetAccess === ''}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PuntoPickitPage;
