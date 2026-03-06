import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import EventCard from "../components/Events/EventCard";

gsap.registerPlugin(ScrollTrigger);

export const Events = () => {
  const projects = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      event1: "Mime",
      event2: "Classical Dance",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      event1: "Western Dance",
      event2: "Bollywood Tadka",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      event1: "Oppo",
      event2: "Monoact",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      event1: "Street Cypher",
      event2: "Campus Icon",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      event1: "SRamp Walk",
      event2: "Nukkad Natak",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      event1: "Rock n Roll",
      event2: "Sargam",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      event1: "Madhubani",
      event2: "Calligraphy",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      event1: "Grafiti",
      event2: "Debate",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      event1: "Poetry",
      event2: "Literary Courtroom",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2: "NULL",
      event1: "Fandom Trivia",
      event2: "",
    },
  ];

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
  });

  return (
    <div className="lg:p-4 p-2  bg-[#000000] text-white">
      <div
        className="h-[55vh] flex flex-row-reverse"
        
      >
        <div className=" h-full" style={{
          backgroundImage: "url('/images/events-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          width: "60%",
        }}></div>
        <h2 className="absolute top-75 left-5 lg:text-[9.5vw] align-text-bottom  text-7xl uppercase">
          Events
        </h2>
      </div>
      <div className="lg:mt-20 lol">
        {projects.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="hero w-full lg:h-[80vh] min-h-[100px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2"
            >
              <EventCard
                image1={elem.image1}
                image2={elem.image2}
                event1={elem.event1}
                event2={elem.event2}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
