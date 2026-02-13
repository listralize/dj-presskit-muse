import { useCallback, useEffect, useRef, useState } from "react";
import { X, Download, Mic, Speaker, Flame, Sparkles, Wine, Droplets, Pizza, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

interface RiderOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const RiderOverlay = ({ isOpen, onClose }: RiderOverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pdfContentRef = useRef<HTMLDivElement>(null);
  const [generating, setGenerating] = useState(false);

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

  const handleDownloadPDF = async () => {
    if (!pdfContentRef.current || generating) return;
    setGenerating(true);
    try {
      const element = pdfContentRef.current;
      
      // Store original styles
      const originalOverflow = element.style.overflow;
      const originalMaxHeight = element.style.maxHeight;
      const originalHeight = element.style.height;
      
      // Temporarily expand element to full height for capture
      element.style.overflow = "visible";
      element.style.maxHeight = "none";
      element.style.height = "auto";
      
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#05070a",
        scrollY: 0,
        scrollX: 0,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });
      
      // Restore original styles
      element.style.overflow = originalOverflow;
      element.style.maxHeight = originalMaxHeight;
      element.style.height = originalHeight;

      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210; // A4 width mm
      const pageHeight = 297; // A4 height mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const pdf = new jsPDF("p", "mm", "a4");
      let heightLeft = imgHeight;
      let position = 0;

      // First page
      pdf.setFillColor(5, 7, 10);
      pdf.rect(0, 0, imgWidth, pageHeight, "F");
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Additional pages
      while (heightLeft > 0) {
        pdf.addPage();
        pdf.setFillColor(5, 7, 10);
        pdf.rect(0, 0, imgWidth, pageHeight, "F");
        position -= pageHeight;
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Rider_Tecnico_UNK_DJ.pdf");
    } catch (err) {
      console.error("PDF generation error:", err);
    } finally {
      setGenerating(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
      onClick={handleClose}
      style={{ animation: "riderFadeIn 300ms ease-out" }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal container */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#05070a",
          animation: "riderSlideUp 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.1] text-white/50 hover:text-white hover:bg-white/[0.1] transition-all duration-300"
        >
          <X className="h-3.5 w-3.5" strokeWidth={2.5} />
        </button>

        {/* Scrollable content */}
        <div ref={pdfContentRef} className="overflow-y-auto flex-1 p-6 md:p-8" style={{ backgroundColor: "#05070a" }}>
          {/* Header */}
          <div className="text-center mb-10">
            <img src={logo} alt="UNK DJ" className="w-14 mx-auto mb-5 opacity-80" />
            <h2 className="text-2xl md:text-3xl font-display tracking-wider text-white mb-2"
              style={{ textShadow: "0 0 30px rgba(255,255,255,0.15)" }}>
              RIDER TÉCNICO
            </h2>
            <div className="w-14 h-[1px] bg-white/20 mx-auto mt-3" />
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {/* Sonorização */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <Speaker size={16} className="text-white/60" />
                <h3 className="text-xs tracking-[0.3em] uppercase text-white/80 font-display">Sonorização</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  "PA com cobertura total da área do evento, entregando 110 DBA por todo o evento",
                  "Both DJ L + R (Min. 2 Line + 1 Sub cada lado)",
                  "1 Kit CDJ's PIONEER 2000 Nexus (Mínimo PIONEER 2000) + Mixer DJM 900 Nexus ou XDJ RX3",
                  "Cabo de rede para link das CDJ's",
                  "1 Praticável para CDJ",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="w-1 h-1 rounded-full bg-white/30 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Palco */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mic size={16} className="text-white/60" />
                <h3 className="text-xs tracking-[0.3em] uppercase text-white/80 font-display">Palco & Equipamentos</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  "01 Microfone sem fio, com bateria carregada e pronto para uso",
                  "Espaço de 2M entre praticável à beira do palco para os dançarinos",
                  "Tudo em perfeito estado de funcionamento",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="w-1 h-1 rounded-full bg-white/30 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pirotecnia */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <Flame size={16} className="text-white/60" />
                <h3 className="text-xs tracking-[0.3em] uppercase text-white/80 font-display">Pirotecnia</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { label: "Jet (Boate)", detail: "7 Cenas (14 Unidades / 2 Pontos)" },
                  { label: "Guerb 15 Segundos", detail: "2 Cenas (4 Unidades / 2 Pontos)" },
                  { label: "Papel", detail: "3 Cenas (6 Unidades / 2 Pontos)" },
                  { label: "CO2", detail: "2 Bicos CO2 + 2 Cilindros min. 33kg" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/[0.03] rounded-lg p-3 border border-white/[0.06]">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-1">{item.label}</p>
                    <p className="text-sm text-white/70">{item.detail}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/30 mt-3 italic">
                Conferidos e disponibilizados antes do início da apresentação.
              </p>
            </div>

            {/* Camarim */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <Wine size={16} className="text-white/60" />
                <h3 className="text-xs tracking-[0.3em] uppercase text-white/80 font-display">Rider de Camarim</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
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
                  <div key={i} className="flex items-center gap-2.5 text-sm text-white/60">
                    <item.icon size={13} className="text-white/30 shrink-0" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Contato */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 md:p-6">
              <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-3">Contato</p>
              <div className="space-y-1.5 text-sm text-white/60">
                <p><span className="text-white/40">Produtor Geral:</span> 62 99924-8754 — Lael Vieira</p>
                <p><span className="text-white/40">Assessoria:</span> 62 98287-5284 — João</p>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleDownloadPDF}
              disabled={generating}
              className={cn(
                "flex items-center gap-3 px-7 py-3",
                "border border-white/20 text-white hover:bg-white/5",
                "text-xs tracking-[0.2em] uppercase transition-all duration-300 rounded-lg",
                "disabled:opacity-50 disabled:cursor-wait"
              )}
              style={{ textShadow: "0 0 8px rgba(255,255,255,0.3)" }}
            >
              {generating ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
              {generating ? "Gerando PDF..." : "Baixar Rider em PDF"}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes riderFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes riderSlideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default RiderOverlay;
