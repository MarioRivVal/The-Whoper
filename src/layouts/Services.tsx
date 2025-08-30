import s from "../assets/styles/layouts/services.module.css";
import PlusOneIcon from "../assets/icons/PlusOne";
import ColoredCard from "../components/ColoredCard";
import ResponsiveImage from "../components/ResponsiveImage";
import { servicesCards as cards } from "../db/servicesCards";
import useCarousel from "../hooks/useCarousel";
import LightCard from "../components/ligthCard";
import { ideasCards } from "../db/ideasCards";

export default function Services() {
  const { sliderRef, itemRefs } = useCarousel(cards.length);

  return (
    <>
      <div id="#services" className={s.container}>
        <div className={s.titleBox}>
          <h3>
            <span className="u--violet-text">Q</span>ue puedo
            <span className="u--strong-text"> hacer</span> por ti
          </h3>
          <p className="u--paragraph">
            Desde siempre me sentí atraído por el lenguaje del cómic. Me gusta
            mirar la vida con sentido del humor y dibujarla con un trazo
            directo, irónico y muy humano.
          </p>
          <div className={s.iconBox}>
            <PlusOneIcon />
          </div>
        </div>
      </div>

      <section className={s.content}>
        <ResponsiveImage
          name="comics/pencil"
          className={s.pencilImg}
          alt="Lápiz dibujando"
          ext="png"
        />
        <div className={s.slider} ref={sliderRef}>
          {cards.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              className={s.item}
            >
              <ColoredCard item={item} />
            </div>
          ))}
        </div>

        <div className={s.servicesIntro}>
          <p className="u--paragraph">
            Las viñetas personalizadas de El Whoper son perfectas para
            sorprender, emocionar, enseñar o celebrar. Aquí tienes algunas
            ideas:
          </p>
          <ResponsiveImage
            name="comics/felix-1"
            alt="Viñeta de Felix dibujando"
            className={s.felixImg}
            ext="png"
          />
        </div>
        <div className={s.ideasBox}>
          {ideasCards.map((item) => (
            <LightCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
