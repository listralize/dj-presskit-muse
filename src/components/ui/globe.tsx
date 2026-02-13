import React from "react";

const Globe: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes earthRotate {
            0% { background-position: 0 0; }
            100% { background-position: 400px 0; }
          }
          @keyframes twinkling { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-slow { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-long { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-fast { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
        `}
      </style>
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-full h-full" style={{ aspectRatio: "1/1" }}>
          {/* Globe sphere - realistic Earth */}
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              background: "radial-gradient(circle at 35% 30%, hsl(205 70% 50%), hsl(210 65% 30%) 40%, hsl(215 50% 18%) 70%, hsl(220 40% 8%) 100%)",
              boxShadow: "0 0 80px 15px hsla(210, 80%, 40%, 0.2), inset -25px -25px 50px hsla(220, 40%, 5%, 0.7), inset 15px 15px 40px hsla(210, 80%, 50%, 0.15)",
            }}
          >
            {/* Ocean layer */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle at 40% 35%, hsla(200, 70%, 45%, 0.4), hsla(210, 60%, 25%, 0.3) 50%, transparent 80%)",
              }}
            />
            {/* Continent shapes with animation */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                opacity: 0.7,
                backgroundImage: `
                  radial-gradient(ellipse 45px 35px at 30% 30%, hsla(140, 40%, 35%, 0.8) 0%, hsla(140, 35%, 28%, 0.4) 60%, transparent 100%),
                  radial-gradient(ellipse 20px 50px at 55% 35%, hsla(140, 45%, 32%, 0.7) 0%, hsla(140, 35%, 25%, 0.3) 60%, transparent 100%),
                  radial-gradient(ellipse 35px 25px at 40% 55%, hsla(140, 40%, 30%, 0.6) 0%, hsla(140, 30%, 22%, 0.3) 60%, transparent 100%),
                  radial-gradient(ellipse 25px 40px at 65% 50%, hsla(140, 35%, 33%, 0.6) 0%, hsla(140, 30%, 25%, 0.3) 60%, transparent 100%),
                  radial-gradient(ellipse 40px 20px at 25% 50%, hsla(100, 35%, 30%, 0.5) 0%, transparent 100%),
                  radial-gradient(ellipse 18px 30px at 75% 35%, hsla(120, 30%, 28%, 0.5) 0%, transparent 100%),
                  radial-gradient(ellipse 30px 15px at 50% 70%, hsla(80, 30%, 32%, 0.4) 0%, transparent 100%)
                `,
                animation: "earthRotate 25s linear infinite",
              }}
            />
            {/* Cloud layer */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                opacity: 0.25,
                backgroundImage: `
                  radial-gradient(ellipse 50px 8px at 20% 25%, hsla(0, 0%, 100%, 0.6) 0%, transparent 100%),
                  radial-gradient(ellipse 40px 6px at 60% 45%, hsla(0, 0%, 100%, 0.5) 0%, transparent 100%),
                  radial-gradient(ellipse 55px 10px at 45% 65%, hsla(0, 0%, 100%, 0.4) 0%, transparent 100%),
                  radial-gradient(ellipse 30px 5px at 70% 30%, hsla(0, 0%, 100%, 0.3) 0%, transparent 100%)
                `,
                animation: "earthRotate 35s linear infinite",
              }}
            />
            {/* Atmosphere inner glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle at 30% 25%, hsla(200, 80%, 70%, 0.15), transparent 45%)",
              }}
            />
            {/* Terminator (day/night) shadow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(105deg, transparent 40%, hsla(220, 50%, 5%, 0.5) 70%, hsla(220, 50%, 3%, 0.7) 100%)",
              }}
            />
          </div>

          {/* Atmosphere halo ring */}
          <div
            className="absolute rounded-full"
            style={{
              inset: "-6px",
              background: "radial-gradient(circle, transparent 46%, hsla(200, 70%, 55%, 0.1) 48%, hsla(200, 60%, 50%, 0.06) 52%, transparent 56%)",
              boxShadow: "0 0 40px 8px hsla(200, 70%, 50%, 0.06)",
            }}
          />

          {/* Grid lines */}
          <div className="absolute inset-0 rounded-full overflow-hidden opacity-[0.07]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 29px, hsla(210, 60%, 70%, 0.4) 30px),
                  repeating-linear-gradient(90deg, transparent, transparent 29px, hsla(210, 60%, 70%, 0.4) 30px)
                `,
                animation: "earthRotate 25s linear infinite",
              }}
            />
          </div>

          {/* Specular highlight */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at 32% 22%, hsla(200, 100%, 95%, 0.18), transparent 30%)",
            }}
          />

          {/* Stars around the globe */}
          {[
            { top: "-15%", left: "10%", size: 2, anim: "twinkling 3s infinite 0.2s" },
            { top: "5%", left: "-10%", size: 1.5, anim: "twinkling-slow 4s infinite 1s" },
            { top: "-8%", left: "85%", size: 2.5, anim: "twinkling-long 5s infinite 0.5s" },
            { top: "90%", left: "5%", size: 1.5, anim: "twinkling-fast 2.5s infinite 0.8s" },
            { top: "95%", left: "80%", size: 2, anim: "twinkling 3.5s infinite 1.5s" },
            { top: "50%", left: "-12%", size: 1, anim: "twinkling-slow 4.5s infinite 0.3s" },
            { top: "30%", left: "105%", size: 1.5, anim: "twinkling-long 3.8s infinite 2s" },
          ].map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-foreground/80"
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animation: star.anim,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Globe;
