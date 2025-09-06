import s from "../assets/styles/layouts/footer.module.css";
import ResponsiveImage from "../components/ResponsiveImage";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <ResponsiveImage
          name="whoper"
          alt="Logo del Whoper"
          ext="png"
          className={s.logoImg}
        />

        <div className={s.copyright}>
          <p>
            No todo va a ser reir: aquí el{" "}
            <a className="u--red-text" href="#">
              aviso legal
            </a>
          </p>
          <p>
            Diseño original y desarrollo por{" "}
            <a
              className="u--red-text"
              href="https://www.netneo.es/"
              target="_blank"
              rel="noopener noreferrer"
            >
              netneo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
