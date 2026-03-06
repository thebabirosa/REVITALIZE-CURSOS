import React, { useState } from 'react';
import { Section } from '../types';
import { Plus, Minus } from 'lucide-react';

interface FAQSectionProps {
  data: Section;
}

interface FAQItemProps {
  q: string;
  a: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button 
        className="w-full flex items-center justify-between py-6 text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-medium pr-8 transition-colors ${isOpen ? 'text-accent' : 'text-primary'}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
           {isOpen ? <Minus className="text-accent" /> : <Plus className="text-muted group-hover:text-primary" />}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-muted leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
};

const FAQSection: React.FC<FAQSectionProps> = ({ data }) => {
  return (
    <section id={data.id} className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-primary mb-12">
          {data.title}
        </h2>
        
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-border/50">
          {(data.items as {q: string, a: string}[])?.map((item, idx) => (
            <FAQItem key={idx} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;