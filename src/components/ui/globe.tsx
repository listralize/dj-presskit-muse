import React from "react";
import earthTexture from "@/assets/earth-texture.jpg";

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
        <div className="relative" style={{ width: "100%", paddingBottom: "100%" }}>
          {/* Earth sphere */}
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              backgroundImage: `url(${earthTexture})`,
              backgroundSize: "cover",
              backgroundPosition: "left",
              backgroundRepeat: "repeat-x",
              animation: "earthRotate 30s linear infinite",
              boxShadow:
                "0 0 15px 5px rgba(255,255,255,0.2), inset 0 0 40px 20px #000, inset -20px -10px 30px 10px #c3f4ff, inset 10px 10px 20px 10px #0000006e, inset 0 0 50px 30px #000000aa",
            }}
          />

          {/* Stars */}
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
              className="absolute rounded-full bg-white"
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
