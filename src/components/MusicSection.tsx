import { useState, useCallback } from "react";
import { Music } from "lucide-react";
import AudioPlayer from "@/components/ui/audio-player";
import { cn } from "@/lib/utils";

const tracks = [
  { title: "Medley de Igaratá 3 (feat. Décio Gomes)", src: "/audio/DECIO_GOMES_UNK_-_MEDLEY_DE_IGARATA_3_final.wav" },
  { title: "Bololo (feat. Nadir Netto, Brendow)", src: "/audio/BOLOLO_-_UNK_NADIRNETTO_BRENDOW_final.wav" },
  { title: "300 no 7 (feat. Nadir Netto, MC GP, MC Luuky, MC J Vila)", src: "/audio/300_NO_7_-_UNK_NADIRNETTO_MC_GP_MC_LUUKY_MC_J_VILA_v2_1.wav" },
  { title: "365 Dias", src: "/audio/UNK_-_365_DIAS_1.wav" },
  { title: "Fui Mlk (feat. Nilo, MC Paiva)", src: "/audio/UNK_-_FUI_MLK_-_NILO_MC_PAIVA.wav" },
  { title: "Ô Moça (feat. Tálita, MC Zaquin)", src: "/audio/UNK_TALITA_-_O_MOCA_-_MC_ZAQUIN.wav" },
];

const MusicSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  const goToNext = useCallback(() => {
    setAutoPlay(true);
    if (isShuffle) {
      let next = Math.floor(Math.random() * tracks.length);
      while (next === currentIndex && tracks.length > 1) {
        next = Math.floor(Math.random() * tracks.length);
      }
      setCurrentIndex(next);
    } else {
      setCurrentIndex((prev) => (prev + 1) % tracks.length);
    }
  }, [isShuffle, currentIndex]);

  const goToPrev = useCallback(() => {
    setAutoPlay(true);
    setCurrentIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  }, []);

  const selectTrack = (index: number) => {
    setAutoPlay(true);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="line-separator" />
          <h2
            className="text-5xl md:text-6xl font-display tracking-wider"
            style={{ color: "#a6c8d3", textShadow: "0 0 20px rgba(255,255,255,0.25), 0 0 40px rgba(255,255,255,0.1)" }}
          >
            Músicas
          </h2>
        </div>

        {/* Track list */}
        <div className="mb-6 space-y-1">
          {tracks.map((track, i) => (
            <button
              key={i}
              onClick={() => selectTrack(i)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm transition-all duration-200",
                i === currentIndex
                  ? "bg-[#a6c8d3]/10 text-[#a6c8d3]"
                  : "text-foreground/70 hover:bg-accent/30 hover:text-foreground"
              )}
            >
              <Music size={14} className={i === currentIndex ? "text-[#a6c8d3]" : "text-foreground/40"} />
              <span className="truncate">{track.title}</span>
            </button>
          ))}
        </div>

        {/* Player */}
        <AudioPlayer
          src={tracks[currentIndex].src}
          title={tracks[currentIndex].title}
          onPrev={goToPrev}
          onNext={goToNext}
          isShuffle={isShuffle}
          onShuffleToggle={() => setIsShuffle(!isShuffle)}
          isRepeat={isRepeat}
          onRepeatToggle={() => setIsRepeat(!isRepeat)}
          autoPlay={autoPlay}
        />
      </div>
    </section>
  );
};

export default MusicSection;
