import React from 'react';
import { PageContent } from '../types';

interface FooterProps {
  data: PageContent['footer'];
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-serif font-semibold text-lg text-primary">
          {data.brand}
        </span>
        
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted">
          {data.legal.map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;