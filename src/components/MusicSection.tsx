import { useState, useCallback } from "react";
import { Music } from "lucide-react";
import AudioPlayer from "@/components/ui/audio-player";
import { cn } from "@/lib/utils";

const tracks = [
  { title: "Pique Novo x Festa na Alta VIP", src: "/audio/Pique_Novo_x_Festa_na_Alta_VIP.wav" },
  { title: "Depende (Brenno Paixão, Unk DJ - DJ GUUGA)", src: "/audio/Brenno_Paixao_Unk_DJ_-_Depende_-_DJ_GUUGA.wav" },
  { title: "Eu Já (feat. MC Jacaré)", src: "/audio/Unk_DJ_-_Eu_Ja_-_MC_JACARE_v2_1.wav" },
  { title: "Rock This (feat. Vinicius Cavalcante, Tálita)", src: "/audio/Unk_DJ_Vinicius_Cavalcante_Talita_-_Rock_This_1.wav" },
  { title: "Medley de Igaratá 3 (feat. Décio Gomes)", src: "/audio/DECIO_GOMES_UNK_-_MEDLEY_DE_IGARATA_3_final.wav" },
  { title: "300 no 7 (feat. Nadir Netto, MC GP, MC Luuky, MC J Vila)", src: "/audio/300_NO_7_-_UNK_NADIRNETTO_MC_GP_MC_LUUKY_MC_J_VILA_v2_1.wav" },
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
            className="text-5xl md:text-6xl font-display tracking-wider bg-gradient-to-r from-[#c0c0c0] via-[#f0f0f0] to-[#a8a8a8] bg-clip-text text-transparent"
            style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.15))" }}
          >
            Últimos Lançamentos
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
                  ? "bg-white/5 text-white"
                  : "text-foreground/70 hover:bg-accent/30 hover:text-foreground"
              )}
            >
              <Music size={14} className={i === currentIndex ? "text-white" : "text-foreground/40"} />
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
