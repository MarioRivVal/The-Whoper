import s from "../assets/styles/components/photoFrame.module.css";
import ResponsiveImage from "./ResponsiveImage";

type PhotoFrameProps = {
  img: string;
  alt: string;
};

export default function PhotoFrame({ img, alt }: PhotoFrameProps) {
  return (
    <div className={s.frame}>
      <ResponsiveImage
        name={`artist/${img}`}
        ext="png"
        alt={alt}
        className={s.artistImg}
      />
    </div>
  );
}
