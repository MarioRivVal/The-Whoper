import { useEffect, useRef } from "react";
import s from "../assets/styles/components/slider.module.css";

type CardItem = {
  id: string | number;
  // lo que ya uses en tu ColoredCard…
};

type Props = {
  cards: CardItem[];
  renderCard: (item: CardItem) => React.ReactNode; // p.ej. (i)=> <ColoredCard item={i}/>
};

export default function Slider({ cards, renderCard }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // drag (pointer) para desktop y mobile
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    const down = (e: PointerEvent) => {
      isDown = true;
      el.setPointerCapture(e.pointerId);
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.classList.add(s.grabbing);
    };

    const move = (e: PointerEvent) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      el.scrollLeft = startScroll - dx;
    };

    const up = () => {
      isDown = false;
      el.classList.remove(s.grabbing);
    };

    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  // escala + inclinación según distancia al centro
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let raf = 0;

    const clamp = (n: number, a: number, b: number) =>
      Math.max(a, Math.min(b, n));

    const update = () => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const r = card.getBoundingClientRect();
        const cardCenter = r.left + r.width / 2;
        const dist = Math.abs(centerX - cardCenter);

        // 0 en el centro, 1 en el borde del viewport
        const norm = clamp(dist / (rect.width / 2), 0, 1);

        // escala 0.9 -> 1.25 hacia el centro
        const scale = 0.9 + (1 - norm) * 0.35;

        // inclinación suave según índice relativo al centro del array
        const mid = (cards.length - 1) / 2;
        const base = clamp((i - mid) * 6, -12, 12); // grados
        const rotate = base * (0.25 + 0.75 * norm); // casi recta en el centro

        card.style.transform = `translateZ(0) scale(${scale}) rotate(${rotate}deg)`;
        card.style.zIndex = String(1000 - Math.round(dist)); // la del centro encima
        card.style.filter = `brightness(${0.85 + (1 - norm) * 0.25})`;
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, [cards.length]);

  return (
    <div className={s.slider}>
      <div className={s.track} ref={trackRef}>
        {cards.map((item, idx) => (
          <div
            key={String(item.id)}
            ref={(el) => (cardRefs.current[idx] = el)}
            className={`${s.card}`}
          >
            {renderCard(item)}
          </div>
        ))}
      </div>
    </div>
  );
}
