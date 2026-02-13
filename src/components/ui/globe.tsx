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
      <div className="flex items-center justify-center w-full h-full">
        <div
          className="w-[250px] h-[250px] rounded-full overflow-hidden relative"
          style={{
            backgroundImage: `url(https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/globe.jpeg)`,
            backgroundSize: "cover",
            backgroundPosition: "left",
            backgroundRepeat: "repeat-x",
            animation: "earthRotate 30s linear infinite",
            boxShadow:
              "0 0 20px rgba(255,255,255,0.2), -5px 0 8px #c3f4ff inset, 15px 2px 25px #000 inset, -24px -2px 34px #c3f4ff99 inset, 250px 0 44px #00000066 inset, 150px 0 38px #000000aa inset",
          }}
        >
          {/* Stars */}
          <div className="absolute w-[2px] h-[2px] bg-white rounded-full" style={{ top: "-15px", left: "30px", animation: "twinkling 3s infinite 0.2s" }} />
          <div className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full" style={{ top: "10px", left: "-20px", animation: "twinkling-slow 4s infinite 1s" }} />
          <div className="absolute w-[2.5px] h-[2.5px] bg-white rounded-full" style={{ top: "-10px", left: "210px", animation: "twinkling-long 5s infinite 0.5s" }} />
          <div className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full" style={{ top: "230px", left: "15px", animation: "twinkling-fast 2.5s infinite 0.8s" }} />
          <div className="absolute w-[2px] h-[2px] bg-white rounded-full" style={{ top: "240px", left: "200px", animation: "twinkling 3.5s infinite 1.5s" }} />
          <div className="absolute w-[1px] h-[1px] bg-white rounded-full" style={{ top: "120px", left: "-25px", animation: "twinkling-slow 4.5s infinite 0.3s" }} />
          <div className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full" style={{ top: "80px", left: "260px", animation: "twinkling-long 3.8s infinite 2s" }} />
        </div>
      </div>
    </>
  );
};

export default Globe;
