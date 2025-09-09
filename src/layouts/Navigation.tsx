import { useState } from "react";
import s from "../assets/styles/layouts/navigation.module.css";
import MenuIcon from "../assets/icons/Menu";
import CloseIcon from "../assets/icons/CloseIcon";

export default function Navigation() {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleSmoothScrolling = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    if (target.tagName === "A") {
      const id = target.getAttribute("href");
      if (id) {
        setTimeout(() => {
          document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
    setIsNavActive(false);
  };

  const handleCheckboxChange = () => {
    setIsNavActive(!isNavActive);
  };
  return (
    <div className={`${s.navigation} ${isNavActive ? s.navigationActive : ""}`}>
      <div className={s.navigationButton} onClick={handleCheckboxChange}>
        {isNavActive ? <CloseIcon /> : <MenuIcon />}
      </div>
      <div className={s.navigationBackground}>&nbsp;</div>
      <nav className={s.navigationNav}>
        <ul className={s.navigationList}>
          <li>
            <a
              className={s.navigationLink}
              href="#artist"
              onClick={(e) => handleSmoothScrolling(e)}
            >
              El Whoper
            </a>
          </li>
          <li>
            <a
              className={s.navigationLink}
              href="#services"
              onClick={(e) => handleSmoothScrolling(e)}
            >
              Quiero mi viñeta!
            </a>
          </li>
          <li>
            <a
              className={s.navigationLink}
              href="#process"
              onClick={(e) => handleSmoothScrolling(e)}
            >
              Como lo hago
            </a>
          </li>
          <li>
            <a
              className={s.navigationLink}
              href="#gallery"
              onClick={(e) => handleSmoothScrolling(e)}
            >
              Algunos ejemplos
            </a>
          </li>
          <li>
            <a
              className={s.navigationLink}
              href="#testimonials"
              onClick={(e) => handleSmoothScrolling(e)}
            >
              Opiniones reales
            </a>
          </li>
          <li>
            <a
              className={s.navigationLink}
              href="#fqa"
              onClick={(e) => handleSmoothScrolling(e)}
            >
              Tienes preguntas?
            </a>
          </li>
          <li>
            <a
              className={s.navigationLink}
              href="#contact"
              onClick={(e) => handleSmoothScrolling(e)}
            >
              Escribéme hoy mismo
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
