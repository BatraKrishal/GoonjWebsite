import React from "react";
import NavBar from "../components/NavBar";
import Galaxy from "../components/Teams/Galaxy";
import TeamsHero from "../components/Teams/TeamsHero";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import TiltedCard from "../components/Teams/TiltedCard";
import TiltedCardGrid from "../components/Teams/TiltedCardGrid";
import FooterSection from "../sections/FooterSection";

export const Teams = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5",
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5",
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTl.to(".hero-container", {
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <div className="min-h-screen bg-[#000000]">
      <NavBar />
      <div className="h-screen min-h-screen relative bg-[#000000]">
        <div className="h-full w-full absolute">
          <Galaxy
            mouseRepulsion
            mouseInteraction
            density={1}
            glowIntensity={0.3}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            repulsionStrength={2}
            autoCenterRepulsion={0}
            starSpeed={0.5}
            speed={1}
          />
        </div>
        <div className="hero-container pointer-events-none">
          <div className="hero-content opacity-0">
            <div
              style={{
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              }}
              className="hero-text-scroll"
            >
              <div className="hero-subtitle">
                <h1>Our Teams</h1>
              </div>
            </div>

            <h2>
              The creative minds behind the magic. Meet the talented individuals
              who turn ideas into reality.
            </h2>
          </div>
        </div>
      </div>
      <TiltedCardGrid/>
      <FooterSection/>
    </div>
  );
};
