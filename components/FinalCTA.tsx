import React from 'react';
import { Section } from '../types';
import Button from './Button';

interface FinalCTAProps {
  data: Section;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ data }) => {
  return (
    <section id={data.id} className="py-24 bg-primary text-white text-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            {data.title}
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-light">
            {data.subtitle}
          </p>
          
          <div className="pt-8">
            {data.cta && (
              <Button 
                label={data.cta.label} 
                href={data.cta.href} 
                variant="primary" 
                className="!bg-white !text-primary hover:!bg-accent hover:!text-white shadow-xl"
              />
            )}
          </div>
          
          <p className="text-sm text-white/50 tracking-wide uppercase font-medium">
            {data.microcopy}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;