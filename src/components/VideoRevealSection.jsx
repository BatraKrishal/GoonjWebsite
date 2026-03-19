import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoRevealSection = () => {
  const sectionRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
        },
      });

      tl.fromTo(
        ".video-mask",
        { clipPath: "circle(8% at 50% 50%)" },
        { clipPath: "circle(100% at 50% 50%)", ease: "power2.out" },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      style={{
        height: "200vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          className="video-mask"
          style={{
            width: "100%",
            height: "100%",
            clipPath: "circle(8% at 50% 50%)",
            position: "relative",
          }}
        >
          <video
            src="/videos/pin-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* PLAY CIRCLE OVERLAY */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <img
              src="/images/circle-text.svg"
              alt="circle text"
              className="spin-circle"
              style={{
                position: "absolute",
                width: "120px",
              }}
            />

            <div
              style={{
                width: "60px",
                height: "60px",
                background: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/play.svg"
                alt="play"
                style={{
                  width: "20px",
                  marginLeft: "4px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoRevealSection;
