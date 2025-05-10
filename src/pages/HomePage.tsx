import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCategories from '../components/ProductCategories';
import Gallery from '../components/Gallery';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import WhatsAppButton from '../components/WhatsAppButton';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProductCategories />
      <Gallery />
      <ContactSection />
      <WhatsAppButton />
    </main>
  );
};

export default HomePage;