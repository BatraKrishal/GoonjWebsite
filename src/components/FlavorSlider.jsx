import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef();

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
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => {
          const isEventCard = flavor.color === "event";

          return (
            <div
              key={flavor.name}
              className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none magnetic-target cursor-none overflow-hidden rounded-2xl ${flavor.rotation}`}
            >
              {isEventCard ? (
                /* Use flavor-bg.png with a dark overlay as the card background */
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url('/images/flavor-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              ) : (
                <>
                  <img
                    src={`/images/${flavor.color}-bg.svg`}
                    alt=""
                    className="absolute bottom-0"
                  />
                  <img
                    src={`/images/${flavor.color}-drink.webp`}
                    alt=""
                    className="drinks"
                  />
                  <img
                    src={`/images/${flavor.color}-elements.webp`}
                    alt=""
                    className="elements"
                  />
                </>
              )}

              {/* Event name always visible */}
              <h1>{flavor.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlavorSlider;
