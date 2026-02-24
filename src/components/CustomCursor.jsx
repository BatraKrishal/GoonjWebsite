import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        // Quick setter for high performance following GSAP best practices
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });

        const onMouseMove = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        window.addEventListener("mousemove", onMouseMove);

        // Setup MutationObserver to attach hovers even if components load late
        const setupMagneticTargets = () => {
            const magneticTargets = document.querySelectorAll(".magnetic-target");

            const onMouseEnter = () => {
                gsap.to(cursor, { scale: 3.5, backgroundColor: "transparent", border: "1px solid white", duration: 0.3, ease: "back.out(2)" });
            };

            const onMouseLeave = () => {
                gsap.to(cursor, { scale: 1, backgroundColor: "white", border: "0px solid white", duration: 0.3, ease: "power2.out" });
            };

            // Clean up previous listeners to prevent duplicates
            magneticTargets.forEach((target) => {
                target.removeEventListener("mouseenter", onMouseEnter);
                target.removeEventListener("mouseleave", onMouseLeave);
                target.addEventListener("mouseenter", onMouseEnter);
                target.addEventListener("mouseleave", onMouseLeave);
            });

            return { magneticTargets, onMouseEnter, onMouseLeave };
        };

        let { magneticTargets, onMouseEnter, onMouseLeave } = setupMagneticTargets();

        // Re-run setup when DOM changes (like ScrollSmoother creating wrapper)
        const observer = new MutationObserver(() => {
            const res = setupMagneticTargets();
            magneticTargets = res.magneticTargets;
            onMouseEnter = res.onMouseEnter;
            onMouseLeave = res.onMouseLeave;
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            observer.disconnect();
            magneticTargets.forEach((target) => {
                target.removeEventListener("mouseenter", onMouseEnter);
                target.removeEventListener("mouseleave", onMouseLeave);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hw-accel hidden md:block"
        ></div>
    );
};

export default CustomCursor;
