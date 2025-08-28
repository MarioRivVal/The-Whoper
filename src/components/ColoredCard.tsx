import s from "../assets/styles/components/coloredCard.module.css";

type CardProps = {
  id: number;
  letter: string;
  title: string;
  description: string;
};

export default function ColoredCard({ item }) {
  return (
    <div className={`${s.card} ${s[`card${item.id}`]}`}>
      <h2>
        <span className={s.capitalLetter}>{item.letter}</span>
        {item.title}
      </h2>
      <p>{item.description}</p>
    </div>
  );
}
