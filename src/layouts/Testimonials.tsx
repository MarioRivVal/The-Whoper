import s from "../assets/styles/layouts/testimonials.module.css";
import TitleSection from "../components/TitleSection";
import MegaphoneIcon from "../assets/icons/MegaphoneIcon";
import { testimonials } from "../db/testimonials";
import ResponsiveImage from "../components/ResponsiveImage";

export default function Testimonials() {
  return (
    <>
      <TitleSection
        id="gallery"
        title={
          <>
            <span className="u--violet-text">O</span>piniones de quién lo ha
            <span className="u--strong-text"> vivido</span>
          </>
        }
        subtitle="Quienes confiaron en El Whoper cuentan cómo su anécdota se volvió viñeta: un regalo distinto, divertido, hecho a medida y para toda la vida"
        icon={<MegaphoneIcon />}
      />

      <section className="u--content-box u--content-box--green">
        <div className={s.grid}>
          {testimonials.map((item) => (
            <figure
              key={item.id}
              className={`${s.testimonial} ${s[`testimonial${item.id}`]}`}
            >
              <blockquote className={s.shapeText}>
                <p>{item.text}</p>
              </blockquote>
              <figcaption>
                <span>{item.author}</span>
              </figcaption>
            </figure>
          ))}
          <ResponsiveImage
            name="comics/peanut"
            alt="Viñeta de cacahuete"
            ext="png"
            className={s.peanutImg}
          />
          <ResponsiveImage
            name="comics/sir"
            alt="Viñeta de Señor fumando cigarro"
            ext="png"
            className={s.sirImg}
          />

          <ResponsiveImage
            name="comics/magician"
            alt="Viñeta de Mago vagabundo"
            ext="png"
            className={s.magicianImg}
          />
        </div>
      </section>
    </>
  );
}
