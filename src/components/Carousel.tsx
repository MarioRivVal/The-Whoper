// import React, { useEffect, useRef, useState } from "react";
// import s from "../assets/styles/components/carousel.module.css";

// type Props<T> = {
//   items: T[];
//   renderItem: (item: T, index: number) => React.ReactNode;
//   initialIndex?: number;
// };

// export default function Carousel<T>({
//   items,
//   renderItem,
//   initialIndex = Math.min(3, Math.max(0, items.length - 1)),
// }: Props<T>) {
//   // Constantes “fijas” para mantener simple
//   const BASE_SHIFT = 150; // px de separación lateral
//   const SCALE_STEP = 0.2; // caída de escala por paso
//   const CENTER_SCALE = 1.12; // escala del activo
//   const MAX_TILT = 9; // rotación máxima (deg)
//   const SWIPE_THRESHOLD = 40; // px para considerar swipe

//   const [active, setActive] = useState(initialIndex);
//   const sliderRef = useRef<HTMLDivElement | null>(null);
//   const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

//   const clamp = (n: number, a: number, b: number) =>
//     Math.max(a, Math.min(b, n));

//   const renderPositions = () => {
//     const nodes = itemRefs.current.filter(
//       (el): el is HTMLDivElement => el !== null
//     );
//     if (!nodes.length) return;

//     const a = clamp(active, 0, nodes.length - 1);
//     const BASE_Z = 1000;

//     for (let i = 0; i < nodes.length; i++) {
//       const d = i - a;
//       const abs = Math.abs(d);
//       const x = BASE_SHIFT * d;
//       const scale = clamp(CENTER_SCALE - SCALE_STEP * abs, 0.82, CENTER_SCALE);
//       const rot =
//         d === 0 ? 0 : clamp(MAX_TILT - abs * 2, 2, MAX_TILT) * (d < 0 ? 1 : -1);

//       nodes[i].style.transform = `
//         translate(-50%, -50%)
//         translateX(${x}px)
//         scale(${scale})
//         rotate(${rot}deg)
//       `;
//       nodes[i].style.zIndex = String(BASE_Z - Math.round(abs * 10)); // siempre positivo
//     }
//   };

//   useEffect(() => {
//     renderPositions();
//     const onResize = () => renderPositions();
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [active, items.length]);

//   // Swipe simple: decide prev/next al soltar (Android/iOS/desktop)
//   useEffect(() => {
//     const el = sliderRef.current;
//     if (!el) return;

//     let down = false;
//     let startX = 0,
//       startY = 0;
//     let dx = 0,
//       dy = 0;
//     let horiz = false;
//     let pid = 0;

//     const controller = new AbortController();
//     const { signal } = controller;

//     const next = () => setActive((i) => (i + 1 < items.length ? i + 1 : i));
//     const prev = () => setActive((i) => (i - 1 >= 0 ? i - 1 : i));

//     const onDown = (e: PointerEvent): void => {
//       if (e.pointerType === "mouse" && e.button !== 0) return;
//       down = true;
//       startX = e.clientX;
//       startY = e.clientY;
//       dx = 0;
//       dy = 0;
//       horiz = false;
//       pid = e.pointerId;
//       el.setPointerCapture(pid);
//       el.classList.add(s.dragging);
//     };

//     const onMove = (e: PointerEvent): void => {
//       if (!down) return;
//       dx = e.clientX - startX;
//       dy = e.clientY - startY;

//       if (!horiz && Math.abs(dx) > Math.abs(dy) + 6) {
//         horiz = true;
//         el.classList.add(s.locking); // activa touch-action:none
//       }
//       if (horiz && e.cancelable) e.preventDefault(); // necesario en móviles
//       window.getSelection?.()?.removeAllRanges();
//     };

//     const onUp = (): void => {
//       if (!down) return;
//       el.classList.remove(s.dragging, s.locking);

//       if (horiz && Math.abs(dx) > SWIPE_THRESHOLD) {
//         if (dx < 0) next();
//         else prev();
//       }
//       down = false;
//       horiz = false;
//     };

//     el.addEventListener("pointerdown", onDown, { passive: false, signal });
//     el.addEventListener("pointermove", onMove, { passive: false, signal });
//     window.addEventListener("pointerup", onUp, { passive: true, signal });
//     window.addEventListener("pointercancel", onUp, { passive: true, signal });
//     window.addEventListener("pointerleave", onUp, { passive: true, signal });

//     return () => controller.abort();
//   }, [items.length]);

//   return (
//     <div className={s.root}>
//       <div className={s.slider} ref={sliderRef}>
//         {items.map((item, idx) => (
//           <div
//             key={(item as any)?.id ?? idx}
//             ref={(el) => {
//               itemRefs.current[idx] = el;
//             }}
//             className={s.item}
//           >
//             {renderItem(item, idx)}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
