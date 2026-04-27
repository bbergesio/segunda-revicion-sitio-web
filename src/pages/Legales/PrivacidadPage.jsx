import Header from '../../components/Header/Header';
import styles from './PrivacidadPage.module.css';

const PrivacidadPage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.contentSection}>
        <div className="container narrow">
          <h2 className="headline-l mb-l">Políticas de privacidad</h2>
          
          <div className={styles.legalBody}>
            <p className="body-l mb-m">
              Por el hecho de ingresar sus datos personales en este sitio (“Site”), el cual se encuentra operado por PICKIT ARGENTINA S.A ("PICKIT"), los titulares de los datos (en adelante, los “Usuarios”) declaran conocer y aceptar que:
            </p>

            <ol className={styles.legalList}>
              <li>
                <p className="body-m">
                  El destinatario de los referidos datos personales es **PICKIT ARGENTINA S.A.**, la cual procederá a ingresar los datos denunciados a una base de datos de su titularidad. PICKIT será el responsable del tratamiento y seguridad de los datos personales registrados en la base de datos. PICKIT recopilará dichos datos personales y utilizará los mismos en total cumplimiento de la legislación vigente y las condiciones aquí informadas.
                </p>
              </li>
              <li>
                <p className="body-m">
                  PICKIT podrá utilizar los datos personales para fines de desarrollo de su actividad comercial y/o la elaboración de estadísticas generales, sin identificar a los Usuarios y/o formar un perfil de consumidores y/o consultar a los Usuarios o comunicarse con los mismos, y/o para proveer a los Usuarios con los productos o servicios solicitados por éstos y/o para anunciar otros servicios o productos de PICKIT que juzgue puedan ser de interés.
                </p>
              </li>
              <li>
                <p className="body-m">
                  PICKIT podrá utilizar los datos personales para enviar información y material publicitario o promocional de las marcas asociadas al servicio de PICKIT.
                </p>
              </li>
              <li>
                <p className="body-m">
                  Los Usuarios garantizan la veracidad y exactitud de los datos personales registrados en este Site, por lo que asumen la correspondiente responsabilidad en caso que los mismos no sean exactos. PICKIT no asume ninguna responsabilidad en el caso de inexactitud de los datos proporcionados por los Usuarios.
                </p>
              </li>
              <li>
                <p className="body-m">
                  Los Usuarios podrán acceder, rectificar o suprimir los datos ingresados dentro de las secciones de este Site habilitadas a tales efectos o, en su caso, comunicándose con PICKIT vía telefónica al **0800-345-3451** o por correo al siguiente domicilio: **La Pampa 1517 Piso 6, Ciudad Autónoma de Buenos Aires, República Argentina.**
                </p>
              </li>
              <li>
                <p className="body-m">
                  El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326. La **DIRECCION NACIONAL DE PROTECCION DE DATOS PERSONALES**, Órgano de Control de la Ley Nº 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacidadPage;
