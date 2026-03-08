import { useEffect, useRef } from "react";

export default function GradientBeam() {
  const beamRef = useRef(null);

  useEffect(() => {
    const beam = beamRef.current;
    let pos = 0;

    function animate() {
      pos += 0.6;
      beam.style.backgroundPosition = `0 ${pos}px`;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="relative flex justify-center mt-12">
      {/* glow aura */}
      <div className="absolute h-40 sm:h-52 w-[10px] bg-white/30 blur-xl opacity-40"></div>

      {/* beam */}
      <div
        ref={beamRef}
        className="relative w-[2px] h-40 sm:h-52 overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.9), transparent)",
          backgroundSize: "100% 200%",
        }}
      >
        {/* shimmer */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(255,255,255,0.7), transparent)",
            filter: "blur(2px)",
            animation: "shimmer 2.5s linear infinite",
          }}
        />

        {/* particles */}
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="absolute left-1/2 -translate-x-1/2 w-[4px] h-[4px] bg-white rounded-full"
            style={{
              top: "-10px",
              animation: `particle ${2 + i * 0.6}s linear infinite`,
              opacity: 0.8,
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>

      <style>
        {`
        @keyframes shimmer {
          0% { transform: translateY(-100%); opacity:0 }
          50% { opacity:1 }
          100% { transform: translateY(100%); opacity:0 }
        }

        @keyframes particle {
          0% { transform: translate(-50%, -20px); opacity:0 }
          20% { opacity:1 }
          100% { transform: translate(-50%, 220px); opacity:0 }
        }
        `}
      </style>
    </div>
  );
}