import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

const HeroSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    // 1. Staggered Burst Reveal
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars, words",
    });

    const bodySplit = SplitText.create(".hero-desc", {
      type: "lines",
    });

    gsap.set([titleSplit.chars, bodySplit.lines, ".hero-subtitle", ".hero-button"], {
      yPercent: 120,
      opacity: 0,
      rotateX: -40,
    });

    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(titleSplit.chars, {
      yPercent: 0,
      opacity: 1,
      rotateX: 0,
      stagger: 0.04,
      duration: 1.2,
      ease: "power4.out",
    })
      .to(".hero-subtitle", {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        ease: "expo.out",
      }, "-=0.8")
      .to(bodySplit.lines, {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      }, "-=0.6")
      .to(".hero-button", {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        ease: "back.out(1.7)",
      }, "-=0.6");

    // 2. Scroll Parallax tied to ScrollSmoother
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTl.to(".hero-content", {
      yPercent: 40,
      opacity: 0,
      scale: 0.95,
      ease: "none",
    });

    // 3. Mousemove Tilt Effect (Awwwards staple)
    if (!isTablet && containerRef.current && contentRef.current) {
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        // Calculate normalized coordinates (-1 to 1)
        const x = (clientX / innerWidth) * 2 - 1;
        const y = (clientY / innerHeight) * 2 - 1;

        gsap.to(contentRef.current, {
          x: x * -20, // Reverse movement for parallax depth
          y: y * -20,
          rotationY: x * 5,
          rotationX: y * -5,
          ease: "power3.out",
          duration: 1,
        });
      };

      containerRef.current.addEventListener('mousemove', handleMouseMove);

      const handleMouseLeave = () => {
        gsap.to(contentRef.current, {
          x: 0, y: 0, rotationY: 0, rotationX: 0,
          ease: "power3.out",
          duration: 1.5,
        });
      };

      containerRef.current.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        containerRef.current?.removeEventListener('mousemove', handleMouseMove);
        containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, { scope: containerRef });

  return (
    <section className="bg-main-bg relative" ref={containerRef}>
      <div className="hero-container">
        {/* Background Visualizer (Mesh overlay is in CSS) */}
        {!isTablet && (
          <video
            src="/videos/tech-flow.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-10 hw-accel"
          />
        )}

        <div className="hero-content perspective-[1200px]" >
          <div className="hero-title-box transform-style-3d" ref={contentRef}>
            <p className="hero-subtitle">Tradition Engineered</p>

            <div className="overflow-hidden mb-6">
              <h1 className="hero-title" ref={titleRef}>NexGen Raga</h1>
            </div>

            <div className="overflow-hidden">
              <h2 className="hero-desc">
                Merging the timeless soul of authentic Indian heritage <br className="hidden md:block" />
                with the precision of futuristic engineering.
              </h2>
            </div>

            <div className="magnetic-target">
              <button className="hero-button">
                Explore the Future
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
