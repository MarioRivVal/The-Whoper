import s from "../assets/styles/layouts/services.module.css";

export default function Services() {
  return (
    <>
      <div id="#service" className={s.container}>
        <div className={s.titleBox}>
          <h2>
            <span className="u--violet-text">Q</span>ue puedo
            <span className="u--strong-text"> hacer</span> por ti
          </h2>
          <p>
            Desde siempre me sentí atraído por el lenguaje del cómic. Me gusta
            mirar la vida con sentido del humor y dibujarla con un trazo
            directo, irónico y muy humano.
          </p>
        </div>
      </div>
    </>
  );
}
