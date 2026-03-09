import React from 'react'
import HeroSection from '../sections/HeroSection'
import NavBar from '../components/NavBar'
import MessageSection from '../sections/MessageSection'
import NutritionSection from '../sections/NutritionSection'
import FlavorSection from '../sections/FlavorSection'
import BenefitSection from '../sections/BenefitSection'
import TestimonialSection from '../sections/TestimonialSection'
import FooterSection from '../sections/FooterSection'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export const Home = () => {
   useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <NavBar />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section id="home">
            <HeroSection />
          </section>
          <section id="message">
            <MessageSection />
          </section>
          <section id="flavors">
            <FlavorSection />
          </section>
          <section id="nutrition">
            <NutritionSection />
          </section>

          <div id="benefits">
            <BenefitSection />
            <TestimonialSection />
          </div>

          <FooterSection />
        </div>
      </div>
    </main>
  )
}
