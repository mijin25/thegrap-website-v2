import HeroSection from '@/components/HeroSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import FeaturedWorkSection from '@/components/FeaturedWorkSection';
import ServicesSection from '@/components/ServicesSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <main>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <WhatWeDoSection />
      </section>
      <section id="work">
        <FeaturedWorkSection />
      </section>
      <section id="designers">
        <ServicesSection />
      </section>
      <section id="contact">
        <FooterSection />
      </section>
    </main>
  );
}