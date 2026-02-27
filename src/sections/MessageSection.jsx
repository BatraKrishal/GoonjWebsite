import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const MessageSection = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });
    const secMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap.to(firstMsgSplit.words, {
      color: "#6c3527", // Brownish red from the design
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });
    gsap.to(secMsgSplit.words, {
      color: "#6c3527", // Brownish red from the design
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
      },
    });
    revealTl.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });

    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
      },
    });
    paragraphTl.from(paragraphSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
    });
  });

  return (
    <section
      className="message-content w-full min-h-dvh flex-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/message-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#2e7039", // fallback green color
      }}
    >
      <div className="container mx-auto flex-center py-20 relative z-10">
        <div className="w-full h-full flex col-center">
          <div className="w-[95%] md:w-[90%] xl:w-[85%] flex col-center relative">
            <h1 className="first-message font-sans not-italic text-white/20 flex flex-col items-center !leading-[0.85] tracking-tighter md:text-[6.5vw] text-[10vw] font-bold uppercase w-full pb-6 md:pb-10">
              <span className="flex justify-center w-full">
                <span>BEYOND SILENCE!!</span>
              </span>
              <span className="flex justify-center w-full">
                <span>BEYOND SOUND!!</span>
              </span>
            </h1>

            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="msg-text-scroll !border-white z-20 md:scale-110 scale-90 rotate-[-2deg] my-4 md:my-8"
            >
              <div className="bg-[#4a8f4c] md:py-3 py-2 px-10">
                <h2 className="text-white font-sans uppercase font-bold tracking-tight md:text-[3vw] text-4xl">#GETREADY</h2>
              </div>
            </div>

            <h1 className="second-message font-sans not-italic text-white/20 flex flex-col items-center !leading-[0.85] tracking-tighter md:text-[5.8vw] text-[8.5vw] font-bold uppercase w-full pt-6 md:pt-10">
              <span className="flex justify-center w-full whitespace-nowrap">
                <span>EXPERIENCE THE ECHO</span>
              </span>
              <span className="flex justify-center w-full whitespace-nowrap">
                <span>ECHO OF FUTURE ENGINEERS</span>
              </span>
            </h1>
          </div>

          <div className="flex-center mt-16 md:mt-24 z-30">
            <div className="max-w-xl px-10 flex-center overflow-hidden">
              <p className="text-[10px] md:text-xs text-white/80 font-serif italic text-center leading-relaxed font-light px-5">
                "Where tradition meets trend and passion meets the stage. Join us as we turn up the volume on creativity and craft memories that will echo for a lifetime."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
