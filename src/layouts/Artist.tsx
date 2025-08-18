import s from "../assets/styles/layouts/artist.module.css";
import PhotoFrame from "../components/PhotoFrame";
import ResponsiveImage from "../components/ResponsiveImage";

export default function Artist() {
  return (
    <>
      <div className={s.container}>
        <PhotoFrame />
        <ResponsiveImage
          name="comics/img-4"
          ext="png"
          alt="Caricatura de Felix 'El Whoper' , como enfermero"
          className={s.imgComics}
        />
      </div>
      <section className={s.content}>
        <ResponsiveImage
          name="comics/sunglasses"
          ext="png"
          alt="Vineta original de una gafas de sol"
          className={s.sunGlassesImg}
        />
        <h2>
          <span className="u--violet-text">M</span>uchos me conocen como <br />
          <span className="u--strong-text"> El Whoper</span>
        </h2>
        <div className={s.paragraphs}>
          <p>
            Desde siempre me sentí atraído por el lenguaje del cómic. Me gusta
            mirar la vida con sentido del humor y dibujarla con un trazo
            directo, irónico y muy humano.
          </p>
          <p>
            Un día pensé: ¿y si nuestras propias historias cotidianas fueran
            también dignas de una tira cómica? Así nació el estilo de humor que
            hoy comparto: cómics personalizados que retratan momentos reales,
            con alma, y una pizca de risa.
          </p>
          <p>
            Compagino mi trabajo como enfermero con mi vocación artística. He
            ganado premios en concursos nacionales e internacionales, diseñado
            carteles para carreras, ilustrado momentos únicos de personas y
            creado infinidad de viñetas sobre historias reales.
          </p>
          <p>Te invito a contarme la tuya. Yo la dibujo.</p>
        </div>
        <ResponsiveImage
          name="comics/heart"
          ext="png"
          alt="Vineta original de un corazón atraversado por una siringa"
          className={s.heartImg}
        />
      </section>
    </>
  );
}
