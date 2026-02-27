import { useMediaQuery } from "react-responsive";
import { nutrientLists } from "../constants";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const NutritionSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [lists, setLists] = useState(nutrientLists);

  useEffect(() => {
    if (isMobile) {
      setLists(nutrientLists.slice(0, 3));
    } else {
      setLists(nutrientLists);
    }
  }, [isMobile]);

  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title", {
      type: "words",
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 60%",
      },
    });

    contentTl.from(titleSplit.words, {
      yPercent: 120,
      opacity: 0,
      stagger: 0.08,
      ease: "power4.out",
      duration: 1.2,
    });

    gsap.to(".nutrition-text-scroll", {
      duration: 1.5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 50%",
      },
    });

    gsap.to(".nutrition-badge", {
      duration: 1.2,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "expo.out",
      delay: 0.4,
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 40%",
      },
    });
  });

  return (
    <section
      className="nutrition-section relative min-h-dvh overflow-hidden"
      style={{
        backgroundImage: "url('/images/nutrition-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top-left stacked title */}
      <div className="absolute top-12 left-8 md:left-14 z-10 flex flex-col gap-4 md:gap-5">
        {/* HERITAGE WITH */}
        <div className="overflow-hidden">
          <h1 className="nutrition-title font-sans font-black uppercase tracking-tighter text-[10vw] md:text-[7vw] leading-none text-white/90 whitespace-nowrap drop-shadow-lg">
            HERITAGE WITH
          </h1>
        </div>

        {/* ENGINEERS badge */}
        <div
          style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          className="nutrition-text-scroll self-start rotate-[-1deg]"
        >
          <div className="bg-[#7a2500] border-[3px] border-[#4a1500] py-2 md:py-3 px-5 md:px-8">
            <h2 className="font-sans font-black uppercase tracking-tighter text-[10vw] md:text-[7vw] leading-none text-white whitespace-nowrap">
              ENGINEERS
            </h2>
          </div>
        </div>
      </div>

      {/* @GOONJ2K25 badge — centre bottom area */}
      <div
        style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        className="nutrition-badge absolute bottom-28 md:bottom-36 left-1/2 -translate-x-1/2 z-20 rotate-[-2deg]"
      >
        <div className="bg-[#e07b00] border-[3px] border-[#7a3d00] py-2 md:py-3 px-6 md:px-10">
          <p className="font-sans font-black uppercase tracking-tight text-2xl md:text-4xl text-white whitespace-nowrap">
            @GOONJ2K25
          </p>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="nutrition-box">
        <div className="list-wrapper bg-black/60 border-white/10 backdrop-blur-md">
          {lists.map((nutrient, index) => (
            <div
              key={index}
              className="relative flex-1 col-center magnetic-target cursor-none"
            >
              <div>
                <p className="md:text-sm text-xs font-paragraph text-white/50 uppercase tracking-widest mb-1">
                  {nutrient.label}
                </p>
                {nutrient.sublabel && (
                  <p className="font-paragraph text-xs text-white/40 capitalize">
                    {nutrient.sublabel}
                  </p>
                )}
                <p className="text-xl md:text-2xl tracking-tighter font-bold text-white mt-1">
                  {nutrient.amount}
                </p>
              </div>
              {index !== lists.length - 1 && (
                <div className="spacer-border bg-white/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
