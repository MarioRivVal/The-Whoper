// components/Terms.jsx
import s from "../assets/styles/layouts/terms.module.css";

export default function Terms() {
  return (
    <article className={s.terms} aria-labelledby="terms-title">
      <h2 id="terms-title">Aviso Legal</h2>

      <section className={s.section}>
        <h3>Información del titular</h3>
        <dl className={s.datalist}>
          <div>
            <dt>Titular</dt>
            <dd>Félix González </dd>
          </div>
          {/* <div>
            <dt>NIF/CIF</dt>
            <dd>71654735Y</dd>
          </div> */}
          {/* <div>
            <dt>Domicilio</dt>
            <dd>C/Ribera de Arriba 11 1B </dd>
          </div> */}
          <div>
            <dt>Teléfono</dt>
            <dd>
              <a href="tel:636105689">636105689</a>
            </dd>
          </div>
          {/* <div>
            <dt>Correo electrónico</dt>
            <dd>
              <a href="mailto:info@rdapadel.com">info@rdapadel.com</a>
            </dd>
          </div> */}
        </dl>
      </section>

      <section className={s.section}>
        <h3>Condiciones de uso</h3>
        <p>
          El acceso y uso de este sitio web atribuye la condición de usuario,
          que acepta, desde dicho acceso y uso, las presentes condiciones de
          uso.
        </p>
        <p>
          El titular se reserva el derecho a modificar cualquier tipo de
          información que pudiera aparecer en el sitio web, sin obligación de
          preavisar ni poner en conocimiento de los usuarios dichas
          modificaciones, entendiéndose como suficiente la publicación en este
          mismo sitio.
        </p>
      </section>

      <section className={s.section}>
        <h3>Responsabilidad</h3>
        <p>
          El titular no se hace responsable de la información y contenidos
          almacenados en foros, redes sociales o cualquier otro medio que
          permita a terceros publicar contenidos de forma independiente en la
          página web del prestador.
        </p>
        <p>
          No obstante, y en cumplimiento de lo dispuesto en la LSSICE, el
          titular se pone a disposición de todos los usuarios, autoridades y
          fuerzas de seguridad, colaborando de forma activa en la retirada o, en
          su caso, bloqueo de todos aquellos contenidos que pudieran afectar o
          contravenir la legislación nacional o internacional, derechos de
          terceros, la moral o el orden público.
        </p>
      </section>

      <section className={s.section}>
        <h3>Propiedad intelectual e industrial</h3>
        <p>
          Todos los contenidos del sitio web (textos, fotografías, gráficos,
          imágenes, iconos, tecnología, software, diseño gráfico, código fuente,
          etc.) son propiedad del titular o, en su caso, dispone de licencia o
          autorización expresa por parte de los autores.
        </p>
        <p>
          Queda prohibida la reproducción total o parcial, distribución o
          comunicación pública de los contenidos de este sitio web sin la
          autorización expresa del titular.
        </p>
      </section>

      <section className={s.section}>
        <h3>Legislación aplicable y jurisdicción</h3>
        <p>
          Las presentes condiciones se regirán por la legislación española. Para
          cualquier controversia que pudiera derivarse del acceso o uso de este
          sitio web, las partes se someten a los juzgados y tribunales de
          Asturias.
        </p>
      </section>

      <p className={s.smallprint}>
        Última actualización: {new Date().toLocaleDateString()}
      </p>
    </article>
  );
}
