import React from 'react';
import { Section } from '../types';
import { Quote } from 'lucide-react';

interface StorySectionProps {
  data: Section;
}

const StorySection: React.FC<StorySectionProps> = ({ data }) => {
  return (
    <section id={data.id} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <Quote className="text-accent/40 mx-auto mb-6" size={48} />
          
          <h2 className="font-serif text-3xl md:text-4xl text-center text-primary mb-10 leading-tight">
            {data.title}
          </h2>

          <div className="space-y-6 text-lg text-muted leading-relaxed font-light">
            {(data.content as string[])?.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 p-8 bg-background rounded-xl border-l-4 border-accent">
             <p className="font-serif italic text-xl text-primary font-medium text-center">
               "{data.note}"
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;