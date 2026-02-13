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
        <div className="relative w-[300px] h-[300px]">
          {/* Globe sphere */}
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              background: "radial-gradient(circle at 30% 30%, hsl(210 80% 40%), hsl(210 60% 15%) 60%, hsl(220 40% 8%) 100%)",
              boxShadow: "0 0 60px 10px hsla(210, 80%, 40%, 0.15), inset -20px -20px 40px hsla(220, 40%, 5%, 0.6), inset 10px 10px 30px hsla(210, 80%, 50%, 0.1)",
            }}
          >
            {/* Continent overlay with rotation */}
            <div
              className="absolute inset-0 rounded-full opacity-30"
              style={{
                backgroundImage: `
                  radial-gradient(ellipse 40px 30px at 35% 35%, hsla(140, 50%, 40%, 0.6) 0%, transparent 100%),
                  radial-gradient(ellipse 25px 45px at 60% 40%, hsla(140, 50%, 35%, 0.5) 0%, transparent 100%),
                  radial-gradient(ellipse 30px 20px at 45% 60%, hsla(140, 50%, 30%, 0.4) 0%, transparent 100%),
                  radial-gradient(ellipse 20px 35px at 70% 55%, hsla(140, 40%, 35%, 0.4) 0%, transparent 100%)
                `,
                animation: "earthRotate 20s linear infinite",
              }}
            />
            {/* Atmosphere glow */}
            <div
              className="absolute inset-[-2px] rounded-full"
              style={{
                background: "radial-gradient(circle at 25% 25%, hsla(200, 80%, 60%, 0.08), transparent 50%)",
              }}
            />
          </div>

          {/* Grid lines */}
          <div className="absolute inset-0 rounded-full overflow-hidden opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 29px, hsla(210, 60%, 70%, 0.3) 30px),
                  repeating-linear-gradient(90deg, transparent, transparent 29px, hsla(210, 60%, 70%, 0.3) 30px)
                `,
                animation: "earthRotate 25s linear infinite",
              }}
            />
          </div>

          {/* Shine highlight */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at 30% 25%, hsla(200, 100%, 90%, 0.12), transparent 40%)",
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
