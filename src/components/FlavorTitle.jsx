import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const FlavorTitle = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });
    const secondTextSplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });

    // Premium Awwwards typography setup
    gsap.set([firstTextSplit.chars, secondTextSplit.chars], {
      yPercent: 120,
      opacity: 0,
      rotateX: -40,
    });

    gsap.to(firstTextSplit.chars, {
      yPercent: 0,
      opacity: 1,
      rotateX: 0,
      stagger: 0.03,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 50%",
      },
    });

    gsap.to(".flavor-text-scroll", {
      duration: 1.5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 40%",
      },
    });

    gsap.to(secondTextSplit.chars, {
      yPercent: 0,
      opacity: 1,
      rotateX: 0,
      stagger: 0.03,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });
  });

  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16 magnetic-target cursor-none hw-accel perspective-[1000px]">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split transform-style-3d">
        <h1 className="font-serif italic capitalize">Experience the</h1>
      </div>

      <div
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        className="flavor-text-scroll transform-style-3d"
      >
        <div className="bg-goonj-dark-teal pb-5 2xl:pt-0 pt-3 2xl:px-10 px-5 glass-panel border-none">
          <h2 className="text-white">Essence</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split transform-style-3d">
        <h1 className="font-serif italic capitalize">of Raga</h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
