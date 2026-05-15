import styles from './Marcas.module.css';

// Import all brand logos
import dexter from '../../assets/Empresas_Naranja/Dexter_orange.svg';
import farmacity from '../../assets/Empresas_Naranja/Farmacity_orange.svg';
import getnet from '../../assets/Empresas_Naranja/Getnet_Orange.svg';
import just from '../../assets/Empresas_Naranja/Just_orange.svg';
import meli from '../../assets/Empresas_Naranja/MELI_orange.svg';
import mp from '../../assets/Empresas_Naranja/MP_orange.svg';
import natura from '../../assets/Empresas_Naranja/Natura_orange.svg';
import nespresso from '../../assets/Empresas_Naranja/Nespresso_orange.svg';
import nike from '../../pages/Home/Nike.svg';
import sony from '../../assets/Empresas_Naranja/Sony_orange.svg';
import falabella from '../../assets/Empresas_Naranja/falabella_orange.svg';

const marcas = [
  dexter, farmacity, getnet, just, meli, mp, natura, nespresso, nike, sony, falabella
];

const Marcas = () => {
  return (
    <section className={styles.marcas}>
      <div className="container">
        <h2 className={`headline-l ${styles.title}`}>Marcas que nos eligen</h2>
      </div>
      
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {/* We duplicate the array to create a seamless loop */}
          {[...marcas, ...marcas].map((logo, index) => (
            <div key={index} className={styles.logoWrapper}>
              <img src={logo} alt={`Marca ${index}`} className={styles.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marcas;
