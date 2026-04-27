import Header from '../../components/Header/Header';
import styles from './NosotrosPage.module.css';

// Team Images
import ceoImg from '../../assets/Equipo_pickit/CEO.webp';
import cfoImg from '../../assets/Equipo_pickit/CFO.webp';
import cooImg from '../../assets/Equipo_pickit/COO.webp';
import ctoImg from '../../assets/Equipo_pickit/CTO.webp';
import comercialImg from '../../assets/Equipo_pickit/Directora_comercial.webp';
import marketplaceImg from '../../assets/Equipo_pickit/Marketplace_Director.webp';

const team = [
  { img: ceoImg, role: "CEO" },
  { img: cfoImg, role: "CFO" },
  { img: cooImg, role: "COO" },
  { img: ctoImg, role: "CTO" },
  { img: comercialImg, role: "Directora Comercial" },
  { img: marketplaceImg, role: "Marketplace Director" },
];

const NosotrosPage = () => {
  return (
    <div className={styles.page}>
      
      {/* Misión section */}
      <section className={styles.mision}>
        <div className="container">
          <div className={styles.contentBox}>
            <h4 className="overline-l">Nuestra Misión</h4>
            <h2 className="headline-l">Revolucionamos la logística para beneficio de todos</h2>
            <p className="body-l">
              "Con pasión y talento, creamos soluciones tecnológicas simples y efectivas que resuelven problemas reales. Nuestro compromiso con la innovación, la sostenibilidad y las personas impulsa un impacto positivo en las comunidades donde operamos."
            </p>
          </div>
        </div>
      </section>

      {/* Visión section */}
      <section className={styles.vision}>
        <div className="container">
          <div className={styles.contentBox}>
            <h4 className="overline-l">Nuestra Visión</h4>
            <h2 className="headline-l">Ser el motor que impulsa el progreso en Latinoamérica</h2>
            <p className="body-l">
              Conectando tecnología y creatividad con propósito para simplificar la logística y hacerla accesible y sostenible para todos. Queremos que el Standard pickit sea sinónimo de excelencia, confianza, sustentabilidad y tecnología.
            </p>
          </div>
        </div>
      </section>

      {/* Valores section */}
      <section className={styles.valores}>
        <div className="container">
          <h2 className={`headline-m ${styles.valoresTitle}`}>Nuestros valores</h2>
          <div className={styles.valoresGrid}>
            <div className={`card ${styles.valorCard}`}>
              <h3 className="headline-s">Pensamos en grande</h3>
            </div>
            <div className={`card ${styles.valorCard}`}>
              <h3 className="headline-s">Trabajamos en equipo</h3>
            </div>
            <div className={`card ${styles.valorCard}`}>
              <h3 className="headline-s">Simplemente, lo hacemos</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo section */}
      <section className={styles.equipo}>
        <div className="container">
          <div className={styles.equipoHeader}>
            <h2 className="headline-l">Nuestro equipo</h2>
            <p className="body-l">En pickit creemos en los talentos y que estos se forman con la experiencia. Te brindamos las herramientas para que puedas decidir cómo crecer. Queremos acompañarte y aprender de vos.</p>
          </div>

          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <div key={i} className={styles.teamMember}>
                <img src={member.img} alt={member.role} className={styles.memberPhoto} />
                <div className={styles.roleLabel}>
                  <span className="overline-s">{member.role}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.equipoFooter}>
            <button className="btn btn-primary">Quiero ser parte de pickit</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NosotrosPage;
