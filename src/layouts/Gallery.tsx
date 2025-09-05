import s from "../assets/styles/layouts/gallery.module.css";
import b from "../assets/styles/components/button.module.css";
import sl from "../assets/styles/components/slider.module.css";
import TitleSection from "../components/TitleSection";
import CrowIcon from "../assets/icons/CrowIcon";
import useCarousel from "../hooks/useCarousel";
import ResponsiveImage from "../components/ResponsiveImage";
import Button from "../components/Button";
import FollowIcon from "../assets/icons/FollowIcon";

export default function Gallery() {
  const group1 = [1, 2, 3, 4, 5, 6, 7];
  const group2 = [8, 9, 10, 11, 12, 13, 14];
  const group3 = [15, 16, 17, 18, 19, 20, 21];
  const group4 = [22, 23, 24, 25, 26, 27, 28];

  const ref1 = useCarousel(group1.length);
  const ref2 = useCarousel(group2.length);
  const ref3 = useCarousel(group3.length);
  const ref4 = useCarousel(group4.length);

  return (
    <>
      <TitleSection
        id="gallery"
        title={
          <>
            <span className="u--violet-text">G</span>aleria de algunos
            <span className="u--strong-text"> trabajos</span>
          </>
        }
        subtitle="Una selección de viñetas, tiras cómicas y carteles creados por El Whoper para todo tipo de personas, eventos y situaciones."
        icon={<CrowIcon />}
      />

      <section className="u--content-box u--content-box--violet">
        <div className={s.slidersBox}>
          {/* GROUP 1 */}
          <div
            className={`${sl.slider} ${sl.sliderGallery}`}
            ref={ref1.sliderRef}
          >
            {group1.map((idx) => (
              <div
                key={idx}
                ref={(el) => {
                  ref1.itemRefs.current[idx] = el;
                }}
                className={sl.item}
              >
                <ResponsiveImage
                  name={`gallery/img-${idx}`}
                  ext="png"
                  alt="Imagen de la galeria de trabajos realizados"
                  className={s.galleryImg}
                />
              </div>
            ))}
          </div>
          {/* GROUP 2 */}
          <div
            className={`${sl.slider} ${sl.sliderGallery}`}
            ref={ref2.sliderRef}
          >
            {group2.map((idx) => (
              <div
                key={idx}
                ref={(el) => {
                  ref2.itemRefs.current[idx] = el;
                }}
                className={sl.item}
              >
                <ResponsiveImage
                  name={`gallery/img-${idx}`}
                  ext="png"
                  alt="Imagen de la galeria de trabajos realizados"
                  className={s.galleryImg}
                />
              </div>
            ))}
          </div>
          {/* GROUP 3 */}
          <div
            className={`${sl.slider} ${sl.sliderGallery}`}
            ref={ref3.sliderRef}
          >
            {group3.map((idx) => (
              <div
                key={idx}
                ref={(el) => {
                  ref3.itemRefs.current[idx] = el;
                }}
                className={sl.item}
              >
                <ResponsiveImage
                  name={`gallery/img-${idx}`}
                  ext="png"
                  alt="Imagen de la galeria de trabajos realizados"
                  className={s.galleryImg}
                />
              </div>
            ))}
          </div>
          {/* GROUP 4 */}
          <div
            className={`${sl.slider} ${sl.sliderGallery}`}
            ref={ref4.sliderRef}
          >
            {group4.map((idx) => (
              <div
                key={idx}
                ref={(el) => {
                  ref4.itemRefs.current[idx] = el;
                }}
                className={sl.item}
              >
                <ResponsiveImage
                  name={`gallery/img-${idx}`}
                  ext="png"
                  alt="Imagen de la galeria de trabajos realizados"
                  className={s.galleryImg}
                />
              </div>
            ))}
          </div>

          <div className={s.btnGroup}>
            <Button
              text="Muchas más en Instagram"
              url="#"
              className={b.greenBtn}
            />
            <div className={s.iconBox}>
              <FollowIcon />
            </div>
          </div>

          <ResponsiveImage
            name="comics/head"
            ext="png"
            alt="Viñeta de una cabeza"
            className={s.headImg}
          />
          <ResponsiveImage
            name="comics/liquid"
            ext="png"
            alt="Viñeta de un liquido amarillento"
            className={s.liquidImg}
          />
          <ResponsiveImage
            name="comics/nocilla"
            ext="png"
            alt="Viñeta ed frasco de Nocilla"
            className={s.nocillaImg}
          />
        </div>
      </section>
    </>
  );
}
