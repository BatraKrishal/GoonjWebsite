import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Logo = ({ className, spin = false }) => {
  const logoRef = useRef(null);

  useGSAP(() => {
    if (spin && logoRef.current) {
      gsap.to(logoRef.current.querySelector(".pinwheel"), {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }
  }, [spin]);

  return (
    <div ref={logoRef} className={`flex items-center gap-2 ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pinwheel size-10"
      >
        {/* Simplified Pinwheel G shape based on provided images */}
        <path
          d="M50 50L20 20H50L80 50L50 80H20L50 50Z"
          fill="currentColor"
          className="text-goonj-teal"
        />
        <circle cx="50" cy="50" r="10" fill="white" />
        {/* Additional geometric details to mimic the 'G' and movement */}
        <path
          d="M50 10V30M90 50H70M50 90V70M10 50H30"
          stroke="currentColor"
          strokeWidth="2"
          className="opacity-50"
        />
      </svg>
      <span className="font-serif font-bold text-2xl text-goonj-dark-teal">
        GOONJ <span className="font-sans text-goonj-cyan">'26</span>
      </span>
    </div>
  );
};

export default Logo;
