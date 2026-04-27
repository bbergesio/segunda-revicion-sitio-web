import styles from './Integraciones.module.css';

import logoShopify from '../../assets/Integraciones_Naranja/Shopify_orange.svg';
import logoTiendaNube from '../../assets/Integraciones_Naranja/Tienda_nube_orange.svg';
import logoVtex from '../../assets/Integraciones_Naranja/Vtex_orange.svg';
import logoWoocommerce from '../../assets/Integraciones_Naranja/woocomerce_orange.svg';

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
        <div className={styles.content}>
          <div className={styles.textColumn}>
            <h2 className="headline-l">Conectá en minutos</h2>
            <p className="body-l">Integrate a un click</p>
            <button className="btn btn-primary" style={{ marginTop: '24px' }}>Quiero que me contacten</button>
          </div>
          
          <div className={styles.logosColumn}>
            {integraciones.map((brand, index) => (
              <div key={index} className={`card ${styles.logoCard}`}>
                <img src={brand.logo} alt={brand.name} className={styles.logoImage} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integraciones;
