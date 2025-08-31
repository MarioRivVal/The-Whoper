import type { ReactNode } from "react";
import s from "../assets/styles/components/titleSection.module.css";

type SectionTitleProps = {
  id: string;
  title: ReactNode;
  subtitle: string;
  icon: ReactNode;
};

export default function TitleSection({
  id,
  title,
  subtitle,
  icon,
}: SectionTitleProps) {
  return (
    <div id={`#${id}`} className={s.container}>
      <div className={s.titleBox}>
        <h3>{title}</h3>
        <p className="u--paragraph">{subtitle}</p>
        <div className={s.iconBox}>{icon}</div>
      </div>
    </div>
  );
}
