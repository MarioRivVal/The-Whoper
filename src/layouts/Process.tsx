import s from "../assets/styles/layouts/process.module.css";
import { useEffect, useRef, useState } from "react";
import PencilIcon from "../assets/icons/PencilIcon";
import PauseIcon from "../assets/icons/PauseIcon";
import PlayIcon from "../assets/icons/PlayIcon";
import TitleSection from "../components/TitleSection";
import ResponsiveImage from "../components/ResponsiveImage";

export default function Process() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // intentar autoplay al montar
    (async () => {
      try {
        await v.play();
        setIsPlaying(!v.paused);
      } catch {
        setIsPlaying(false); // si el navegador bloquea autoplay
      }
    })();

    // sincroniza estado si cambia desde el propio elemento
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  const togglePlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      await v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };
  return (
    <>
      <TitleSection
        id="process"
        title={
          <>
            <span className="u--violet-text">A</span>si nace tu
            <span className="u--strong-text"> viñeta</span> personalizada
          </>
        }
        subtitle="Cada viñeta tiene un proceso detrás. Aquí te muestro cómo trabajo, paso a paso"
        icon={<PencilIcon />}
      />

      <section className="u--content-box u--content-box--orange">
        <div className={s.videoBox}>
          <div className={s.video}>
            <video
              ref={videoRef}
              className={s.videoEl}
              src="/videos/process.mp4"
              poster="/videos/process-prev.png"
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
            />
            <ResponsiveImage
              name="utils/tape"
              ext="png"
              className={s.tapeImg}
              alt="Cita adhesiva"
            />
          </div>
          <div className={s.logos}>
            <ResponsiveImage
              name="utils/whoper"
              ext="png"
              alt="Logo escrito 'El Whoper'"
              className={s.videoImg}
            />
            <button
              type="button"
              className={s.videoIcon}
              onClick={togglePlay}
              aria-label={isPlaying ? "Pausar vídeo" : "Reproducir vídeo"}
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
              {/* <span>{isPlaying ? "Pause" : "Play"}</span> */}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
