import s from "../assets/styles/layouts/services.module.css";
import b from "../assets/styles/components/button.module.css";
import sl from "../assets/styles/components/slider.module.css";
import PlusOneIcon from "../assets/icons/PlusOne";
import ColoredCard from "../components/ColoredCard";
import ResponsiveImage from "../components/ResponsiveImage";
import { servicesCards } from "../db/servicesCards";
import LightCard from "../components/ligthCard";
import { ideasCards } from "../db/ideasCards";
import Button from "../components/Button";
import TitleSection from "../components/TitleSection";

import useCarousel from "../hooks/useCarousel";

export default function Services() {
  const { sliderRef, itemRefs } = useCarousel(servicesCards.length);
  return (
    <>
      <TitleSection
        id="services"
        title={
          <>
            <span className="u--violet-text">Q</span>ue puedo
            <span className="u--strong-text"> hacer</span> por ti
          </>
        }
        subtitle="Desde siempre me sentí atraído por el lenguaje del cómic. Me gusta
            mirar la vida con sentido del humor y dibujarla con un trazo
            directo, irónico y muy humano."
        icon={<PlusOneIcon />}
      />

      <section className="u--content-box u--content-box--blue">
        <ResponsiveImage
          name="comics/pencil"
          className={s.pencilImg}
          alt="Lápiz dibujando"
          ext="png"
        />
        {/* SLIDER */}
        <div className={`${sl.slider} ${sl.sliderServices}`} ref={sliderRef}>
          {servicesCards.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              className={sl.item}
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
        <Button url="#" text="Encarga una viñeta" className={b.violetBtn} />
      </section>
    </>
  );
}
