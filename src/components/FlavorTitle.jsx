import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const FlavorTitle = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".flavor-line-1", {
      type: "words",
    });
    const secondTextSplit = SplitText.create(".flavor-line-3", {
      type: "words",
    });

    gsap.from(firstTextSplit.words, {
      yPercent: 120,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 70%",
      },
    });

    gsap.to(".flavor-text-scroll", {
      duration: 1.5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "expo.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 60%",
      },
    });

    gsap.from(secondTextSplit.words, {
      yPercent: 120,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.05,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 50%",
      },
    });
  });

  return (
    <div className="h-full flex flex-col justify-center px-8 md:px-12 xl:px-16 gap-4 md:gap-6">
      {/* EXPERIENCE */}
      <div className="overflow-hidden first-text-split">
        <h1 className="flavor-line-1 font-sans font-bold uppercase tracking-tighter text-[12vw] lg:text-[7vw] leading-none text-white/90 whitespace-nowrap">
          EXPERIENCE
        </h1>
      </div>

      {/* EVENTS badge */}
      <div
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        className="flavor-text-scroll self-start rotate-[-2deg]"
      >
        <div className="bg-white border-[3px] border-[#6c2020] py-2 md:py-3 px-6 md:px-10">
          <h2 className="text-[#6c2020] font-sans uppercase font-bold tracking-tight text-[10vw] lg:text-[5.5vw] leading-none">
            EVENTS
          </h2>
        </div>
      </div>

      {/* OF TOMMORW */}
      <div className="overflow-hidden second-text-split">
        <h1 className="flavor-line-3 font-sans font-bold uppercase tracking-tighter text-[10vw] lg:text-[6vw] leading-none text-white/90 whitespace-nowrap">
          OF TOMMORW
        </h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
