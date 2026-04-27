import { useState } from 'react';
import styles from './Contacto.module.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    volumen: '',
    categoria: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mensaje' && value.length > 300) return;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias! Pronto nos pondremos en contacto contigo.');
  };

  return (
    <section className={styles.contacto} id="contacto">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <h2 className="headline-l">Sumá pickit a tu e-commerce</h2>
            <p className="body-l">Completá el formulario y te contactamos</p>
            
            <div className={styles.decoration}>
              <div className={styles.dot}></div>
              <div className={styles.line}></div>
            </div>
          </div>

          <div className={`card ${styles.formCard}`}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="nombre" className="overline-s">Nombre completo</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className="overline-s">Correo electrónico corporativo</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ejemplo@empresa.com"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="empresa" className="overline-s">Nombre de la Empresa / URL del sitio</label>
                <input 
                  type="text" 
                  id="empresa" 
                  name="empresa" 
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Tu empresa"
                  required
                />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="volumen" className="overline-s">Volumen de envíos mensuales</label>
                  <select 
                    id="volumen" 
                    name="volumen" 
                    value={formData.volumen}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Seleccionar</option>
                    <option value="0-50">0-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-1000">201-1000</option>
                    <option value="+1000">+1000</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="categoria" className="overline-s">Tipo de producto</label>
                  <select 
                    id="categoria" 
                    name="categoria" 
                    value={formData.categoria}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Seleccionar</option>
                    <option value="belleza">Belleza</option>
                    <option value="deporte">Deporte</option>
                    <option value="electro">Electro</option>
                    <option value="hogar">Hogar y decoración</option>
                    <option value="marketplace">Marketplace</option>
                    <option value="moda">Moda</option>
                    <option value="juguetes">Juguetes y bebés</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <div className={styles.labelRow}>
                  <label htmlFor="mensaje" className="overline-s">¿En qué podemos ayudarte?</label>
                  <span className={styles.charCount}>{formData.mensaje.length}/300</span>
                </div>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Contanos más..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                Enviar formulario
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
