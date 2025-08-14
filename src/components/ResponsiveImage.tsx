import s from "../assets/styles/components/responsiveImage.module.css";
import type { Image } from "../types";

export default function ResponsiveImage({
  name,
  ext = "jpg",
  alt,
  className,
}: Image) {
  console.log(className);
  return (
    <picture className={`${s.imgBox} ${className}`}>
      <source srcSet={`/images/${name}.webp`} type="image/webp" />
      <img src={`/images/${name}.${ext}`} alt={alt} loading="lazy" />
    </picture>
  );
}
