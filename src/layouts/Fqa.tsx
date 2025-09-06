import LikeIcon from "../assets/icons/LikeIcon";
import s from "../assets/styles/layouts/fqa.module.css";
import sl from "../assets/styles/components/slider.module.css";
import TitleSection from "../components/TitleSection";
import useCarousel from "../hooks/useCarousel";
import { questionsCards } from "../db/questionsCard";
import ColoredCard from "../components/ColoredCard";
import ResponsiveImage from "../components/ResponsiveImage";

export default function Fqa() {
  const { sliderRef, itemRefs } = useCarousel(questionsCards.length);
  return (
    <>
      <TitleSection
        id="fqa"
        title={
          <>
            <span className="u--violet-text">¿T</span>ienes dudas? Aqui estan
            las
            <span className="u--strong-text"> FQA</span>
          </>
        }
        subtitle="Todo lo que siempre quisiste saber antes de tener tu Whoper"
        icon={<LikeIcon />}
      />

      <section className="u--content-box u--content-box--blue">
        <ResponsiveImage
          name="comics/bee"
          className={s.pencilImg}
          alt="Lápiz con abeja dibujando"
          ext="png"
        />
        {/* SLIDER */}
        <div className={`${sl.slider} ${sl.sliderServices}`} ref={sliderRef}>
          {questionsCards.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              className={sl.item}
            >
              <ColoredCard item={item} type="large" />
            </div>
          ))}
        </div>

        <div className={s.imgsBox}>
          <ResponsiveImage
            name="comics/dog"
            className={s.dogImg}
            alt="Lápiz con abeja dibujando"
            ext="png"
          />
          <ResponsiveImage
            name="comics/disco"
            className={s.discoImg}
            alt="Lápiz con abeja dibujando"
            ext="png"
          />
        </div>
      </section>
    </>
  );
}
