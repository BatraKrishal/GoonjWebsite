import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import EventModal from "./EventModal";

const FlavorSlider = () => {
  const sliderRef = useRef();
  const [activeFlavor, setActiveFlavor] = useState(null);

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          scrub: 1.5,
          pin: true,
        },
      });

      // Scroll the section horizontally
      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1500}px`,
        ease: "none",
      });

      // Counter-translate the background the same amount to keep it visually fixed
      tl.to(
        ".flavor-bg-fixed",
        {
          x: `${scrollAmount + 1500}px`,
          ease: "none",
        },
        "<"
      );
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: 1.5,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power2.out",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power2.out",
        },
        "<"
      );
  });

  return (
    <>
      <div ref={sliderRef} className="slider-wrapper">
        <div className="flavors">
          {flavorlists.map((flavor) => (
            <button
              key={flavor.name}
              type="button"
              aria-label={`Open ${flavor.name} events`}
              className={`group relative z-30 h-[50vh] w-[80vw] flex-none cursor-pointer bg-transparent p-0 text-left md:h-[55vh] md:w-[70vw] lg:h-[65vh] lg:w-[50vw] ${flavor.rotation}`}
              onClick={() => setActiveFlavor(flavor)}
            >
              <div className="h-full w-full overflow-hidden rounded-2xl shadow-2xl">
                <div className="relative h-full w-full">
                  <img
                    src={`/images/${flavor.color}.png`}
                    alt={flavor.name}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute left-5 top-5 rotate-[-3deg] border-2 border-white/70 md:left-7 md:top-7">
                    <div className="bg-[#871B1A] px-4 py-2">
                      <p className="font-paragraph text-[0.65rem] uppercase tracking-[0.35em] text-white/70">
                        Explore
                      </p>
                      <p className="mt-1 text-sm uppercase tracking-[0.3em] text-white">
                        Event lineup
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <p className="font-paragraph text-[0.7rem] uppercase tracking-[0.35em] text-white/70">
                      {flavor.events.length} highlighted events
                    </p>
                    <h1 className="mt-3 text-4xl font-bold uppercase tracking-widest text-white drop-shadow-lg md:text-6xl">
                      {flavor.name}
                    </h1>
                    <p className="mt-3 max-w-sm font-paragraph text-sm leading-relaxed text-white/80 md:text-base">
                      {flavor.summary}
                    </p>
                  </div>
                  <div className="absolute bottom-6 right-6 rounded-full border border-white/30 bg-white/10 px-4 py-2 font-paragraph text-[0.65rem] uppercase tracking-[0.35em] text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-[#523122] md:bottom-8 md:right-8">
                    Open modal
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <EventModal
        flavor={activeFlavor}
        onClose={() => setActiveFlavor(null)}
      />
    </>
  );
};

export default FlavorSlider;
