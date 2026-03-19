import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    let split;

    // 👉 Adaptive SplitText (preserve feel, reduce load)
    split = SplitText.create(".hero-title", {
      type: isMobile ? "words" : "chars",
    });

    const tl = gsap.timeline({
      delay: isMobile ? 0.5 : 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      duration: isMobile ? 0.6 : 1,
      ease: "power1.out",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: isMobile ? 0.6 : 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.4"
      )
      .from(
        split[isMobile ? "words" : "chars"],
        {
          yPercent: isMobile ? 100 : 200,
          stagger: isMobile ? 0.05 : 0.02,
          duration: isMobile ? 0.5 : 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );

    // 👉 Scroll animation (same feel, lighter)
    gsap.to(".hero-container", {
      rotate: isMobile ? 4 : 7,
      scale: isMobile ? 0.95 : 0.9,
      yPercent: isMobile ? 20 : 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: isMobile ? 0.8 : true,
      },
    });

    return () => {
      split.revert(); // 🔥 cleanup
    };
  }, [isMobile]);

  return (
    <section className="bg-white overflow-hidden">
      <div className="hero-container relative h-screen w-full">
        
        {/* 👉 MOBILE + TABLET IMAGE */}
        {isTablet ? (
          <img
            src="/images/hero-img.png"
            alt="hero"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
        ) : (
          // 👉 DESKTOP VIDEO
          <video
            src="/videos/hero-bg.mp4"
            autoPlay
            muted
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* 👉 CONTENT */}
        <div className="hero-content opacity-0 translate-y-10 relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          
          <div className="overflow-hidden">
            <h1 className="hero-title text-4xl p-1 sm:text-5xl md:text-8xl font-bold">
              Goonj 2k26
            </h1>
          </div>

          <div
            style={{
              clipPath:
                "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle text-lg sm:text-xl md:text-2xl mt-2">
              <h1>Echoes of Golden Era</h1>
            </div>
          </div>

          <h2 className="mt-4 text-sm sm:text-base md:text-lg max-w-xl">
            “Jahan Kala Sirf Dikhti Nahi, Mehsoos Bhi Hoti Hai — Wahi Hai Goonj.”
          </h2>

          <div className="hero-button mt-6">
            <p className="text-base md:text-lg">Explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;