import { useState } from "react";
import s from "../assets/styles/components/navigation.module.css";
import MenuIcon from "../assets/icons/Menu";

export default function Navigation() {
  const [isNavActive, setIsNavActive] = useState(false);

  // const handleSmoothScrolling = (e) => {
  //   // smoothScrolling(e);
  //   setIsNavActive(false);
  // };

  const handleCheckboxChange = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <div className={`navigation ${isNavActive ? "navigation-active" : ""}`}>
      <div className={s.icon} onClick={handleCheckboxChange}>
        <MenuIcon />
      </div>
      {/* <div className="navigation-background">&nbsp;</div> */}
      {/* <nav className="navigation-nav">
        <ul className="navigation-list">
          <li>
            <a
              className="navigation-link"
              href="#header"
              onClick={(e) => handleSmoothScrolling(e)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="navigation-link"
              href="#portfolio"
              onClick={(e) => handleSmoothScrolling(e)}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="navigation-link"
              href="#about"
              onClick={(e) => handleSmoothScrolling(e)}
            >
              Sobre Mí
            </a>
          </li>
          <li>
            <a
              className="navigation-link"
              href="#resume"
              onClick={(e) => handleSmoothScrolling(e)}
            >
              Currículum
            </a>
          </li>
          <li>
            <a
              className="navigation-link"
              href="#testimonial"
              onClick={(e) => handleSmoothScrolling(e)}
            >
              Testimonios
            </a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
}
