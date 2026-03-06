import React from 'react';
import { Section } from '../types';
import Button from './Button';
import { CheckCircle2, Star } from 'lucide-react';

interface HeroSectionProps {
  data: Section;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <section id={data.id} className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="inline-block px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-xs font-semibold tracking-wider uppercase text-primary mb-2">
              {data.badge}
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-primary">
              {data.title}
            </h1>
            
            <p className="text-xl text-muted font-serif italic">
              {data.subtitle}
            </p>
            
            <p className="text-base md:text-lg text-text/80 leading-relaxed max-w-xl">
              {data.description}
            </p>

            <div className="space-y-3">
              {data.highlights?.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent min-w-[20px]" size={20} />
                  <span className="text-sm md:text-base text-text/90 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {data.primaryCta && (
                <Button label={data.primaryCta.label} href={data.primaryCta.href} variant="primary" />
              )}
              {data.secondaryCta && (
                <Button label={data.secondaryCta.label} href={data.secondaryCta.href} variant="secondary" icon={false} />
              )}
            </div>

            <div className="pt-6 border-t border-border flex flex-wrap gap-x-6 gap-y-2">
              {data.trust?.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-muted uppercase tracking-wide font-medium">
                  <Star className="text-accent fill-accent" size={12} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 relative">
             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-[3/4]">
                <img 
                  src={data.image?.src} 
                  alt={data.image?.alt} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
             </div>
             {/* Decorative Background Element */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-0"></div>
             <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white rounded-full blur-2xl -z-0 mix-blend-overlay"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;