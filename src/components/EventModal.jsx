import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ScrollSmoother } from "gsap/all";
import { Link } from "react-router-dom";
import { slugifyEventName } from "../constants";

const EventModal = ({ flavor, onClose }) => {
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  useEffect(() => {
    if (!flavor) {
      return;
    }

    setActiveEventIndex(0);
  }, [flavor]);

  useEffect(() => {
    if (!flavor) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const smoother = ScrollSmoother.get();
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    smoother?.paused(true);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      smoother?.paused(false);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [flavor, onClose]);

  if (!flavor || typeof document === "undefined") {
    return null;
  }

  const activeEvent = flavor.events[activeEventIndex] ?? flavor.events[0];

  return createPortal(
    <div className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto p-4 md:p-8">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-[6px]"
        onClick={onClose}
      />

      <div
        aria-labelledby="event-modal-title"
        aria-modal="true"
        role="dialog"
        className="relative z-10 w-full max-w-6xl overflow-hidden rounded-[2rem] border border-[#a26833]/30 bg-[#faeade] shadow-[0_32px_90px_rgba(0,0,0,0.35)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[320px] lg:min-h-[620px]">
            <img
              src={`/images/${flavor.color}.png`}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/50 to-[#7f3b2d]/80" />

            <div className="absolute left-6 top-6 rotate-[-3deg] border-[3px] border-[#faeade] md:left-8 md:top-8">
              <div className="bg-[#871B1A] px-4 pb-3 pt-2 md:px-5">
                <p className="font-paragraph text-[0.65rem] uppercase tracking-[0.35em] text-[#faeade]/70">
                  Category
                </p>
                <p className="mt-1 text-2xl uppercase leading-none text-[#faeade] md:text-3xl">
                  {flavor.name}
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="font-paragraph text-[0.7rem] uppercase tracking-[0.35em] text-[#faeade]/70">
                Lineup / {flavor.events.length} events
              </p>
              <h2
                id="event-modal-title"
                className="mt-3 max-w-md text-4xl uppercase leading-none text-white md:text-6xl"
              >
                {activeEvent}
              </h2>
              <p className="mt-4 max-w-lg font-paragraph text-sm leading-relaxed text-[#faeade]/85 md:text-base">
                {flavor.summary}
              </p>
            </div>
          </div>

          <div className="relative flex min-h-[360px] flex-col bg-[#faeade] p-6 md:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="font-paragraph text-[0.65rem] uppercase tracking-[0.35em] text-[#a26833]">
                  Explore
                </p>
                <h3 className="mt-2 text-3xl uppercase leading-none text-[#523122] md:text-4xl">
                  {flavor.name} events
                </h3>
              </div>

              <button
                type="button"
                aria-label={`Close ${flavor.name} modal`}
                className="flex size-12 items-center justify-center rounded-full border border-[#523122]/20 bg-white/70 text-2xl text-[#523122] transition-colors duration-300 hover:bg-[#523122] hover:text-[#faeade]"
                onClick={onClose}
              >
                ×
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto pr-1">
              {flavor.events.map((eventName, index) => {
                const isActive = index === activeEventIndex;

                return (
                  <div
                    key={eventName}
                    className={`flex w-full items-center justify-between gap-4 rounded-[1.5rem] border px-4 py-4 text-left transition-all duration-300 md:px-5 ${
                      isActive
                        ? "border-[#523122] bg-[#523122] text-[#faeade] shadow-[0_16px_40px_rgba(82,49,34,0.18)]"
                        : "border-[#a26833]/20 bg-white/70 text-[#523122] hover:border-[#523122]/40 hover:bg-[#f4dfcf]"
                    }`}
                  >
                    <span>
                      <button
                        type="button"
                        className="text-left"
                        onFocus={() => setActiveEventIndex(index)}
                        onMouseEnter={() => setActiveEventIndex(index)}
                        onClick={() => setActiveEventIndex(index)}
                      >
                        <span
                        className={`font-paragraph text-[0.65rem] uppercase tracking-[0.35em] ${
                          isActive ? "text-[#faeade]/60" : "text-[#a26833]"
                        }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="mt-2 block text-2xl uppercase leading-none md:text-3xl">
                          {eventName}
                        </span>
                      </button>
                    </span>

                    <Link
                      to={`/events?event=${slugifyEventName(eventName)}`}
                      onClick={onClose}
                      aria-label={`Open ${eventName} on events page`}
                      className={`flex size-10 items-center justify-center rounded-full border text-lg transition-transform duration-300 ${
                        isActive
                          ? "border-[#faeade]/40"
                          : "border-[#523122]/20"
                      }`}
                    >
                      ↗
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-[#a26833]/20 bg-white/70 p-5">
              <p className="font-paragraph text-[0.65rem] uppercase tracking-[0.35em] text-[#a26833]">
                Spotlight
              </p>
              <p className="mt-3 text-3xl uppercase leading-none text-[#523122]">
                {activeEvent}
              </p>
              <p className="mt-3 font-paragraph text-sm leading-relaxed text-[#7f3b2d]">
                Hover across the lineup to preview each event inside the{" "}
                {flavor.name} category.
              </p>
              <Link
                to={`/events?event=${slugifyEventName(activeEvent)}`}
                onClick={onClose}
                className="mt-4 inline-flex rounded-full border border-[#523122]/20 px-4 py-2 text-[0.72rem] uppercase tracking-[0.25em] text-[#523122] transition-colors hover:bg-[#523122] hover:text-[#faeade]"
              >
                View full rules
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default EventModal;
