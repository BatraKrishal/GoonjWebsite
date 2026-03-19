import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import EventCard from "../components/Events/EventCard";
import EventDetailsModal from "../components/Events/EventDetailsModal";
import FooterSection from "../sections/FooterSection";
import NavBar from "../components/NavBar";
import { eventCatalog, eventLookup } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const posterMap = {
  mime: "/images/Events/mime.png",
  "classical-dance": "/images/Events/classicalDance.png",
  "western-dance": "/images/Events/westernDance.png",
  "bollywood-tadka": "/images/Events/bollywoodTadka.png",
  oppo: "/images/Events/oppo.png",
  "mono-act": "/images/Events/monoact.png",
  "street-cypher": "/images/Events/streetCypher.png",
  "campus-icon": "/images/Events/campusIcon.png",
  "ramp-walk": "/images/Events/rampWalk.png",
  "nukkad-natak": "/images/Events/nukkadNatak.png",
  "rock-and-roll": "/images/Events/rockNRoll.png",
  sargam: "/images/Events/sargam.png",
  "madhubani-art": "/images/Events/madhubani.png",
  calligraphy: "/images/Events/calligraphy.png",
  graffiti: "/images/Events/graffiti.png",
  debate: "/images/Events/debate.png",
  poetry: "/images/Events/poetry.png",
  "literary-courtroom": "/images/Events/literaryCourtroom.png",
  "fandom-trivia": "/images/Events/fandomTrivia.png",
};

const pairOrder = [
  ["mime", "classical-dance"],
  ["western-dance", "bollywood-tadka"],
  ["oppo", "mono-act"],
  ["street-cypher", "campus-icon"],
  ["ramp-walk", "nukkad-natak"],
  ["rock-and-roll", "sargam"],
  ["madhubani-art", "calligraphy"],
  ["graffiti", "debate"],
  ["poetry", "literary-courtroom"],
  ["fandom-trivia", null],
];

const Events = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeEvent, setActiveEvent] = useState(null);
  const focusedSlug = searchParams.get("event");

  const eventsBySlug = useMemo(
    () =>
      Object.fromEntries(
        eventCatalog.map((event) => [event.slug, { ...event, poster: posterMap[event.slug] }]),
      ),
    [],
  );

  const projects = useMemo(
    () =>
      pairOrder.map(([leftSlug, rightSlug]) => ({
        leftEvent: eventsBySlug[leftSlug] ?? null,
        rightEvent: rightSlug ? eventsBySlug[rightSlug] ?? null : null,
      })),
    [eventsBySlug],
  );

  useGSAP(() => {
    gsap.fromTo(
      ".hero",
      { height: 100 },
      {
        height: "80vh",
        stagger: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: ".lol",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      },
    );
  }, [projects.length]);

  useEffect(() => {
    if (!focusedSlug) {
      return;
    }

    const matchedEvent = eventLookup[focusedSlug];
    if (!matchedEvent) {
      return;
    }

    const currentCard = document.getElementById(`event-${matchedEvent.slug}`);
    if (currentCard) {
      currentCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [focusedSlug]);

  const handleOpen = (event) => {
    setActiveEvent(event);
    setSearchParams({ event: event.slug });
  };

  const handleClose = () => {
    setActiveEvent(null);
  };

  return (
    <div>
      <NavBar />
      <div className="bg-[#000000] p-2 text-white lg:p-4">
        <div className="h-[55vh] flex flex-row-reverse">
          <div
            className="h-full"
            style={{
              backgroundImage: "url('/images/events-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "top",
              width: "60%",
            }}
          ></div>
          <h2 className="absolute top-75 left-5 text-7xl uppercase align-text-bottom lg:text-[9.5vw]">
            Events
          </h2>
        </div>
        <div className="lol lg:mt-20">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="hero mb-4 flex min-h-[100px] w-full flex-col gap-2 lg:h-[80vh] lg:flex-row lg:gap-4"
            >
              <EventCard
                leftEvent={project.leftEvent}
                rightEvent={project.rightEvent}
                activeSlug={focusedSlug}
                onOpen={handleOpen}
              />
            </div>
          ))}
        </div>
      </div>
      <EventDetailsModal event={activeEvent} onClose={handleClose} />
      <FooterSection />
    </div>
  );
};

export default Events;