import React, { useRef } from 'react';
import { Section } from '../types';
import Button from './Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GallerySectionProps {
  data: Section;
}

const GallerySection: React.FC<GallerySectionProps> = ({ data }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.75; // Scroll 75% of view to see next items
      const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id={data.id} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">{data.title}</h2>
          <p className="text-muted max-w-2xl mx-auto">{data.subtitle}</p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons (Desktop) */}
          <button 
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm items-center justify-center rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 border border-border"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm items-center justify-center rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 border border-border"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {data.images?.map((img, idx) => (
              <div 
                key={idx} 
                className="flex-none w-[260px] md:w-[320px] aspect-[9/16] snap-center rounded-2xl overflow-hidden shadow-lg border border-border/50 relative group bg-white"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Optional overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-2">
          {data.cta && <Button label={data.cta.label} href={data.cta.href} variant="outline" />}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;