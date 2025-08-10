import s from "../assets/styles/components/button.module.css";
import type { Button } from "../types";
import PointerIcon from "../assets/icons/Pointer";

export default function Button({ url, text, className }: Button) {
  return (
    <div className={s.container}>
      <span className={s.wrap}>
        <a href={url} className={`${s.btn} ${className}`}>
          {text}
        </a>
      </span>
      <PointerIcon className={s.icon} />
    </div>
  );
}
