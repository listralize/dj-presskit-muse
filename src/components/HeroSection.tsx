import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import djPhoto from "@/assets/dj-photo.png";
import logo from "@/assets/logo.png";
import Globe from "@/components/ui/globe";
import { UnkDjEffect } from "@/components/ui/text-effect";
import { Instagram, Youtube, Music, MessageCircle, User, Phone, Calendar, MessageSquare, ChevronDown } from "lucide-react";

const formSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100),
  telefone: z.string().trim().min(10, "Telefone inválido").max(20),
  tipoEvento: z.string().min(1, "Selecione o tipo de evento"),
  dataEvento: z.string().optional(),
  mensagem: z.string().max(500).optional(),
});

type FormData = z.infer<typeof formSchema>;

const WHATSAPP_NUMBER = "5562934755284";

const eventTypes = ["Festa", "Festival", "Casamento", "Boate/Club", "Outro"];

const FloatingInput = ({
  id,
  label,
  icon: Icon,
  error,
  ...props
}: {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [focused, setFocused] = useState(false);
  const hasValue = props.value && String(props.value).length > 0;
  const isDate = props.type === "date";
  const hideLabel = focused || hasValue || isDate;

  return (
    <div className="relative group">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-foreground/40 group-focus-within:text-foreground transition-colors duration-300" style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.3))" }}>
        <Icon size={16} />
      </div>
      <input
         id={id}
         {...props}
         onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
         onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
         className="w-full bg-transparent border-b border-foreground/15 focus:border-foreground/50 pl-7 pr-0 py-3 text-sm text-foreground outline-none transition-all duration-300 peer placeholder-transparent [&::-webkit-calendar-picker-indicator]:invert"
         placeholder={label}
       />
       {!isDate && (
         <label
           htmlFor={id}
           className={`absolute left-7 transition-all duration-300 pointer-events-none ${
             hideLabel
               ? "-top-1 text-[10px] tracking-widest uppercase text-foreground/70 opacity-0"
               : "top-3 text-sm text-foreground/40"
           }`}
         >
           {label}
         </label>
       )}
      {error && <p className="text-[11px] text-destructive/80 mt-1.5 pl-7">{error}</p>}
    </div>
  );
};

const HeroSection = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { nome: "", telefone: "", tipoEvento: "", dataEvento: "", mensagem: "" },
  });

  const nome = watch("nome");
  const [selectOpen, setSelectOpen] = useState(false);
  const tipoEvento = watch("tipoEvento");

  const onSubmit = (data: FormData) => {
    const lines = [
      `*Contato via Press Kit*`,
      ``,
      `*Nome:* ${data.nome}`,
      `*Telefone:* ${data.telefone}`,
      `*Tipo de Evento:* ${data.tipoEvento}`,
    ];
    if (data.dataEvento) lines.push(`*Data:* ${data.dataEvento}`);
    if (data.mensagem) lines.push(``, `*Mensagem:* ${data.mensagem}`);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Logo + DJ + Legenda */}
      <div className="relative z-10 flex flex-col items-center pt-10 pb-4 gap-1" style={{ marginTop: "-6px" }}>
        <div className="relative inline-flex items-center justify-center">
          <UnkDjEffect className="h-16 md:h-20 text-white" speed={0.8} />
        </div>
        <p
          className="text-[10px] md:text-xs text-white/80 tracking-[0.35em] uppercase font-light text-center mt-3 w-full max-w-md px-6"
          style={{
            textShadow: "0 0 15px rgba(255,255,255,0.4), 0 0 30px rgba(200,210,230,0.15)",
          }}
        >
          Eletrofunk · House · Energia em Ritmo
        </p>
      </div>

      {/* Main content: Photo + Form */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center container mx-auto px-6 gap-10 lg:gap-20 pb-16 pt-4">
        {/* DJ Photo */}
        <div className="lg:w-5/12 flex justify-center">
           <div className="relative w-64 md:w-80 lg:w-96 aspect-[3/4] rounded-sm overflow-visible">
        <img
               src={djPhoto}
               alt="Unk DJ"
               className="w-full h-full object-cover rounded-sm"
               style={{ marginTop: "-16px" }}
             />
            {/* Globe overlay - aligned with the planet visible through the spaceship window */}
            <div
               className="absolute z-10 pointer-events-none w-[130px] h-[130px] md:w-[180px] md:h-[180px] lg:w-[230px] lg:h-[230px] top-[calc(24%+14px)] md:top-[calc(24%+9px)] lg:top-[calc(24%-3px)] right-[calc(-30%+10px)]"
            >
              <Globe />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20" />
            {/* Social links over photo bottom */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-5">
              {[
                { href: "https://instagram.com", Icon: Instagram },
                { href: "https://youtube.com", Icon: Youtube },
                { href: "https://spotify.com", Icon: Music },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:w-5/12 w-full max-w-md">
          {/* Greeting */}
          <div className="mb-8">
            <p className="text-foreground/60 text-xs tracking-[0.3em] uppercase mb-2">
              Contrate agora
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-foreground leading-none">
              {nome ? (
                <>Olá, <span className="text-foreground" style={{ textShadow: "0 0 10px rgba(255,255,255,0.4)" }}>{nome}</span>!</>
              ) : (
                "Vamos trabalhar juntos?"
              )}
            </h2>
          </div>

           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 backdrop-blur-sm bg-card/30 border border-border/40 rounded-2xl p-6 md:p-8">
             <FloatingInput
               id="nome"
               label="Seu nome"
               icon={User}
               error={errors.nome?.message}
               {...register("nome")}
               value={nome}
             />

             <FloatingInput
               id="telefone"
               label="Telefone / WhatsApp"
               icon={Phone}
               error={errors.telefone?.message}
               {...register("telefone")}
               value={watch("telefone")}
             />

             {/* Custom select */}
             <div className="relative group">
               <div className="absolute left-0 top-1/2 -translate-y-1/2 text-foreground/40 group-focus-within:text-foreground transition-colors duration-300" style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.3))" }}>
                 <MessageSquare size={16} />
               </div>
               <button
                 type="button"
                 onClick={() => setSelectOpen(!selectOpen)}
                 className="w-full bg-transparent border-b border-foreground/15 focus:border-foreground/50 pl-7 pr-6 py-3 text-sm text-left outline-none transition-all duration-300 flex items-center justify-between"
               >
                 <span className={tipoEvento ? "text-foreground" : "text-foreground/40"}>
                   {tipoEvento || "Tipo de evento"}
                 </span>
                 <ChevronDown size={14} className={`text-foreground/40 transition-transform duration-200 ${selectOpen ? "rotate-180" : ""}`} />
               </button>
               {selectOpen && (
                 <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-card border border-border rounded-sm overflow-hidden">
                   {eventTypes.map((type) => (
                     <button
                       key={type}
                       type="button"
                       onClick={() => {
                         register("tipoEvento").onChange({ target: { name: "tipoEvento", value: type } });
                         setSelectOpen(false);
                       }}
                       className="w-full px-7 py-2.5 text-sm text-left text-foreground/70 hover:text-foreground hover:bg-accent/50 transition-colors duration-200"
                     >
                       {type}
                     </button>
                   ))}
                 </div>
               )}
               {errors.tipoEvento && <p className="text-[11px] text-destructive mt-1.5 pl-7">{errors.tipoEvento.message}</p>}
             </div>

             <FloatingInput
               id="dataEvento"
               label="Data do evento"
               icon={Calendar}
               type="date"
               {...register("dataEvento")}
               value={watch("dataEvento")}
             />

             {/* Textarea */}
             <div className="relative group">
               <div className="absolute left-0 top-3 text-foreground/40 group-focus-within:text-foreground transition-colors duration-300" style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.3))" }}>
                 <MessageCircle size={16} />
               </div>
               <textarea
                 id="mensagem"
                 {...register("mensagem")}
                 rows={3}
                 placeholder="Mensagem (opcional)"
                 className="w-full bg-transparent border-b border-foreground/15 focus:border-foreground/50 pl-7 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-foreground/40 resize-none"
               />
             </div>

             {/* Submit */}
             <button
               type="submit"
               className="w-full flex items-center justify-center gap-3 py-3.5 border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm tracking-[0.2em] uppercase transition-all duration-300 rounded-lg mt-4"
               style={{ textShadow: "0 0 8px rgba(255,255,255,0.3)" }}
             >
               <MessageCircle size={16} />
               Enviar via WhatsApp
             </button>
           </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
