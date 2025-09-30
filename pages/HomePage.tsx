import React from 'react';
import { HeroSlider } from "../components/HeroSlider";
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { TurkeyMapSection } from "../components/TurkeyMapSection";
import { CorporateSection } from "../components/CorporateSection";
import { FAQSection } from "../components/FAQSection";

export function HomePage() {
  return (
    <main>
      <div id="hero">
        <HeroSlider />
      </div>
      <div id="hizmetler">
        <ServicesSection />
      </div>
      <div id="hakkimizda">
        <AboutSection />
      </div>
      <div id="kullanicilar">
        <TurkeyMapSection />
      </div>
      <div id="kurumsal">
        <CorporateSection />
      </div>
      <div id="sss">
        <FAQSection />
      </div>
    </main>
  );
}