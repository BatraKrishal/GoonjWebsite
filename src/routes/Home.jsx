import React from 'react'
import HeroSection from '../sections/HeroSection'
import NavBar from '../components/NavBar'
import MessageSection from '../sections/MessageSection'
import NutritionSection from '../sections/NutritionSection'
import FlavorSection from '../sections/FlavorSection'
import BenefitSection from '../sections/BenefitSection'
import TestimonialSection from '../sections/TestimonialSection'
import FooterSection from '../sections/FooterSection'

export const Home = () => {
  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />

          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>

          <FooterSection />
        </div>
      </div>
    </main>
  )
}
