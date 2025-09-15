// components/Modal.jsx
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import s from "../assets/styles/components/modal.module.css";
import CloseIcon from "../assets/icons/CloseIcon";

type ModalProps = {
  isActive: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isActive, onClose, children }: ModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Cerrar con ESC y enfocar el botón de cierre al abrir
  useEffect(() => {
    if (!isActive) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    // foco al botón de cerrar
    setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => document.removeEventListener("keydown", onKey);
  }, [isActive, onClose]);

  // Cerrar haciendo click fuera del contenedor
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  return (
    <div
      className={`${s.modalBox} ${isActive ? s.modalBoxActive : ""}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isActive}
      onClick={handleBackdropClick}
    >
      <div className={s.modalContainer} onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeBtnRef}
          className={`${s.modalIcon} ${s.clickable}`}
          onClick={onClose}
          aria-label="Cerrar modal"
          type="button"
        >
          <CloseIcon />
        </button>

        <div className={s.modalContent}>{children}</div>
      </div>
    </div>
  );
}
