import React from "react";
import earthTexture from "@/assets/earth-texture.jpg";

const Globe: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes earthRotate {
            0% { background-position: 0% 0; }
            100% { background-position: -200% 0; }
          }
          @keyframes twinkling { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-slow { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-long { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-fast { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
        `}
      </style>
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative" style={{ width: "100%", paddingBottom: "100%" }}>
          {/* Earth sphere with real texture - no border */}
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              backgroundImage: `url(${earthTexture})`,
              backgroundSize: "200% 100%",
              backgroundRepeat: "repeat-x",
              animation: "earthRotate 20s linear infinite",
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
          />

          {/* Day/night terminator shadow - darker to match photo */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(120deg, transparent 30%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.85) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Subtle specular highlight */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at 35% 30%, hsla(200,80%,80%,0.1), transparent 40%)",
              pointerEvents: "none",
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
