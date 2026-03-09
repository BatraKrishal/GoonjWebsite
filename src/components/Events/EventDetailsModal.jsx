import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ScrollSmoother } from "gsap/all";

const EventDetailsModal = ({ event, onClose }) => {
  useEffect(() => {
    if (!event) {
      return undefined;
    }

    const handleKeyDown = (currentEvent) => {
      if (currentEvent.key === "Escape") {
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
  }, [event, onClose]);

  if (!event || typeof document === "undefined") {
    return null;
  }

  const detailItems = [
    event.schedule.date ? { label: "Date", value: event.schedule.date } : null,
    event.schedule.timing
      ? { label: "Timing", value: event.schedule.timing }
      : null,
    event.schedule.venue ? { label: "Venue", value: event.schedule.venue } : null,
  ].filter(Boolean);

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto p-4 md:p-8">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-[8px]"
        onClick={onClose}
      />

      <div
        aria-labelledby="event-details-title"
        aria-modal="true"
        role="dialog"
        className="relative z-10 w-full max-w-7xl overflow-hidden rounded-[2rem] border border-[#a26833]/25 bg-[#faeade] shadow-[0_36px_100px_rgba(0,0,0,0.4)]"
        onClick={(currentEvent) => currentEvent.stopPropagation()}
      >
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[380px] lg:min-h-[780px]">
            <img
              src={`/images/${event.color}.png`}
              alt={event.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/55 to-[#7f3b2d]/85" />

            <div className="absolute left-6 top-6 rotate-[-3deg] border-[3px] border-[#faeade] md:left-8 md:top-8">
              <div className="bg-[#871B1A] px-4 pb-3 pt-2 md:px-5">
                <p className="font-paragraph text-[0.65rem] uppercase tracking-[0.35em] text-[#faeade]/70">
                  Category
                </p>
                <p className="mt-1 text-2xl uppercase leading-none text-[#faeade] md:text-3xl">
                  {event.category}
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="font-paragraph text-[0.7rem] uppercase tracking-[0.35em] text-[#faeade]/70">
                Rulebook event
              </p>
              <h2
                id="event-details-title"
                className="mt-3 max-w-lg text-4xl uppercase leading-none text-white md:text-6xl"
              >
                {event.name}
              </h2>
              <p className="mt-4 max-w-xl font-paragraph text-sm leading-relaxed text-[#faeade]/85 md:text-base">
                {event.description}
              </p>

              {detailItems.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {detailItems.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm"
                    >
                      <p className="font-paragraph text-[0.6rem] uppercase tracking-[0.32em] text-white/60">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="relative max-h-[85vh] overflow-y-auto bg-[#faeade] p-6 md:p-8">
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="font-paragraph text-[0.65rem] uppercase tracking-[0.35em] text-[#a26833]">
                  Full details
                </p>
                <h3 className="mt-2 text-3xl uppercase leading-none text-[#523122] md:text-4xl">
                  {event.name}
                </h3>
                <p className="mt-3 max-w-xl font-paragraph text-sm leading-relaxed text-[#7f3b2d] md:text-base">
                  {event.summary}
                </p>
              </div>

              <button
                type="button"
                aria-label={`Close ${event.name} modal`}
                className="flex size-12 items-center justify-center rounded-full border border-[#523122]/20 bg-white/70 text-2xl text-[#523122] transition-colors duration-300 hover:bg-[#523122] hover:text-[#faeade]"
                onClick={onClose}
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <section className="rounded-[1.5rem] border border-[#a26833]/20 bg-white/65 p-5">
                <p className="font-paragraph text-[0.65rem] uppercase tracking-[0.35em] text-[#a26833]">
                  Overview
                </p>
                <p className="mt-3 font-paragraph text-base leading-7 text-[#523122]">
                  {event.description}
                </p>
              </section>

              <section className="rounded-[1.5rem] border border-[#a26833]/20 bg-white/65 p-5">
                <p className="font-paragraph text-[0.65rem] uppercase tracking-[0.35em] text-[#a26833]">
                  Guidelines
                </p>
                <div className="mt-4 space-y-3">
                  {event.guidelines.map((rule) => (
                    <div key={rule} className="flex gap-3">
                      <span className="mt-2 block h-2.5 w-2.5 shrink-0 rounded-full bg-[#871B1A]" />
                      <p className="font-paragraph text-sm leading-7 text-[#523122] md:text-base">
                        {rule}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.5rem] border border-[#a26833]/20 bg-white/65 p-5">
                <p className="font-paragraph text-[0.65rem] uppercase tracking-[0.35em] text-[#a26833]">
                  Judging criteria
                </p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {event.judgingCriteria.map((criterion) => (
                    <div
                      key={criterion}
                      className="rounded-[1.25rem] border border-[#a26833]/15 bg-[#fff7ef] p-4"
                    >
                      <p className="font-paragraph text-sm leading-6 text-[#523122] md:text-base">
                        {criterion}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {event.notes.length > 0 && (
                <section className="rounded-[1.5rem] border border-[#a26833]/20 bg-[#523122] p-5 text-[#faeade]">
                  <p className="font-paragraph text-[0.65rem] uppercase tracking-[0.35em] text-[#ffcc70]">
                    Extra notes
                  </p>
                  <div className="mt-4 space-y-3">
                    {event.notes.map((note) => (
                      <p
                        key={note}
                        className="font-paragraph text-sm leading-7 text-[#faeade]/88 md:text-base"
                      >
                        {note}
                      </p>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default EventDetailsModal;
