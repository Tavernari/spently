
import React from 'react';

interface CallToActionButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'normal' | 'large';
  target?: string;
  rel?: string;
}

const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  href,
  children,
  className = '',
  variant = 'primary',
  size = 'normal',
  target = '_blank',
  rel = 'noopener noreferrer'
}) => {
  const baseStyles = "font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-colors duration-300 ease-in-out";
  
  const variantStyles = {
    primary: "bg-neutral-darker text-white hover:bg-primary-dark focus:ring-primary",
    secondary: "bg-neutral-darker text-white hover:bg-slate-800 focus:ring-neutral-darker"
  };

  const sizeStyles = {
    normal: "px-6 py-3 text-lg",
    large: "px-8 py-4 text-xl"
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </a>
  );
};

export default CallToActionButton;
