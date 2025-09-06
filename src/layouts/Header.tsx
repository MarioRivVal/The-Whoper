import s from "../assets/styles/layouts/header.module.css";
import b from "../assets/styles/components/button.module.css";
import ResponsiveImage from "../components/ResponsiveImage";
import Button from "../components/Button";
import CheckIcon from "../assets/icons/check";

export default function Header() {
  return (
    <header className={s.header}>
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
        <Button
          url="https://wa.me/+34636105689"
          text="Escríbeme"
          className={b.greenBtn}
        />
        <ul className={s.string}>
          <li className={s.stringItem}>
            <CheckIcon className={s.stringIcon} />
            <h2 className={s.stringTitle}>Viñetas Personalizadas</h2>
          </li>
          <li className={s.stringItem}>
            <CheckIcon className={s.stringIcon} />
            <h2 className={s.stringTitle}>Humor cotidiano</h2>
          </li>
        </ul>
      </div>
    </header>
  );
}
