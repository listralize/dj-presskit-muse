import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import djPhoto from "@/assets/dj-photo.png";
import logo from "@/assets/logo.png";
import { Instagram, Youtube, Music, MessageCircle, User, Phone, Calendar, MessageSquare, ChevronDown } from "lucide-react";

const formSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100),
  telefone: z.string().trim().min(10, "Telefone inválido").max(20),
  tipoEvento: z.string().min(1, "Selecione o tipo de evento"),
  dataEvento: z.string().optional(),
  mensagem: z.string().max(500).optional(),
});

type FormData = z.infer<typeof formSchema>;

const WHATSAPP_NUMBER = "5500000000000";

const eventTypes = ["Festa", "Festival", "Casamento", "Corporativo", "Outro"];

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

  return (
    <div className="relative group">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground/50 group-focus-within:text-primary transition-colors duration-300">
        <Icon size={16} />
      </div>
      <input
        id={id}
        {...props}
        onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
        className="w-full bg-transparent border-b border-muted-foreground/20 focus:border-primary pl-7 pr-0 py-3 text-sm text-foreground outline-none transition-all duration-300 peer placeholder-transparent [&::-webkit-calendar-picker-indicator]:invert"
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={`absolute left-7 transition-all duration-300 pointer-events-none ${
          focused || hasValue
            ? "-top-1 text-[10px] tracking-widest uppercase text-primary/70"
            : "top-3 text-sm text-muted-foreground/40"
        }`}
      >
        {label}
      </label>
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
    <section className="relative min-h-screen flex flex-col">
      {/* Logo + Legenda */}
      <div className="relative z-10 flex flex-col items-center pt-10 pb-4 gap-3">
        <img src={logo} alt="Unk DJ Logo" className="w-28 md:w-36" />
        <p className="text-[10px] md:text-xs text-muted-foreground tracking-[0.35em] uppercase font-light">
          Energia em Ritmo · Eletrofunk · House Music
        </p>
      </div>

      {/* Main content: Photo + Form */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center container mx-auto px-6 gap-10 lg:gap-20 pb-16 pt-4">
        {/* DJ Photo */}
        <div className="lg:w-5/12 flex justify-center">
          <div className="relative w-64 md:w-80 lg:w-96 aspect-[3/4] overflow-hidden rounded-sm">
            <img
              src={djPhoto}
              alt="Unk DJ"
              className="w-full h-full object-cover"
            />
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
            <p className="text-muted-foreground/50 text-xs tracking-[0.3em] uppercase mb-2">
              Contrate agora
            </p>
            <h2 className="text-3xl md:text-4xl font-display text-foreground leading-none">
              {nome ? (
                <>Olá, <span className="text-primary">{nome}</span>!</>
              ) : (
                "Vamos trabalhar juntos?"
              )}
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground/50 group-focus-within:text-primary transition-colors duration-300">
                <MessageSquare size={16} />
              </div>
              <button
                type="button"
                onClick={() => setSelectOpen(!selectOpen)}
                className="w-full bg-transparent border-b border-muted-foreground/20 focus:border-primary pl-7 pr-6 py-3 text-sm text-left outline-none transition-all duration-300 flex items-center justify-between"
              >
                <span className={tipoEvento ? "text-foreground" : "text-muted-foreground/40"}>
                  {tipoEvento || "Tipo de evento"}
                </span>
                <ChevronDown size={14} className={`text-muted-foreground/40 transition-transform duration-200 ${selectOpen ? "rotate-180" : ""}`} />
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
                      className="w-full px-7 py-2.5 text-sm text-left text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors duration-200"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
              {errors.tipoEvento && <p className="text-[11px] text-destructive/80 mt-1.5 pl-7">{errors.tipoEvento.message}</p>}
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
              <div className="absolute left-0 top-3 text-muted-foreground/50 group-focus-within:text-primary transition-colors duration-300">
                <MessageCircle size={16} />
              </div>
              <textarea
                id="mensagem"
                {...register("mensagem")}
                rows={3}
                placeholder="Mensagem (opcional)"
                className="w-full bg-transparent border-b border-muted-foreground/20 focus:border-primary pl-7 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/40 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-3.5 border border-primary/30 text-primary hover:bg-primary/10 text-sm tracking-[0.2em] uppercase transition-all duration-300 rounded-sm mt-8"
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
