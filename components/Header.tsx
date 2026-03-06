import React, { useState, useEffect } from 'react';
import { PageContent } from '../types';

interface HeaderProps {
  data: PageContent['header'];
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="font-serif font-semibold text-lg md:text-xl tracking-tight text-primary">
          {data.brand.logoText}
        </a>
        
        <div className="hidden md:block">
           <a 
            href={data.cta.href} 
            className="text-xs font-semibold tracking-wide uppercase px-5 py-2.5 border border-primary rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            {data.cta.label}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;