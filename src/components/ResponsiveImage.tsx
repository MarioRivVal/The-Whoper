import type { Image } from "../types";

export default function ResponsiveImage({
  name,
  ext = "jpg",
  alt,
  className,
}: Image) {
  return (
    <picture className={className}>
      <source srcSet={`/images/${name}.webp`} type="image/webp" />
      <img src={`/images/${name}.${ext}`} alt={alt} loading="lazy" />
    </picture>
  );
}
