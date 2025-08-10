import s from "../assets/styles/layouts/Header.module.css";
import b from "../assets/styles/components/button.module.css";
import Navigation from "../components/Navigation";
import ResponsiveImage from "../components/ResponsiveImage";
import Button from "../components/Button";

export default function Header() {
  return (
    <header className={s.header}>
      <Navigation />
      <div className={s.container}>
        <div className={s.titleBox}>
          <ResponsiveImage
            name="mountain"
            ext="png"
            alt="Snow-capped mountain under a clear sky, evoking a sense of calm and adventure"
            className={s.mountainImg}
          />

          <h2 className={s.title}>
            <span>El</span>
            <span>Whoper</span>
          </h2>
          <ResponsiveImage
            name="deer"
            ext="png"
            alt="Standing deer looking forward in a natural setting, conveying tranquility and connection to nature"
            className={s.deerImg}
          />
        </div>
        <Button url="#" text="Escríbeme" className={b.greenBtn} />
      </div>
    </header>
  );
}
