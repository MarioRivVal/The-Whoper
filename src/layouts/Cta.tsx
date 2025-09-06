import RocketIcon from "../assets/icons/RocketIcon";
import s from "../assets/styles/layouts/cta.module.css";
import b from "../assets/styles/components/button.module.css";
import TitleSection from "../components/TitleSection";
import PhotoFrame from "../components/PhotoFrame";
import Button from "../components/Button";
import ResponsiveImage from "../components/ResponsiveImage";
import WhatsIcon from "../assets/icons/WhatsIcon";
import InstaIcon from "../assets/icons/InstaIcon";

export default function Cta() {
  return (
    <>
      <TitleSection
        id="contact"
        title={
          <>
            <span className="u--violet-text">H</span>ablemos y creo tu las
            <span className="u--strong-text"> viñeta</span>
          </>
        }
        subtitle="Escríbeme por WhatsApp y cuéntame lo que tienes en mente."
        icon={<RocketIcon />}
      />
      <section className="u--content-box u--content-box--orange">
        <PhotoFrame
          img="felix-2"
          alt="Felix inspirado y creando un boceto enun bar"
        />
        <div className={s.ctaBox}>
          <div className={s.btnsBox}>
            <Button text="Whatsapp" url="#" className={b.greenBtn} />
            <Button text="Instagram" url="#" className={b.violetBtn} />
            <div className={s.whatsIcon}>
              <WhatsIcon />
            </div>
            <div className={s.instaIcon}>
              <InstaIcon />
            </div>
          </div>
          <ResponsiveImage
            name="comics/happy"
            alt="Viñeta de Felix en calsoncillos"
            ext="png"
            className={s.felixImg}
          />
          <ResponsiveImage
            name="comics/ink"
            alt="Viñeta de gota de tinta para dibujar"
            ext="png"
            className={s.inkImg}
          />
        </div>
      </section>
    </>
  );
}
