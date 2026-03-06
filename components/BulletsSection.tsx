import React from 'react';
import { Section } from '../types';
import { Check } from 'lucide-react';

interface BulletsSectionProps {
  data: Section;
  isDark?: boolean;
}

const BulletsSection: React.FC<BulletsSectionProps> = ({ data, isDark = false }) => {
  return (
    <section id={data.id} className={`py-20 ${isDark ? 'bg-primary text-white' : 'bg-background text-primary'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="md:w-1/3">
             <h2 className={`font-serif text-3xl md:text-4xl mb-6 ${isDark ? 'text-white' : 'text-primary'}`}>
               {data.title}
             </h2>
             {data.disclaimer && (
               <p className={`text-sm ${isDark ? 'text-white/60' : 'text-muted'}`}>
                 *{data.disclaimer}
               </p>
             )}
          </div>

          <div className="md:w-2/3">
            <div className="grid gap-6">
              {(data.items as string[])?.map((item, idx) => (
                <div key={idx} className={`flex gap-4 p-6 rounded-xl transition-all ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white shadow-sm hover:shadow-md'}`}>
                  <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${isDark ? 'bg-accent text-primary' : 'bg-accent/20 text-accent'}`}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <p className={`text-lg ${isDark ? 'text-white/90' : 'text-text'}`}>{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BulletsSection;