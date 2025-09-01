import ArrowLine from "../assets/icons/ArrowLine";
import s from "../assets/styles/components/processCard.module.css";
import OneIcon from "../assets/icons/OneIcon";
import TwoIcon from "../assets/icons/TwoIcon";
import ThreeIcon from "../assets/icons/ThreeIcon";
import FourIcon from "../assets/icons/FourIcon";
import FiveIcon from "../assets/icons/FiveIcon";

type ProcessCardProps = {
  id: string;
  letter: string;
  title: string;
  description: string;
  color?: boolean;
};

export default function ProcessCard({
  id,
  letter,
  title,
  description,
  color,
}: ProcessCardProps) {
  const selectIcon = (id: string) => {
    switch (id) {
      case "1":
        return <OneIcon />;
      case "2":
        return <TwoIcon />;
      case "3":
        return <ThreeIcon />;
      case "4":
        return <FourIcon />;
      case "5":
        return <FiveIcon />;
      default:
        return null; // o algún icono por defecto
    }
  };

  return (
    <div id={id} className={`${s.cardBox} ${color ? s.greenCard : ""}`}>
      <div className={`${s.titleCard} `}>
        <div className={s.numberIcon}>{selectIcon(id)}</div>
        <h2 className={s.title}>
          <span className="u--violet-letter">{letter}</span>
          {title}
        </h2>
        <div className={s.iconBox}>
          <ArrowLine />
        </div>
      </div>
      <div className={s.descCard}>
        <p>{description}</p>
      </div>
    </div>
  );
}
