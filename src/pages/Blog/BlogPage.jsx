import React, { useState } from 'react';
import styles from './BlogPage.module.css';

const BlogPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Pencil Animation Container */}
        <div className={styles.animationContainer}>
          <svg 
            width="120" 
            height="120" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="var(--color-orange-default)" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={styles.pencil}
          >
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
          <div className={styles.writingLine}></div>
        </div>

        <h2 className="headline-l">Nuestro blog se está creando.</h2>
        <p className="body-l">Suscribite para recibir nuestras novedades</p>

        {!submitted ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">
              Suscribirme
            </button>
          </form>
        ) : (
          <div className={styles.successMessage}>
            <p className="body-l">¡Gracias por suscribirte! Pronto tendrás novedades.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
