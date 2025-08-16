import s from "../assets/styles/layouts/artist.module.css";
import PhotoFrame from "../components/PhotoFrame";
import ResponsiveImage from "../components/ResponsiveImage";

export default function Artist() {
  return (
    <div className={s.container}>
      <PhotoFrame />
      <ResponsiveImage
        name="comics/img-4"
        ext="png"
        alt="Caricatura de Felix 'El Whoper' , como enfermero"
        className={s.imgComics}
      />
    </div>
  );
}
