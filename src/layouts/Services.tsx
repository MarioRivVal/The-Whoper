import s from "../assets/styles/layouts/services.module.css";
import { useEffect, useRef, useState } from "react";
import PlusOneIcon from "../assets/icons/PlusOne";
import ColoredCard from "../components/ColoredCard";

type Card = {
  id: number;
  letter: string;
  title: string;
  description: string;
};

export default function Services() {
  const cards: Card[] = [
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

  const [active, setActive] = useState(
    Math.min(3, Math.max(0, cards.length - 1))
  );
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Ajustes finos (tócalos a tu gusto)
  const BASE_SHIFT = 150; // separación lateral en px
  const SCALE_STEP = 0.2; // cuánto baja el scale por paso desde el centro
  const CENTER_SCALE = 1.12; // escala del activo (centro)
  const MAX_TILT = 9; // rotación máxima en grados

  const clamp = (n: number, a: number, b: number) =>
    Math.max(a, Math.min(b, n));

  const loadShow = (dragOffset = 0) => {
    const items = itemRefs.current.filter(
      (el): el is HTMLDivElement => el !== null
    );
    if (!items.length) return;

    const a = clamp(active, 0, items.length - 1);
    const BASE_Z = 1000;

    for (let i = 0; i < items.length; i++) {
      const d = i - a;
      const abs = Math.abs(d);
      const x = BASE_SHIFT * d + dragOffset;
      const scale = clamp(CENTER_SCALE - SCALE_STEP * abs, 0.82, CENTER_SCALE);
      const rot =
        d === 0 ? 0 : clamp(MAX_TILT - abs * 2, 2, MAX_TILT) * (d < 0 ? 1 : -1);

      items[i].style.transform = `
      translate(-50%, -50%)
      translateX(${x}px)
      scale(${scale})
      rotate(${rot}deg)
    `;
      items[i].style.zIndex = String(BASE_Z - abs); // siempre positivo
    }
  };

  useEffect(() => {
    loadShow(0);
    const onResize = () => loadShow(0);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, cards.length]);

  const next = () => setActive((i) => (i + 1 < cards.length ? i + 1 : i));
  const prev = () => setActive((i) => (i - 1 >= 0 ? i - 1 : i));

  // ----- Drag / Swipe (desktop y móvil) -----
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const THRESH = 40; // px para considerar swipe
    let down = false;
    let startX = 0;
    let startY = 0;
    let pointerId = 0;

    const controller = new AbortController();
    const { signal } = controller;

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      down = true;
      startX = e.clientX;
      startY = e.clientY;
      pointerId = e.pointerId;
      el.setPointerCapture(pointerId);
      el.classList.add(s.dragging);
    };

    const onMove = (e: PointerEvent) => {
      if (!down) return;
      // bloqueo de eje: si el gesto es más vertical que horizontal, dejamos al navegador hacer scroll
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (Math.abs(dx) > Math.abs(dy)) {
        // gesto horizontal: evitamos selección rara
        window.getSelection?.()?.removeAllRanges();
      }
    };

    const onUp = (e: PointerEvent) => {
      if (!down) return;
      el.classList.remove(s.dragging);
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      // Solo si el gesto fue principalmente horizontal y pasó el umbral
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > THRESH) {
        if (dx < 0) next();
        else prev();
      }
      down = false;
    };

    el.addEventListener("pointerdown", onDown, { passive: true, signal });
    el.addEventListener("pointermove", onMove, { passive: true, signal });
    window.addEventListener("pointerup", onUp, { passive: true, signal });
    window.addEventListener("pointercancel", onUp, { passive: true, signal });
    window.addEventListener("pointerleave", onUp, { passive: true, signal });

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div id="service" className={s.container}>
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

        {/* <div className={s.controls}>
          <button onClick={prev} aria-label="Anterior">
            anterior
          </button>
          <button onClick={next} aria-label="Siguiente">
            siguiente
          </button>
        </div> */}
      </section>
    </>
  );
}
