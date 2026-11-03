import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'neutral';
  size?: 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  // Utilizing Tailwind v4 classes mapped directly from our @theme variables
  const baseClasses = "rounded-lg border-none cursor-pointer font-medium font-inherit inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeClasses: Record<'md' | 'lg', string> = {
    md: "py-3 px-6 text-md",
    lg: "py-4 px-8 text-lg"
  };
  
  const variantClasses: Record<'primary' | 'neutral', string> = {
    // bg-brand-main comes from the consumer's configuration of the brand color
    primary: "bg-brand-main text-white hover:opacity-90 focus:ring-brand-main",
    neutral: "bg-neutral-100 text-neutral-900 hover:bg-neutral-500 hover:text-white focus:ring-neutral-500"
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};