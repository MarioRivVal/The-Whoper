import s from "../assets/styles/components/coloredCard.module.css";
import ArrowLine from "../assets/icons/ArrowLine";

type CardProps = {
  id: number;
  letter: string;
  title: string;
  description: string;
};

export default function ColoredCard({
  item,
  type,
}: {
  item: CardProps;
  type?: string;
}) {
  return (
    <div
      className={`${s.card} ${s[`card${item.id}`]} ${
        type === "large" ? s.large : ""
      }`}
    >
      <h2>
        <span className="u--violet-letter">{item.letter}</span>
        {item.title}
      </h2>
      <div className={s.iconBox}>
        <ArrowLine />
      </div>
      <p>{item.description}</p>
    </div>
  );
}
