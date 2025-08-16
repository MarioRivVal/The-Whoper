import s from "../assets/styles/layouts/intro.module.css";

import ResponsiveImage from "../components/ResponsiveImage";

export default function Intro() {
  return (
    <main className={s.main}>
      <div className={s.grid}>
        <h1 className={s.title1}>
          <span className={`${s.t} ${s.t1}`}>Tú me</span>
          <span className={`${s.t} ${s.t2}`}>cuentas</span>
          <span className={`${s.t} ${s.t3}`}>
            la <span className={s.highlight}>historia,</span>
          </span>
          <span className={`${s.t} ${s.t4}`}>yo la</span>
          <span className={`${s.t} ${s.t5}`}>convierto</span>
          <span className={`${s.t} ${s.t6}`}>en</span>
          <span className={`${s.t} ${s.t7}`}>una</span>
          <span className={`${s.t} ${s.t8}`}>
            <span className={s.highlight}>viñeta</span>
          </span>
          <span className={`${s.t} ${s.t9}`}>
            <span className={s.highlight}>única</span>
          </span>
        </h1>

        {/* Ilustraciones */}
        <ResponsiveImage
          name="comics/img-1"
          ext="png"
          alt="Viñeta de Mujer peliroja sobre un camello"
          className={`${s.art} ${s.art1}`}
        />

        <ResponsiveImage
          name="comics/img-2"
          ext="png"
          alt="Viñeta de autoretrato de Felix el 'Whoper' con uniforme de enfermero"
          className={`${s.art} ${s.art2}`}
        />
        <ResponsiveImage
          name="comics/img-3"
          ext="png"
          alt="Viñeta de personaje inspirado a Obelix"
          className={`${s.art} ${s.art3}`}
        />
      </div>
    </main>
  );
}
