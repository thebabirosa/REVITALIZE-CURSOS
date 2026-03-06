import React from 'react';
import { Section } from '../types';
import { Box, BookOpen, UserCheck, Coffee, Sparkles } from 'lucide-react';

interface CardsSectionProps {
  data: Section;
}

// Helper to map generic titles to icons
const getIcon = (title: string) => {
  const lower = title.toLowerCase();
  if (lower.includes('técnica')) return <Sparkles />;
  if (lower.includes('kit')) return <Box />;
  if (lower.includes('apostila')) return <BookOpen />;
  if (lower.includes('suporte')) return <UserCheck />;
  if (lower.includes('coffee')) return <Coffee />;
  return <Sparkles />;
};

const CardsSection: React.FC<CardsSectionProps> = ({ data }) => {
  return (
    <section id={data.id} className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-primary mb-6">{data.title}</h2>
          <p className="text-xl text-muted font-light">{data.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.cards?.map((card, idx) => (
            <div key={idx} className="group p-8 rounded-[20px] bg-background hover:bg-white border border-transparent hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {getIcon(card.title)}
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-primary">{card.title}</h3>
              <p className="text-muted leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;