import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

const MessageSection = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const firstMsgSplit = new SplitText(".first-message", {
        type: "words",
      });
      const secMsgSplit = new SplitText(".second-message", {
        type: "words",
      });
      const paragraphSplit = new SplitText("p", {
        type: "words, lines",
        linesClass: "paragraph-line",
      });

      gsap.to(firstMsgSplit.words, {
        color: "#523122",
        ease: "power1.in",
        stagger: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "30% center",
          scrub: true,
        },
      });

      gsap.to(secMsgSplit.words, {
        color: "#523122",
        ease: "power1.in",
        stagger: 1,
        scrollTrigger: {
          trigger: ".second-message",
          start: "top center",
          end: "top 40%",
          scrub: true,
        },
      });

      gsap.to(".msg-text-scroll", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.inOut",
        delay: 0.5,
        scrollTrigger: {
          trigger: ".msg-text-scroll",
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
        scrollTrigger: {
          trigger: "p",
          start: "top center",
        },
      });

      return () => {
        firstMsgSplit.revert();
        secMsgSplit.revert();
        paragraphSplit.revert();
      };
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="message-content bg-[url('/images/message-bg.png')]  bg-cover bg-top"
    >
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">BEYOND SILENCE!! BEYOND SOUND!!</h1>

            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="msg-text-scroll inline-block bg-white p-[2px] "
            >
              <div className="bg-[#2D6A40] md:pb-5 pb-3 px-5">
                <h2 className="text-[#FFFFFF]">#Get Ready</h2>
              </div>
            </div>

            <h1 className="second-message">
              EXPERIENCE THE ECHO OF FUTURE ENGINEERS
            </h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10  text-white flex-center overflow-hidden">
              <p>
                "Where tradition meets trend and passion meets the stage. Join
                us as we turn up the volume on creativity and craft memories
                that will echo for a lifetime."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
