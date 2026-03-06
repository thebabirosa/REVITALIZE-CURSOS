import React from 'react';
import { Section } from '../types';
import Button from './Button';
import { Check, Calendar, MapPin, Phone, AlertCircle } from 'lucide-react';

interface PricingSectionProps {
  data: Section;
}

const PricingSection: React.FC<PricingSectionProps> = ({ data }) => {
  return (
    <section id={data.id} className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-4xl mx-auto bg-background rounded-3xl overflow-hidden shadow-2xl border border-border">
          <div className="grid md:grid-cols-5 h-full">
            
            {/* Left/Top Info */}
            <div className="md:col-span-3 p-8 md:p-12 space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl text-primary">{data.title}</h2>
              
              <ul className="space-y-4">
                {data.includes?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-accent flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-text/80">{item}</span>
                  </li>
                ))}
              </ul>

              {data.scarcity && (
                <div className="bg-red-50 border border-red-100 p-4 rounded-xl flex gap-3">
                  <AlertCircle className="text-red-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-800 text-sm">{data.scarcity.title}</p>
                    <p className="text-red-700 text-sm mt-1">{data.scarcity.text}</p>
                  </div>
                </div>
              )}
              
              {/* Event Details */}
              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted">
                    <MapPin size={16} />
                    <span>{data.secondaryInfo?.[0].split(':')[1]}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted">
                    <Calendar size={16} />
                    <span>{data.secondaryInfo?.[1].split(':')[1]}</span>
                </div>
              </div>

            </div>

            {/* Right/Bottom Pricing */}
            <div className="md:col-span-2 bg-primary text-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
               {/* Decorative Circle */}
               <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>

               <div className="relative z-10">
                 <div className="mb-8">
                   <p className="text-white/60 text-sm uppercase tracking-wider mb-2">{data.price?.cashLabel}</p>
                   <p className="font-serif text-4xl md:text-5xl text-accent">{data.price?.cashValue}</p>
                 </div>
                 
                 <div className="mb-10">
                   <p className="text-white/60 text-sm uppercase tracking-wider mb-1">{data.price?.installmentsLabel}</p>
                   <p className="text-lg md:text-xl font-medium">{data.price?.installmentsValue}</p>
                 </div>

                 {data.primaryCta && (
                   <Button 
                    label={data.primaryCta.label} 
                    href={data.primaryCta.href} 
                    variant="primary" 
                    className="w-full !bg-white !text-primary hover:!bg-accent hover:!text-white border-none"
                   />
                 )}
                 <p className="text-center text-xs text-white/40 mt-4">Pagamento 100% seguro</p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;