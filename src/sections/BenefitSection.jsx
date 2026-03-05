import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoRevealSection from "../components/VideoRevealSection";

const BenefitSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
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
    <section className="benefit-section"
    style={{
          backgroundImage: "url('/images/benefits-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
    >
      <div className="container mx-auto pt-20">
        <div className="col-center text-white">
          <p>
            Fun Games and Quests <br />
            Explore what suits you best and win exciting prizes.
          </p>

          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"E-Sports"}
              color={"#ffffff"}
              bg={"#226031"}
              className={"first-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Treasure Hunt"}
              color={"#ffffff"}
              bg={"#0034D0"}
              className={"second-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"GRAFFITI, EVENT, EVENT"}
              color={"#ffffff"}
              bg={"#C22100"}
              className={"third-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Event, Event"}
              color={"#FFFFFF"}
              bg={"#6900CC"}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>

          <div className="md:mt-0 mt-10 text-white">
            <p>And much more ...</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">
        <VideoRevealSection />
      </div>
    </section>
  );
};

export default BenefitSection;
