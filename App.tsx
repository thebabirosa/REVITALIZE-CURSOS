import React from 'react';
import { CONTENT } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import BulletsSection from './components/BulletsSection';
import CardsSection from './components/CardsSection';
import GallerySection from './components/GallerySection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';

function App() {
  const { header, sections, footer } = CONTENT;

  const renderSection = (section: typeof sections[0], index: number) => {
    switch (section.type) {
      case 'hero':
        return <HeroSection key={section.id} data={section} />;
      case 'story':
        return <StorySection key={section.id} data={section} />;
      case 'bullets':
        // Reuse BulletsSection for both "For Who" and "Deliverables"
        // If it's the deliverables section, we might want a different style (e.g., dark mode)
        const isDark = section.id === 'deliverables';
        return <BulletsSection key={section.id} data={section} isDark={isDark} />;
      case 'cards':
        return <CardsSection key={section.id} data={section} />;
      case 'gallery':
        return <GallerySection key={section.id} data={section} />;
      case 'pricing':
        return <PricingSection key={section.id} data={section} />;
      case 'faq':
        return <FAQSection key={section.id} data={section} />;
      case 'cta':
        return <FinalCTA key={section.id} data={section} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header data={header} />
      
      <main className="flex-grow">
        {sections.map((section, index) => renderSection(section, index))}
      </main>

      <Footer data={footer} />
    </div>
  );
}

export default App;