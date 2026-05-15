import Header from '../../components/Header/Header';
import styles from './TerminosPage.module.css';

const TerminosPage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.contentSection}>
        <div className="container narrow">
          <h2 className="headline-l mb-l">Términos y condiciones</h2>
          
          <div className={styles.legalBody}>
            <section className={styles.legalSection}>
              <h3 className="headline-s mb-s">CONDICIONES GENERALES</h3>
              <p className="body-m">
                Este sitio web (el “Sitio”) contiene los siguientes términos y condiciones que serán aplicables a usted y a su acceso a este Sitio y al uso del mismo así como los servicios aquí descriptos (“Términos y Condiciones de Uso”), ya sea de manera directa o bien mediante su acceso a través de alguna aplicación móvil, en su caso. Por favor lea el contenido de este sitio cuidadosamente. 
              </p>
              <p className="body-m mt-m">
                Al seleccionar cualquiera de los servicios provistos por **Pickit Argentina S.A.**, (en adelante, “PICKIT”) y que se describen en el presente Sitio (los Servicios), usted acuerda en su nombre y en nombre de sus clientes y del cualquier persona interesada en el Servicio, que se aplicarán los presentes Términos y Condiciones así como la correspondiente Política de Privacidad. Si Usted no acepta en forma total los presentes Términos y Condiciones y la Política de Privacidad, le rogamos que no avance en el acceso y visita de nuestro Sitio ni en la selección de los Servicios.
              </p>
              <p className="body-m mt-m">
                En caso de avanzar en la visita a nuestro Sitio y/o en la selección de los Servicios, se entenderá que el usuario aceptó los presentes Términos y Condiciones, la Política de Privacidad y acepta recibir mails periódicos en la dirección que informe al suscribirse con la información que el Sitio determine. Los Términos y Condiciones y la Política de Privacidad podrán ser modificados en todo o en parte en cualquier momento y a exclusivo criterio de PICKIT.
              </p>
              <p className="body-m mt-m">
                Las violaciones a los Términos y Condiciones generarán el derecho en favor del titular del Sitio a suspender o terminar la prestación de los Servicios al usuario que las haya realizado, por acción u omisión. Los Servicios sólo están disponibles para personas que tengan capacidad legal para contratar.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h3 className="headline-s mb-s">RESPONSABILIDAD</h3>
              <p className="body-m">
                El usuario acepta y reconoce que el sistema puede no siempre estar disponible debido a dificultades técnicas o fallas de Internet, o por cualquier otro motivo ajeno al Sitio, motivo por el cual no podrá imputársele responsabilidad alguna. El contenido del Sitio, junto con y sin que se considere una limitación, sus logotipos, programas, bases de datos, imágenes, textos información y archivos son de propiedad de PICKIT.
              </p>
              <p className="body-m mt-m">
                Su uso indebido así como su reproducción sin el expreso y escrito consentimiento previo de PICKIT serán objeto de las acciones judiciales que correspondan. El envío de información a través de la red o a través de e-mails tiene el riesgo de que tal información pueda ser captada por un tercero.
              </p>
              <p className="body-m mt-m">
                Serán por cuenta y riesgo del destinatario los daños que puedan sufrir los productos enviados a través de los Servicios por caso fortuito, fuerza mayor o naturaleza y vicio propio de las cosas. PICKIT será responsable en caso de dolo o culpa grave en la prestación de los Servicios. La responsabilidad de PICKIT estará limitada como máximo al valor del servicio específico.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h3 className="headline-s mb-s">MODIFICACIONES A LOS TÉRMINOS Y CONDICIONES</h3>
              <p className="body-m">
                El Sitio se reserva expresamente los siguientes derechos: (i) A modificar o eliminar, en forma unilateral, parcial o totalmente, tanto las disposiciones de los elementos que componen el Sitio, como su configuración general o particular; (ii) A denegar o retirar el acceso a este Sitio en cualquier momento y sin aviso previo; (iii) A poner término, suspender o interrumpir unilateralmente la prestación de los Servicios.
              </p>
              <p className="body-m mt-m">
                Los Términos y Condiciones serán interpretados y ejecutados de acuerdo a las leyes de la **República de Argentina**. El usuario se somete incondicionalmente a la jurisdicción de los tribunales de la Ciudad Autónoma de Buenos Aires para la resolución de cualquier duda, dificultad o controversia.
              </p>
              <p className="body-m mt-m">
                Se fija como domicilio de PICKIT en la **Av. del Libertador 5954 5to piso, Ciudad Autónoma de Buenos Aires, Código Postal 1428, República Argentina.**
              </p>
            </section>

            <section className={styles.legalSection}>
              <h3 className="headline-s mb-s">ARTÍCULOS PROHIBIDOS</h3>
              <p className="body-m">
                Sólo podrán ser enviados a través de los Servicios bienes cuya venta no se encuentre tácita o expresamente prohibida. Queda totalmente prohibido el envío de: armas, municiones, productos inflamables y/o explosivos; estupefacientes; propiedad robada; réplicas y falsificaciones; medicamentos y productos de salud; flora, fauna y derivados; fuegos artificiales y tabaco.
              </p>
            </section>

            <section className={styles.legalSection}>
              <h3 className="headline-s mb-s">PROPIEDAD INTELECTUAL</h3>
              <p className="body-m">
                El Sitio puede contener enlaces a otros sitios web o referencias de marcas de terceros, lo cual no indica que sean propiedad u operados por PICKIT. En virtud que PICKIT no tiene control sobre tales sitios, NO será responsable por los contenidos, materiales, acciones y/o servicios prestados por los mismos.
              </p>
              <p className="body-m mt-xl font-bold">
                PICKIT ARGENTINA S.A.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TerminosPage;
