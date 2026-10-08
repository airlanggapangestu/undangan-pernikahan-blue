import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Play, Pause } from "lucide-react";
import songUrl from "/audio/glue-song.mp3";

const MusicPlayer = forwardRef(function MusicPlayer(
  { autoStart = false, visible = false },
  ref,
) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio
      .play()
      .then(() => setPlaying(true))
      .catch((err) => {
        console.warn("Play diblokir:", err);
        setPlaying(false);
      });
  };

  const pause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setPlaying(false);
  };

  const toggle = () => (playing ? pause() : play());

  useImperativeHandle(ref, () => ({ play, pause, toggle }));

  useEffect(() => {
    if (!autoStart || playing) return;
    play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoStart]);

  return (
    <>
      <audio ref={audioRef} src={songUrl} loop preload="auto" />

      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Jeda musik" : "Putar musik"}
        aria-pressed={playing}
        aria-hidden={!visible}
        tabIndex={visible ? 0 : -1}
        className={`group fixed bottom-4 right-4 z-[90] inline-flex items-center gap-2
                   h-[42px] pl-[6px] pr-4
                   rounded-full border border-[#4F7BB4]/40
                   bg-[#FCFDFF]/90 backdrop-blur
                   shadow-[0_6px_18px_rgba(40,70,115,0.14)]
                   text-[#37619F]
                   transition-all duration-500 ease-out
                   hover:-translate-y-0.5 hover:bg-[#FCFDFF]
                   hover:border-[#37619F]/55
                   hover:shadow-[0_10px_24px_rgba(40,70,115,0.24)]
                   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37619F]
                   md:bottom-6 md:right-6
                   ${
                     visible
                       ? "opacity-100 translate-y-0 pointer-events-auto"
                       : "opacity-0 translate-y-6 pointer-events-none"
                   }`}
      >
        <span
          className="relative grid h-[30px] w-[30px] flex-none place-items-center
                     rounded-full bg-[#37619F] text-[#F5FAFF]
                     transition-transform duration-300
                     group-hover:scale-105
                     max-md:h-7 max-md:w-7"
        >
          {playing ? (
            <Pause size={16} strokeWidth={1.8} />
          ) : (
            <Play size={16} strokeWidth={1.8} />
          )}
          {playing && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full
                         border border-[#37619F]
                         animate-[invMusicPulse_2.4s_ease-out_infinite]"
            />
          )}
        </span>

        <span
          className={`font-sans text-[9px] font-medium uppercase tracking-[0.22em]
                      transition-colors duration-300
                      max-md:text-[8px] max-md:tracking-[0.18em]
                      max-[380px]:hidden
                      ${playing ? "text-[#37619F]" : "text-[#64779A]"}`}
        >
          {playing ? "Now Playing" : "Play Music"}
        </span>
      </button>
    </>
  );
});

export default MusicPlayer;
