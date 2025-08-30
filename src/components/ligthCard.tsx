import s from "../assets/styles/components/lightCard.module.css";
import ResponsiveImage from "./ResponsiveImage";
import CheckIcon from "../assets/icons/check";
import type { CardProps } from "../db/ideasCards";

type LightCardProps = {
  item: CardProps;
};

export default function LightCard({ item }: LightCardProps) {
  return (
    <div
      className={`${s.card} ${s[`card${item.id}`]} ${
        item.reverse ? s.reverse : ""
      }`}
    >
      <div className={s.strip}>
        <div className={s.track}>
          <div className={s.row}>
            {Array.from({ length: 8 }).map((_, i) => (
              <span className={s.chunk} key={i}>
                {item.strip}
              </span>
            ))}
          </div>
          {/* copia para loop sin cortes */}
          <div className={s.row} aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <span className={s.chunk} key={`c${i}`}>
                {item.strip}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ResponsiveImage
        name={`comics/${item.img}`}
        ext="png"
        className={s.ideaImg}
        alt={item.alt}
      />

      <ul className={s.list}>
        {item.ideas.map((idea: string, index: number) => (
          <li key={index} className={s.item}>
            <CheckIcon className={s.icon} />
            <span>{idea}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
