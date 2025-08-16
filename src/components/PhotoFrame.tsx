import s from "../assets/styles/components/photoFrame.module.css";
import ResponsiveImage from "./ResponsiveImage";

export default function PhotoFrame() {
  return (
    <div className={s.frame}>
      <ResponsiveImage
        name="artist/felix-1"
        ext="png"
        alt="Fotografia de Felix caminando  tomada de frente a una pared artistica"
        className={s.artistImg}
      />
    </div>
  );
}
