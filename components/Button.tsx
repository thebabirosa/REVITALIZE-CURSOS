import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, href, variant = 'primary', className = '', icon = true }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[14px] font-medium transition-all duration-300 transform active:scale-95 text-sm md:text-base";
  
  const variants = {
    primary: "bg-primary text-white shadow-lg hover:shadow-xl hover:bg-black",
    secondary: "bg-white text-primary border border-border hover:border-accent hover:text-accent shadow-sm",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <a 
      href={href} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
      {icon && <ArrowRight size={18} />}
    </a>
  );
};

export default Button;