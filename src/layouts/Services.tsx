import s from "../assets/styles/layouts/services.module.css";
import PlusOneIcon from "../assets/icons/PlusOne";
import ColoredCard from "../components/ColoredCard";

export default function Services() {
  const cards = [
    {
      id: 1,
      letter: "V",
      title: "iñeta simple",
      description: "Una sola escena con humor o mensaje personalizado.",
    },
    {
      id: 2,
      letter: "T",
      title: "ira cómica",
      description: "Una pequeña historia contada en varias viñetas.",
    },
    {
      id: 3,
      letter: "C",
      title: "arteles ilustrados",
      description: "Diseño de póster para eventos, carreras o celebraciones.",
    },
    {
      id: 4,
      letter: "V",
      title: "iñetas premio",
      description:
        "Viñetas como trofeo, detalle o reconocimiento conmemorativo.",
    },
    {
      id: 5,
      letter: "G",
      title: "ran formato",
      description:
        "Ilustraciones de gran tamaño para exposiciones o presentaciones.",
    },
    {
      id: 6,
      letter: "I",
      title: "nfografías",
      description:
        "Visualización de información o procesos con estilo cómico y claro.",
    },
  ];
  return (
    <>
      <div id="#service" className={s.container}>
        <div className={s.titleBox}>
          <h3>
            <span className="u--violet-text">Q</span>ue puedo
            <span className="u--strong-text"> hacer</span> por ti
          </h3>
          <p>
            Desde siempre me sentí atraído por el lenguaje del cómic. Me gusta
            mirar la vida con sentido del humor y dibujarla con un trazo
            directo, irónico y muy humano.
          </p>
        </div>
        <div className={s.iconBox}>
          <PlusOneIcon />
        </div>
      </div>
      <section className={s.content}>
        <div className={s.slider}>
          {cards.map((item) => (
            <ColoredCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
