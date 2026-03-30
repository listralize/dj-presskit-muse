import React, { useState, useEffect, useCallback } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Instagram, Youtube, MessageCircle, User, Calendar,
  MessageSquare, ChevronDown, Music, Speaker, Mic,
  Flame, Wine, Sparkles, Droplets, Pizza, X, Download, Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { djTemplates, type DJTemplate } from "@/data/templates";
import SpotifyIcon from "@/components/ui/SpotifyIcon";
import { StarsBackground } from "@/components/ui/stars";
import { Marquee } from "@/components/ui/marquee";
import { AnimatedFolder } from "@/components/ui/3d-folder";
import AudioPlayer from "@/components/ui/audio-player";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

// ─── Form Schema ───
const formSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100),
  tipoEvento: z.string().min(1, "Selecione o tipo de evento"),
  dataEvento: z.string().optional(),
  mensagem: z.string().max(500).optional(),
});
type FormData = z.infer<typeof formSchema>;
const eventTypes = ["Festa", "Festival", "Casamento", "Boate/Club", "Corporativo", "Outro"];

// ─── Floating Input ───
const FloatingInput = React.forwardRef<HTMLInputElement, {
  id: string; label: string;
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
  error?: string; value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name?: string; type?: string; accentColor?: string;
}>(({ id, label, icon: Icon, error, value, onChange, onBlur, name, type, accentColor, ...props }, ref) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value && String(value).length > 0;
  const isDate = type === "date";
  const hideLabel = focused || hasValue || isDate;
  return (
    <div className="relative group">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-foreground/40 group-focus-within:text-foreground transition-colors duration-300">
        <Icon size={16} />
      </div>
      <input id={id} ref={ref} name={name} type={type} value={value} onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={(e) => { setFocused(false); onBlur?.(e); }}
        className="w-full bg-transparent border-b border-foreground/15 focus:border-foreground/50 pl-7 pr-0 py-3 text-sm text-foreground outline-none transition-all duration-300 peer placeholder-transparent [&::-webkit-calendar-picker-indicator]:invert"
        placeholder={label} />
      {!isDate && (
        <label htmlFor={id}
          className={`absolute left-7 transition-all duration-300 pointer-events-none ${hideLabel ? "-top-1 text-[10px] tracking-widest uppercase text-foreground/70 opacity-0" : "top-3 text-sm text-foreground/40"}`}>
          {label}
        </label>
      )}
      {error && <p className="text-[11px] text-destructive/80 mt-1.5 pl-7">{error}</p>}
    </div>
  );
});
FloatingInput.displayName = "FloatingInput";

// ─── Rider Overlay ───
const RiderOverlay = ({ isOpen, onClose, dj }: { isOpen: boolean; onClose: () => void; dj: DJTemplate }) => {
  const pdfContentRef = React.useRef<HTMLDivElement>(null);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [isOpen, onClose]);

  const handleDownloadPDF = async () => {
    if (!pdfContentRef.current || generating) return;
    setGenerating(true);
    try {
      const container = pdfContentRef.current;
      const A4_W = 210; const A4_H = 297; const MARGIN = 12; const CONTENT_W = A4_W - MARGIN * 2; const GAP = 4;
      const sections = Array.from(container.querySelectorAll("[data-pdf-section]")) as HTMLElement[];
      const pdf = new jsPDF("p", "mm", "a4");
      let curY = MARGIN;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const canvas = await html2canvas(section, { scale: 2, useCORS: true, logging: false, backgroundColor: "#05070a" });
        const scaleFactor = CONTENT_W / (canvas.width / 2);
        const heightMM = (canvas.height / 2) * scaleFactor;
        const remaining = A4_H - MARGIN - curY;
        if (heightMM > remaining && curY > MARGIN) { pdf.addPage(); curY = MARGIN; }
        if (curY === MARGIN) { pdf.setFillColor(5, 7, 10); pdf.rect(0, 0, A4_W, A4_H, "F"); }
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", MARGIN, curY, CONTENT_W, heightMM);
        curY += heightMM + GAP;
      }
      pdf.save(`Rider_Tecnico_${dj.artistName.replace(/\s+/g, "_")}.pdf`);
    } catch (err) { console.error("PDF generation error:", err); } finally { setGenerating(false); }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8" onClick={onClose}
      style={{ animation: "riderFadeIn 300ms ease-out" }}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()} style={{ backgroundColor: "#05070a", animation: "riderSlideUp 400ms cubic-bezier(0.16, 1, 0.3, 1)" }}>
        <button onClick={onClose} className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.1] text-white/50 hover:text-white hover:bg-white/[0.1] transition-all duration-300">
          <X className="h-3.5 w-3.5" strokeWidth={2.5} />
        </button>
        <div className="overflow-y-auto flex-1 p-6 md:p-8" style={{ backgroundColor: "#05070a" }}>
          <div ref={pdfContentRef}>
            <div data-pdf-section className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl tracking-wider text-white mb-2" style={{ textShadow: "0 0 30px rgba(255,255,255,0.15)" }}>
                RIDER TÉCNICO — {dj.artistName}
              </h2>
              <div className="w-14 h-[1px] bg-white/20 mx-auto mt-3" />
            </div>
            <div className="space-y-6">
              <div data-pdf-section className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Speaker size={16} className="text-white/60" />
                  <h3 className="text-xs tracking-[0.3em] uppercase text-white/80">Sonorização</h3>
                </div>
                <ul className="space-y-2.5">
                  {dj.riderSonorizacao.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                      <span className="w-1 h-1 rounded-full bg-white/30 mt-2 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div data-pdf-section className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mic size={16} className="text-white/60" />
                  <h3 className="text-xs tracking-[0.3em] uppercase text-white/80">Palco & Equipamentos</h3>
                </div>
                <ul className="space-y-2.5">
                  {dj.riderPalco.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                      <span className="w-1 h-1 rounded-full bg-white/30 mt-2 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div data-pdf-section className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Flame size={16} className="text-white/60" />
                  <h3 className="text-xs tracking-[0.3em] uppercase text-white/80">Pirotecnia</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {dj.riderPirotecnia.map((item, i) => (
                    <div key={i} className="bg-white/[0.03] rounded-lg p-3 border border-white/[0.06]">
                      <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-1">{item.label}</p>
                      <p className="text-sm text-white/70">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div data-pdf-section className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wine size={16} className="text-white/60" />
                  <h3 className="text-xs tracking-[0.3em] uppercase text-white/80">Rider de Camarim</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {dj.riderCamarim.map((item, i) => {
                    const icons = [Wine, Sparkles, Droplets, Pizza];
                    const IconItem = icons[i % icons.length];
                    return (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-white/60">
                        <IconItem size={13} className="text-white/30 shrink-0" />{item}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div data-pdf-section className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 md:p-6">
                <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-3">Contato</p>
                <div className="space-y-1.5 text-sm text-white/60">
                  {dj.contactInfo.map((c, i) => (
                    <p key={i}><span className="text-white/40">{c.role}:</span> {c.phone ? `${c.phone} — ` : ""}{c.name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button onClick={handleDownloadPDF} disabled={generating}
              className={cn("flex items-center gap-3 px-7 py-3 border border-white/20 text-white hover:bg-white/5 text-xs tracking-[0.2em] uppercase transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-wait")}>
              {generating ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
              {generating ? "Gerando PDF..." : "Baixar Rider em PDF"}
            </button>
          </div>
        </div>
      </div>
      <style>{`@keyframes riderFadeIn { from { opacity: 0; } to { opacity: 1; } } @keyframes riderSlideUp { from { opacity: 0; transform: translateY(30px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }`}</style>
    </div>
  );
};

// ═══════════════════════════════════════════════════════
// MAIN DJ PAGE COMPONENT
// ═══════════════════════════════════════════════════════
const DJPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const dj = djTemplates.find((t) => t.slug === slug);

  if (!dj) return <Navigate to="/" replace />;

  return <DJPageContent dj={dj} key={dj.slug} />;
};

const DJPageContent = ({ dj }: { dj: DJTemplate }) => {
  // Inject theme CSS vars + fonts
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "dj-theme";
    style.textContent = `
      @import url('${dj.theme.googleFontsImport}');
      :root {
        --background: ${dj.theme.bgHsl};
        --foreground: ${dj.theme.fgHsl};
        --card: ${dj.theme.cardHsl};
        --card-foreground: ${dj.theme.fgHsl};
        --popover: ${dj.theme.cardHsl};
        --popover-foreground: ${dj.theme.fgHsl};
        --primary: ${dj.theme.primaryHsl};
        --primary-foreground: ${dj.theme.bgHsl};
        --accent: ${dj.theme.accentHsl};
        --accent-foreground: ${dj.theme.fgHsl};
        --border: ${dj.theme.borderHsl};
        --input: ${dj.theme.borderHsl};
        --ring: ${dj.theme.primaryHsl};
        --folder-back: ${dj.theme.folderBack};
        --folder-front: ${dj.theme.folderFront};
        --folder-tab: ${dj.theme.folderTab};
      }
      body { font-family: ${dj.theme.fontBody} !important; }
      h1, h2, h3, h4, h5, h6 { font-family: ${dj.theme.fontHeading} !important; letter-spacing: 0.05em; }
    `;
    const existing = document.getElementById("dj-theme");
    if (existing) existing.remove();
    document.head.appendChild(style);
    return () => { style.remove(); };
  }, [dj]);

  return (
    <StarsBackground className="bg-background min-h-screen" speed={80} starColor={dj.theme.starColor}>
      <main className="relative z-10">
        <HeroBlock dj={dj} />
        <BioBlock dj={dj} />
        <MusicBlock dj={dj} />
        <StatsBlock dj={dj} />
        <EventsBlock dj={dj} />
        <ContactBlock dj={dj} />
      </main>
    </StarsBackground>
  );
};

// ═══════════════════════════════════════════════════════
// HERO BLOCK
// ═══════════════════════════════════════════════════════
const HeroBlock = ({ dj }: { dj: DJTemplate }) => {
  const { control, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { nome: "", tipoEvento: "", dataEvento: "", mensagem: "" },
  });
  const nome = watch("nome");
  const [selectOpen, setSelectOpen] = useState(false);
  const tipoEvento = watch("tipoEvento");

  const onSubmit = (data: FormData) => {
    const lines = [`*Contato via Press Kit — ${dj.artistName}*`, ``, `*Nome:* ${data.nome}`, `*Tipo de Evento:* ${data.tipoEvento}`];
    if (data.dataEvento) lines.push(`*Data:* ${data.dataEvento}`);
    if (data.mensagem) lines.push(``, `*Mensagem:* ${data.mensagem}`);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${dj.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="relative z-10 flex flex-col items-center pt-10 pb-4 gap-1" style={{ marginTop: "-6px" }}>
        <h1 className="text-6xl md:text-8xl tracking-wider"
          style={{ background: `linear-gradient(135deg, ${dj.theme.gradientFrom}, ${dj.theme.gradientVia}, ${dj.theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 20px rgba(255,255,255,0.15))" }}>
          {dj.artistName}
        </h1>
        <p className="text-[10px] md:text-xs text-foreground/80 tracking-[0.35em] uppercase font-light text-center mt-3 w-full max-w-md px-6"
          style={{ textShadow: "0 0 15px rgba(255,255,255,0.4)" }}>
          {dj.slogan}
        </p>
      </div>

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center container mx-auto px-6 gap-10 lg:gap-20 pb-16 pt-4">
        <div className="lg:w-5/12 flex justify-center">
          <div className="relative w-64 md:w-80 lg:w-96 aspect-[3/4] rounded-sm overflow-hidden">
            <img src={dj.heroPhoto} alt={dj.artistName} className="w-full h-full object-cover rounded-sm" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20" />
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-5">
              {[
                { href: dj.socialLinks.instagram, Icon: Instagram },
                { href: dj.socialLinks.youtube, Icon: Youtube },
                { href: dj.socialLinks.spotify, Icon: SpotifyIcon },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-5/12 w-full max-w-md">
          <div className="mb-8">
            <p className="text-foreground/60 text-xs tracking-[0.3em] uppercase mb-2">Contrate agora</p>
            <h2 className="text-3xl md:text-4xl text-foreground leading-none">
              {nome ? (<>Olá, <span className="text-foreground" style={{ textShadow: "0 0 10px rgba(255,255,255,0.4)" }}>{nome}</span>!</>) : "Vamos trabalhar juntos?"}
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 backdrop-blur-sm bg-card/30 border border-border/40 rounded-2xl p-6 md:p-8">
            <Controller name="nome" control={control} render={({ field }) => (
              <FloatingInput id="nome" label="Seu nome" icon={User} error={errors.nome?.message} {...field} />
            )} />
            <div className="relative group">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-foreground/40 group-focus-within:text-foreground transition-colors duration-300">
                <MessageSquare size={16} />
              </div>
              <button type="button" onClick={() => setSelectOpen(!selectOpen)}
                className="w-full bg-transparent border-b border-foreground/15 focus:border-foreground/50 pl-7 pr-6 py-3 text-sm text-left outline-none transition-all duration-300 flex items-center justify-between">
                <span className={tipoEvento ? "text-foreground" : "text-foreground/40"}>{tipoEvento || "Tipo de evento"}</span>
                <ChevronDown size={14} className={`text-foreground/40 transition-transform duration-200 ${selectOpen ? "rotate-180" : ""}`} />
              </button>
              {selectOpen && (
                <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-card border border-border rounded-sm overflow-hidden">
                  {eventTypes.map((type) => (
                    <button key={type} type="button" onClick={() => { setValue("tipoEvento", type, { shouldValidate: true }); setSelectOpen(false); }}
                      className="w-full px-7 py-2.5 text-sm text-left text-foreground/70 hover:text-foreground hover:bg-accent/50 transition-colors duration-200">
                      {type}
                    </button>
                  ))}
                </div>
              )}
              {errors.tipoEvento && <p className="text-[11px] text-destructive mt-1.5 pl-7">{errors.tipoEvento.message}</p>}
            </div>
            <Controller name="dataEvento" control={control} render={({ field }) => (
              <FloatingInput id="dataEvento" label="Data do evento" icon={Calendar} type="date" {...field} />
            )} />
            <Controller name="mensagem" control={control} render={({ field }) => (
              <div className="relative group">
                <div className="absolute left-0 top-3 text-foreground/40 group-focus-within:text-foreground transition-colors duration-300">
                  <MessageCircle size={16} />
                </div>
                <textarea id="mensagem" {...field} rows={3} placeholder="Mensagem (opcional)"
                  className="w-full bg-transparent border-b border-foreground/15 focus:border-foreground/50 pl-7 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-foreground/40 resize-none" />
              </div>
            )} />
            <button type="submit"
              className="w-full flex items-center justify-center gap-3 py-3.5 border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm tracking-[0.2em] uppercase transition-all duration-300 rounded-lg mt-4"
              style={{ textShadow: "0 0 8px rgba(255,255,255,0.3)" }}>
              <MessageCircle size={16} />Enviar via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════
// BIO BLOCK
// ═══════════════════════════════════════════════════════
const BioBlock = ({ dj }: { dj: DJTemplate }) => (
  <section className="py-28 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
      style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }} />
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div className="relative" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }}>
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
            <img src={dj.bioPhoto} alt={`${dj.artistName} bio`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-foreground/10 rounded-2xl -z-10" />
        </motion.div>
        <motion.div className="flex flex-col gap-8" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }} viewport={{ once: true }}>
          <div className="flex flex-col gap-3">
            <div className="line-separator" />
            <p className="text-xs text-foreground/50 uppercase tracking-[0.35em]">Biografia</p>
            <h2 className="text-6xl md:text-7xl lg:text-8xl tracking-wider leading-none text-foreground">Sobre</h2>
          </div>
          <div className="space-y-6 text-foreground/75 text-base md:text-lg leading-relaxed font-light text-justify">
            {dj.biography.map((p, i) => (
              <p key={i}>
                {i === 0 ? (
                  <>{p.split(dj.artistName.charAt(0) === dj.artistName.charAt(0).toUpperCase() ? dj.realName : dj.artistName)[0]}
                    <span className="font-semibold" style={{ background: `linear-gradient(90deg, ${dj.theme.gradientFrom}, ${dj.theme.gradientVia}, ${dj.theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      {dj.artistName}
                    </span>
                    {p.includes(dj.realName) ? p.split(dj.realName).slice(1).join(dj.realName) : p.substring(p.indexOf(dj.artistName) > -1 ? p.indexOf(dj.artistName) + dj.artistName.length : 0)}
                  </>
                ) : p}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-4 pt-4">
            <div className="h-px flex-1 bg-gradient-to-r from-foreground/20 to-transparent" />
            <span className="text-sm tracking-[0.3em] uppercase"
              style={{ background: `linear-gradient(90deg, ${dj.theme.gradientFrom}, ${dj.theme.gradientVia}, ${dj.theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {dj.artistName}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ═══════════════════════════════════════════════════════
// MUSIC BLOCK
// ═══════════════════════════════════════════════════════
const MusicBlock = ({ dj }: { dj: DJTemplate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="line-separator" />
          <h2 className="text-5xl md:text-6xl tracking-wider"
            style={{ background: `linear-gradient(90deg, ${dj.theme.gradientFrom}, ${dj.theme.gradientVia}, ${dj.theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 10px rgba(255,255,255,0.15))" }}>
            Discografia
          </h2>
        </div>
        <div className="mb-6 space-y-1">
          {dj.tracks.map((track, i) => (
            <button key={i} onClick={() => setCurrentIndex(i)}
              className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm transition-all duration-200",
                i === currentIndex ? "bg-white/5 text-white" : "text-foreground/70 hover:bg-accent/30 hover:text-foreground")}>
              <Music size={14} className={i === currentIndex ? "text-white" : "text-foreground/40"} />
              <span className="truncate">{track.title}</span>
            </button>
          ))}
        </div>
        {/* Spotify embed link */}
        <div className="rounded-xl bg-card/60 backdrop-blur-sm border border-border/40 p-5 text-center">
          <p className="text-foreground/70 text-sm mb-3">Ouça no Spotify</p>
          <a href={dj.socialLinks.spotify} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${dj.theme.gradientFrom}, ${dj.theme.gradientTo})`, color: "#fff" }}>
            <SpotifyIcon size={18} />
            Abrir no Spotify
          </a>
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════
// STATS BLOCK
// ═══════════════════════════════════════════════════════
const StatsBlock = ({ dj }: { dj: DJTemplate }) => {
  const stats = [
    { label: "Instagram", value: dj.stats.instagram.value, sub: dj.stats.instagram.sub, icon: Instagram, href: dj.socialLinks.instagram },
    { label: "Spotify", value: dj.stats.spotify.value, sub: dj.stats.spotify.sub, icon: SpotifyIcon, href: dj.socialLinks.spotify },
    { label: "YouTube", value: dj.stats.youtube.value, sub: dj.stats.youtube.sub, icon: Youtube, href: dj.socialLinks.youtube },
  ];

  return (
    <section className="py-20 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 max-w-3xl mx-auto divide-x divide-border">
          {stats.map((stat) => (
            <a key={stat.label} href={stat.href} target="_blank" rel="noopener noreferrer"
              className="text-center px-4 py-6 group transition-all duration-300 hover:bg-foreground/[0.02]">
              <stat.icon size={20} className="mx-auto mb-3 text-foreground/40 group-hover:text-foreground/70 transition-colors duration-300" />
              <p className="text-4xl md:text-5xl tracking-wide"
                style={{ background: `linear-gradient(90deg, ${dj.theme.gradientFrom}, ${dj.theme.gradientVia}, ${dj.theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 8px rgba(255,255,255,0.12))" }}>
                {stat.value}
              </p>
              <p className="text-xs text-foreground/70 mt-3 uppercase tracking-[0.25em]">{stat.sub}</p>
              <p className="text-[10px] text-foreground/50 mt-1 uppercase tracking-widest">{stat.label}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════
// EVENTS BLOCK
// ═══════════════════════════════════════════════════════
const EventsBlock = ({ dj }: { dj: DJTemplate }) => (
  <section className="py-16 overflow-hidden">
    <div className="flex flex-col items-center gap-4 mb-8">
      <div className="line-separator" />
      <h2 className="text-5xl md:text-6xl tracking-wider"
        style={{ background: `linear-gradient(90deg, ${dj.theme.gradientFrom}, ${dj.theme.gradientVia}, ${dj.theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 10px rgba(255,255,255,0.15))" }}>
        Eventos
      </h2>
    </div>
    <Marquee text={dj.events} repeat={4} duration={25} fontSize="lg" strokeWidth="1.5px" />
  </section>
);

// ═══════════════════════════════════════════════════════
// CONTACT BLOCK
// ═══════════════════════════════════════════════════════
const ContactBlock = ({ dj }: { dj: DJTemplate }) => {
  const [riderOpen, setRiderOpen] = useState(false);

  const fotosData = dj.galleryPhotos;
  const fotosDownloadFiles = dj.galleryPhotos.map((p) => p.image);
  const riderData = [{ id: "r1", image: dj.heroPhoto, title: "Rider Técnico" }];

  return (
    <section className="py-28 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
          <AnimatedFolder title="Fotos" projects={fotosData} downloadFiles={fotosDownloadFiles} />
          <AnimatedFolder title="Rider" projects={riderData} onItemClick={() => { setRiderOpen(true); return true; }} />
        </div>

        {/* DJ Name large display */}
        <motion.div className="relative flex justify-center items-center h-[250px] md:h-[400px] overflow-hidden"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} viewport={{ once: true }}>
          <div className="absolute inset-0 z-[1] flex items-center justify-center opacity-10">
            <h2 className="text-[120px] md:text-[200px] tracking-wider leading-none"
              style={{ background: `linear-gradient(135deg, ${dj.theme.gradientFrom}, ${dj.theme.gradientVia}, ${dj.theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {dj.artistName}
            </h2>
          </div>
          <div className="absolute inset-x-0 top-0 z-10 h-[45%] bg-gradient-to-b from-background via-background/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-10 h-[35%] bg-gradient-to-t from-background via-background/60 to-transparent" />
          <motion.img src={dj.stagePhoto} alt={`${dj.artistName} stage`}
            className="relative z-[5] w-full h-full object-cover object-center rounded-xl"
            animate={{ filter: ["drop-shadow(0 0 0px rgba(255,255,255,0))", "drop-shadow(0 0 20px rgba(255,255,255,0.25))", "drop-shadow(0 0 0px rgba(255,255,255,0))"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        </motion.div>

        {/* Footer */}
        <div className="border-t border-border pt-8 mt-16 text-center">
          <h3 className="text-2xl tracking-wider mb-4 opacity-30"
            style={{ background: `linear-gradient(90deg, ${dj.theme.gradientFrom}, ${dj.theme.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {dj.artistName}
          </h3>
          <div className="flex justify-center gap-5 mb-4">
            {[
              { href: dj.socialLinks.instagram, Icon: Instagram },
              { href: dj.socialLinks.youtube, Icon: Youtube },
              { href: dj.socialLinks.spotify, Icon: SpotifyIcon },
            ].map(({ href, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-foreground/70 transition-colors duration-300">
                <Icon size={16} />
              </a>
            ))}
          </div>
          <p className="text-[10px] text-foreground/40 uppercase tracking-widest">
            © 2026 {dj.artistName} · Todos os direitos reservados
          </p>
          <a href="https://www.listralize.com.br" target="_blank" rel="noopener noreferrer"
            className="mt-4 inline-flex flex-col items-center gap-1.5 opacity-40 hover:opacity-70 transition-opacity duration-300">
            <span className="text-[9px] text-foreground/60 uppercase tracking-[0.2em]">Desenvolvido por</span>
            <span className="text-xs text-foreground/50 font-medium tracking-wider">LISTRALIZE</span>
          </a>
        </div>
      </div>
      <RiderOverlay isOpen={riderOpen} onClose={() => setRiderOpen(false)} dj={dj} />
    </section>
  );
};

export default DJPage;
