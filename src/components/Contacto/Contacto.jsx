import { useState, useRef, useEffect } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import styles from './Contacto.module.css';

const CustomSelect = ({ id, label, options, value, onChange, hasValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue) => {
    onChange({ target: { name: id, value: optionValue } });
    setIsOpen(false);
  };

  return (
    <div 
      ref={containerRef}
      className={`${styles.inputGroup} ${styles.customSelect} ${hasValue ? styles.hasValue : ''} ${isOpen ? styles.isOpen : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.selectDisplay}>
        {options.find(opt => opt.value === value)?.label || ''}
      </div>
      <label htmlFor={id}>{label}</label>
      <RiArrowDownSLine className={`${styles.selectIcon} ${isOpen ? styles.iconRotated : ''}`} />
      
      {isOpen && (
        <div className={styles.dropdownList}>
          {options.map((option) => (
            <div 
              key={option.value} 
              className={`${styles.dropdownItem} ${value === option.value ? styles.activeItem : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(option.value);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

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
    const limit = name === 'mensaje' ? 300 : 50;
    if (value && value.length > limit) return;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias! Pronto nos pondremos en contacto contigo.');
  };

  const isFilled = (value) => value && value.length > 0;

  const volumenOptions = [
    { value: '0-50', label: '0-50' },
    { value: '51-200', label: '51-200' },
    { value: '201-1000', label: '201-1000' },
    { value: '+1000', label: '+1000' },
  ];

  const categoriaOptions = [
    { value: 'belleza', label: 'Belleza' },
    { value: 'deporte', label: 'Deporte' },
    { value: 'electro', label: 'Electro' },
    { value: 'hogar', label: 'Hogar y decoración' },
    { value: 'marketplace', label: 'Marketplace' },
    { value: 'moda', label: 'Moda' },
    { value: 'juguetes', label: 'Juguetes y bebés' },
    { value: 'tecnologia', label: 'Tecnología' },
    { value: 'otros', label: 'Otros' },
  ];

  return (
    <section className={styles.contacto} id="contacto">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <h2 className="headline-l">Sumá pickit a tu e-commerce</h2>
            <p className="body-l">Completá el formulario y te contactamos</p>
            

          </div>

          <div className={`card ${styles.formCard}`}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={`${styles.inputGroup} ${isFilled(formData.nombre) ? styles.hasValue : ''}`}>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label htmlFor="nombre">Nombre completo</label>
              </div>

              <div className={`${styles.inputGroup} ${isFilled(formData.email) ? styles.hasValue : ''}`}>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label htmlFor="email">Correo electrónico corporativo</label>
              </div>

              <div className={`${styles.inputGroup} ${isFilled(formData.empresa) ? styles.hasValue : ''}`}>
                <input 
                  type="text" 
                  id="empresa" 
                  name="empresa" 
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label htmlFor="empresa">Nombre de la empresa / url del sitio</label>
              </div>

              <CustomSelect 
                id="volumen"
                label="Volumen de envíos mensuales"
                options={volumenOptions}
                value={formData.volumen}
                onChange={handleChange}
                hasValue={isFilled(formData.volumen)}
              />

              <CustomSelect 
                id="categoria"
                label="Tipo de producto"
                options={categoriaOptions}
                value={formData.categoria}
                onChange={handleChange}
                hasValue={isFilled(formData.categoria)}
              />

              <div className={`${styles.inputGroup} ${isFilled(formData.mensaje) ? styles.hasValue : ''}`}>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="3"
                  placeholder=" "
                  required
                ></textarea>
                <label htmlFor="mensaje">¿En qué podemos ayudarte?</label>
                <span className={styles.charCount}>{formData.mensaje.length}/300</span>
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
