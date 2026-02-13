import { useCallback, useEffect, useRef } from "react";
import { X, Download, Mic, Speaker, Flame, Wind, Sparkles, Wine, Droplets, Pizza } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

interface RiderOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const RiderOverlay = ({ isOpen, onClose }: RiderOverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose]);

  const handleDownloadPDF = () => {
    const a = document.createElement("a");
    a.href = "/downloads/Rider_Tecnico_UNK_DJ.pdf";
    a.download = "Rider_Tecnico_UNK_DJ.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 px-4"
      onClick={handleClose}
      style={{
        animation: "fadeIn 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />

      {/* Close */}
      <button
        onClick={(e) => { e.stopPropagation(); handleClose(); }}
        className="fixed top-5 right-5 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-muted/50 backdrop-blur-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
      >
        <X className="h-4 w-4" strokeWidth={2.5} />
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "slideUp 500ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <img src={logo} alt="UNK DJ" className="w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-display tracking-wider text-foreground mb-2"
            style={{ textShadow: "0 0 30px rgba(255,255,255,0.15)" }}>
            RIDER TÉCNICO
          </h2>
          <div className="w-16 h-[1px] bg-foreground/20 mx-auto mt-4" />
        </div>

        {/* Rider Técnico */}
        <div className="space-y-8">
          {/* Sonorização */}
          <div className="backdrop-blur-sm bg-card/30 border border-border/40 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <Speaker size={18} className="text-foreground/60" />
              <h3 className="text-sm tracking-[0.3em] uppercase text-foreground/80 font-display">Sonorização</h3>
            </div>
            <ul className="space-y-3">
              {[
                "PA com cobertura total da área do evento, entregando 110 DBA por todo o evento",
                "Both DJ L + R (Min. 2 Line + 1 Sub cada lado)",
                "1 Kit CDJ's PIONEER 2000 Nexus (Mínimo PIONEER 2000) + Mixer DJM 900 Nexus ou XDJ RX3",
                "Cabo de rede para link das CDJ's",
                "1 Praticável para CDJ",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/60">
                  <span className="w-1 h-1 rounded-full bg-foreground/30 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Palco */}
          <div className="backdrop-blur-sm bg-card/30 border border-border/40 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <Mic size={18} className="text-foreground/60" />
              <h3 className="text-sm tracking-[0.3em] uppercase text-foreground/80 font-display">Palco & Equipamentos</h3>
            </div>
            <ul className="space-y-3">
              {[
                "01 Microfone sem fio, com bateria carregada e pronto para uso",
                "Espaço de 2M entre praticável à beira do palco para os dançarinos",
                "Tudo em perfeito estado de funcionamento",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/60">
                  <span className="w-1 h-1 rounded-full bg-foreground/30 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pirotecnia */}
          <div className="backdrop-blur-sm bg-card/30 border border-border/40 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <Flame size={18} className="text-foreground/60" />
              <h3 className="text-sm tracking-[0.3em] uppercase text-foreground/80 font-display">Pirotecnia</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Jet (Boate)", detail: "7 Cenas (14 Unidades / 2 Pontos)" },
                { label: "Guerb 15 Segundos", detail: "2 Cenas (4 Unidades / 2 Pontos)" },
                { label: "Papel", detail: "3 Cenas (6 Unidades / 2 Pontos)" },
                { label: "CO2", detail: "2 Bicos CO2 + 2 Cilindros min. 33kg" },
              ].map((item, i) => (
                <div key={i} className="bg-background/30 rounded-xl p-4 border border-border/20">
                  <p className="text-xs tracking-[0.2em] uppercase text-foreground/50 mb-1">{item.label}</p>
                  <p className="text-sm text-foreground/70">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-foreground/40 mt-4 italic">
              Conferidos e disponibilizados antes do início da apresentação.
            </p>
          </div>

          {/* Camarim */}
          <div className="backdrop-blur-sm bg-card/30 border border-border/40 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <Wine size={18} className="text-foreground/60" />
              <h3 className="text-sm tracking-[0.3em] uppercase text-foreground/80 font-display">Rider de Camarim</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: Wine, text: "1 Whisky (Chivas 1L ou Buchanan's 1L)" },
                { icon: Wine, text: "1 Gin Tanqueray London Dry" },
                { icon: Sparkles, text: "12 Energéticos Red Bull Tradicional" },
                { icon: Sparkles, text: "12 Energéticos Red Bull Melancia e Tropical" },
                { icon: Droplets, text: "6 Águas de Coco" },
                { icon: Droplets, text: "5 Latas de Coca Cola Zero" },
                { icon: Droplets, text: "4 Águas com gás" },
                { icon: Pizza, text: "2 Pizzas G (calabresa e frango) ou 1 Centro de Salgados" },
                { icon: Pizza, text: "1 Tábua de Frios (queijo, azeitona, castanhas)" },
                { icon: Droplets, text: "1 Fardo de Água sem gás 500ml (mín. 12un.)" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-foreground/60">
                  <item.icon size={14} className="text-foreground/30 shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div className="backdrop-blur-sm bg-card/30 border border-border/40 rounded-2xl p-6 md:p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-foreground/40 mb-4">Contato</p>
            <div className="space-y-2 text-sm text-foreground/60">
              <p><span className="text-foreground/40">Produtor Geral:</span> 62 99924-8754 — Lael Vieira</p>
              <p><span className="text-foreground/40">Assessoria:</span> 62 98287-5284 — João</p>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-10 mb-8">
          <button
            onClick={handleDownloadPDF}
            className={cn(
              "flex items-center gap-3 px-8 py-3.5",
              "border border-foreground/20 text-foreground hover:bg-foreground/5",
              "text-sm tracking-[0.2em] uppercase transition-all duration-300 rounded-lg"
            )}
            style={{ textShadow: "0 0 8px rgba(255,255,255,0.3)" }}
          >
            <Download size={16} />
            Baixar Rider em PDF
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default RiderOverlay;
