import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Globe from "@/components/ui/globe";
import { cn } from "@/lib/utils";

interface ScrollGlobeProps {
  sections: {
    id: string;
    badge?: string;
    title: string;
    subtitle?: string;
    description: string;
    align?: "left" | "center" | "right";
    features?: { title: string; description: string }[];
    actions?: {
      label: string;
      variant: "primary" | "secondary";
      onClick?: () => void;
    }[];
  }[];
  globeConfig?: {
    positions: {
      top: string;
      left: string;
      scale: number;
    }[];
  };
  className?: string;
}

const defaultGlobeConfig = {
  positions: [
    { top: "50%", left: "75%", scale: 1.4 },
    { top: "25%", left: "50%", scale: 0.9 },
    { top: "15%", left: "90%", scale: 2 },
    { top: "50%", left: "50%", scale: 1.8 },
  ],
};

const parsePercent = (str: string): number =>
  parseFloat(str.replace("%", ""));

function ScrollGlobe({
  sections,
  globeConfig = defaultGlobeConfig,
  className,
}: ScrollGlobeProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [globeTransform, setGlobeTransform] = useState("");
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameId = useRef<number>();

  const calculatedPositions = useMemo(() => {
    return globeConfig.positions.map((pos) => ({
      top: parsePercent(pos.top),
      left: parsePercent(pos.left),
      scale: pos.scale,
    }));
  }, [globeConfig.positions]);

  const updateScrollPosition = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max(scrollTop / docHeight, 0), 1);

    setScrollProgress(progress);

    const viewportCenter = window.innerHeight / 2;
    let newActiveSection = 0;
    let minDistance = Infinity;

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          newActiveSection = index;
        }
      }
    });

    const currentPos = calculatedPositions[newActiveSection];
    const transform = `translate3d(${currentPos.left}vw, ${currentPos.top}vh, 0) translate3d(-50%, -50%, 0) scale3d(${currentPos.scale}, ${currentPos.scale}, 1)`;

    setGlobeTransform(transform);
    setActiveSection(newActiveSection);
  }, [calculatedPositions]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        animationFrameId.current = requestAnimationFrame(() => {
          updateScrollPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollPosition();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [updateScrollPosition]);

  useEffect(() => {
    const initialPos = calculatedPositions[0];
    const initialTransform = `translate3d(${initialPos.left}vw, ${initialPos.top}vh, 0) translate3d(-50%, -50%, 0) scale3d(${initialPos.scale}, ${initialPos.scale}, 1)`;
    setGlobeTransform(initialTransform);
  }, [calculatedPositions]);

  return (
    <div ref={null} className={cn("relative bg-background", className)}>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 z-50 bg-muted/20">
        <div
          className="h-full bg-primary/60 transition-all duration-100"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Side Navigation */}
      <div className="fixed right-3 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-1">
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          {sections.map((section, index) => (
            <div key={section.id} className="relative flex items-center gap-2">
              {/* Label */}
              <div
                className={cn(
                  "absolute right-full mr-3 transition-all duration-300",
                  activeSection === index
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2"
                )}
              >
                <div className="flex items-center gap-1.5 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary" />
                  <span className="text-[10px] sm:text-xs text-foreground/80 whitespace-nowrap font-medium">
                    {section.badge || `Section ${index + 1}`}
                  </span>
                </div>
              </div>

              {/* Dot */}
              <button
                onClick={() => {
                  sectionRefs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className={cn(
                  "relative w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full border-2 transition-all duration-300 hover:scale-125",
                  "before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300",
                  activeSection === index
                    ? "bg-primary border-primary shadow-lg before:animate-ping before:bg-primary/20"
                    : "bg-transparent border-muted-foreground/40 hover:border-primary/60 hover:bg-primary/10"
                )}
                aria-label={`Go to ${section.badge || `section ${index + 1}`}`}
              />
            </div>
          ))}
        </div>

        {/* Navigation line */}
        <div className="absolute top-0 bottom-0 right-[3px] sm:right-[4px] lg:right-[5px] w-px bg-border/20 -z-10" />
      </div>

      {/* Globe */}
      <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] opacity-30"
          style={{
            transform: globeTransform,
            transition: "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
          }}
        >
          <Globe />
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <div
          key={section.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          className={cn(
            "relative min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 z-20 py-12 sm:py-16 lg:py-20",
            "w-full max-w-full overflow-hidden",
            section.align === "center" && "items-center text-center",
            section.align === "right" && "items-end text-right",
            section.align !== "center" &&
              section.align !== "right" &&
              "items-start text-left"
          )}
        >
          <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-8">
            {/* Badge */}
            {section.badge && (
              <span className="inline-block text-xs sm:text-sm font-medium tracking-widest uppercase text-primary/70 border border-primary/20 rounded-full px-3 py-1 sm:px-4 sm:py-1.5">
                {section.badge}
              </span>
            )}

            {/* Title */}
            <div className="space-y-1">
              {section.subtitle ? (
                <div className="space-y-0">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground leading-none">
                    {section.title}
                  </h2>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-primary leading-none">
                    {section.subtitle}
                  </h2>
                </div>
              ) : (
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground leading-none">
                  {section.title}
                </h2>
              )}
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {section.description}
              </p>
              {index === 0 && (
                <div className="flex flex-col sm:flex-row gap-3 text-xs text-muted-foreground/60">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    Interactive Experience
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    Scroll to Explore
                  </span>
                </div>
              )}
            </div>

            {/* Features */}
            {section.features && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 pt-4">
                {section.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="group p-4 sm:p-5 rounded-xl bg-card/50 border border-border/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-foreground mb-1">
                          {feature.title}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            {section.actions && (
              <div className="flex flex-wrap gap-3 pt-2">
                {section.actions.map((action, actionIndex) => (
                  <button
                    key={actionIndex}
                    onClick={action.onClick}
                    className={cn(
                      "relative px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden",
                      action.variant === "primary"
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                        : "border border-border/50 text-foreground/80 hover:border-primary/40 hover:text-foreground"
                    )}
                  >
                    {action.label}
                    {action.variant === "primary" && (
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// Demo component showcasing the ScrollGlobe
export default function GlobeScrollDemo() {
  const demoSections = [
    {
      id: "hero",
      badge: "Welcome",
      title: "Explore",
      subtitle: "Our World",
      description:
        "Journey through an immersive experience where technology meets innovation. Watch as perspectives shift and possibilities unfold with every interaction.",
      align: "left" as const,
      actions: [
        {
          label: "Begin Journey",
          variant: "primary" as const,
          onClick: () => console.log("Get started clicked"),
        },
        {
          label: "Learn More",
          variant: "secondary" as const,
          onClick: () => console.log("Learn more clicked"),
        },
      ],
    },
    {
      id: "innovation",
      badge: "Innovation",
      title: "Connected Worldwide",
      description:
        "From every corner of the globe, we witness the interconnected web of human achievement. Each connection represents progress.",
      align: "center" as const,
    },
    {
      id: "discovery",
      badge: "Discovery",
      title: "Expanding",
      subtitle: "Possibilities",
      description:
        "As we push beyond familiar boundaries, new worlds of opportunity emerge from the horizon.",
      align: "left" as const,
      features: [
        {
          title: "Limitless Exploration",
          description:
            "Discover new dimensions of possibility and innovation",
        },
        {
          title: "Seamless Integration",
          description:
            "Where cutting-edge technology meets human intuition",
        },
        {
          title: "Future-Ready Solutions",
          description:
            "Built for tomorrow's challenges and opportunities",
        },
      ],
    },
    {
      id: "future",
      badge: "Future",
      title: "Our Shared",
      subtitle: "Tomorrow",
      description:
        "In this moment of unity, we see not just a planet, but a canvas of infinite human potential.",
      align: "center" as const,
      actions: [
        {
          label: "Join the Movement",
          variant: "primary" as const,
          onClick: () => console.log("Join clicked"),
        },
        {
          label: "Explore More",
          variant: "secondary" as const,
          onClick: () => console.log("Explore clicked"),
        },
      ],
    },
  ];

  return <ScrollGlobe sections={demoSections} />;
}

export { ScrollGlobe };
export type { ScrollGlobeProps };
