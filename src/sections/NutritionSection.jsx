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
      type: "chars",
    });
    const paragraphSplit = SplitText.create(".nutrition-section p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 60%", // Trigger earlier
      },
    });
    contentTl
      .from(titleSplit.chars, {
        yPercent: 120,
        rotateX: -40,
        opacity: 0,
        stagger: 0.03,
        ease: "power4.out",
        duration: 1.2,
      })
      .from(paragraphSplit.words, {
        yPercent: 150,
        rotateX: -20,
        opacity: 0,
        ease: "power3.out",
        duration: 1,
        stagger: 0.02,
      }, "-=0.8");

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 80%",
      },
    });

    titleTl.to(".nutrition-text-scroll", {
      duration: 1.5,
      opacity: 1,
      clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
      ease: "expo.out",
    });
  });

  return (
    <section className="nutrition-section">
      <img
        src="/images/slider-dip.png"
        alt=""
        className="w-full object-cover"
      />

      <img src="/images/big-img.png" alt="" className="big-img" />

      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title font-serif italic text-goonj-dark-teal">Engineering</h1>
            </div>
            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="nutrition-text-scroll place-self-start"
            >
              <div className="bg-goonj-cyan pb-5 md:pt-0 pt-3 md:px-10 px-5">
                <h2 className="text-white">the Future</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p className="text-lg md:text-right text-balance font-paragraph text-goonj-dark-teal">
              From the precision of code to the power of robotics, our engineers are building tomorrow's world today.
            </p>
          </div>
        </div>

        <div className="nutrition-box">
          <div className="list-wrapper bg-goonj-light-teal border-goonj-cyan/20">
            {lists.map((nutrient, index) => (
              <div key={index} className="relative flex-1 col-center magnetic-target cursor-none">
                <div>
                  <p className="md:text-lg font-paragraph text-goonj-dark-teal">{nutrient.label}</p>
                  <p className="font-paragraph text-xs mt-2 uppercase tracking-widest text-goonj-cyan">Domain</p>
                  <p className="text-2xl md:text-3xl tracking-tighter font-bold text-goonj-dark-teal">
                    {nutrient.amount}
                  </p>
                </div>

                {index !== lists.length - 1 && (
                  <div className="spacer-border bg-goonj-cyan/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
