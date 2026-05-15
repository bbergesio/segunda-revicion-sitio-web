import styles from './Integraciones.module.css';

import logoShopify from '../../assets/Integraciones_Original/Shopify_green_(1).svg';
import logoTiendaNube from '../../assets/Integraciones_Original/Tienda_nube_blue_(1).svg';
import logoVtex from '../../assets/Integraciones_Original/Vtex_pink_(1).svg';
import logoWoocommerce from '../../assets/Integraciones_Original/woocomerce_black (1).svg';

const integraciones = [
  { name: 'Shopify', logo: logoShopify },
  { name: 'TiendaNube', logo: logoTiendaNube },
  { name: 'VTEX', logo: logoVtex },
  { name: 'WooCommerce', logo: logoWoocommerce },
];

const Integraciones = () => {
  return (
    <section className={styles.integraciones}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="headline-l">Empezar es simple</h2>
          <p className="body-xl">Integrate en minutos.</p>
          <button className="btn btn-primary btn-lg" style={{ marginTop: '32px' }}>
            Quiero que me contacten
          </button>
        </div>
        
        <div className={styles.logosGrid}>
          {integraciones.map((brand, index) => (
            <div key={index} className={styles.logoCard}>
              <img src={brand.logo} alt={brand.name} className={styles.logoImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integraciones;
