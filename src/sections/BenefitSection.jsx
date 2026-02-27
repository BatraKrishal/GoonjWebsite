import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";

const BenefitSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });

  return (
    <section className="benefit-section relative">
      {/* Full-cover background image at z-0 */}
      <img
        src="/images/benefit.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-0 pointer-events-none"
      />

      <div className="container mx-auto pt-20 relative z-10">
        <div className="col-center">
          <div className="mt-20 col-center">
            {/* ESPORTS — dark green */}
            <ClipPathTitle
              title={"ESPORTS"}
              color={"white"}
              bg={"#1a6b34"}
              className={"first-title magnetic-target cursor-none"}
              borderColor={"white"}
            />
            {/* TREASURE HUNT — blue */}
            <ClipPathTitle
              title={"TREASURE HUNT"}
              color={"white"}
              bg={"#1a3aa8"}
              className={"second-title magnetic-target cursor-none"}
              borderColor={"white"}
            />
            {/* GRAFFITI, EVENT, EVENT — red */}
            <ClipPathTitle
              title={"GRAFFITI, EVENT, EVENT"}
              color={"white"}
              bg={"#9a1c1c"}
              className={"third-title magnetic-target cursor-none"}
              borderColor={"white"}
            />
            {/* AND MUCH MORE... — purple */}
            <ClipPathTitle
              title={"AND MUCH MORE..."}
              color={"white"}
              bg={"#5a1a9a"}
              className={"fourth-title magnetic-target cursor-none"}
              borderColor={"white"}
            />
          </div>
        </div>
      </div>

      <div className="relative overlay-box z-10">
        <VideoPinSection />
      </div>
    </section>
  );
};

export default BenefitSection;
