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
            la <em className={s.highlight}>historia,</em>
          </span>
          <span className={`${s.t} ${s.t4}`}>yo la</span>
          <span className={`${s.t} ${s.t5}`}>convierto</span>
          <span className={`${s.t} ${s.t6}`}>en una</span>
          <span className={`${s.t} ${s.t7}`}>
            <em className={s.highlight}>viñeta única</em>
          </span>
        </h1>

        {/* Ilustraciones */}
        <ResponsiveImage
          name="intro/img-1"
          ext="png"
          alt="Viñeta de personaje inspirado a Obelix"
          className="art art--1"
        />
        <ResponsiveImage
          name="intro/img-2"
          ext="png"
          alt="Viñeta de Mujer peliroja sobre un camello"
          className="art art--2"
        />
        <ResponsiveImage
          name="intro/img-3"
          ext="png"
          alt="Viñeta de autoretrato de Felix el 'Whoper' con uniforme de enfermero"
          className="art art--3"
        />
      </div>
    </main>
  );
}
