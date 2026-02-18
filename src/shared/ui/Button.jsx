import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  icon: Icon = null,
  type = 'button',
  disabled = false
}) => {
  
  const baseStyle = "px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 active:scale-95 active:translate-y-0 inline-flex items-center justify-center gap-2 cursor-pointer shadow-md text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover shadow-orange-500/30 border border-transparent focus:ring-accent",
    secondary: "bg-white text-accent border-2 border-accent hover:bg-accent-hover hover:text-white focus:ring-accent",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-dark focus:ring-white",
    ghost: "bg-transparent text-accent hover:bg-accent-dark focus:ring-accent-dark"
  };

  const variantStyle = variants[variant] || variants.primary;

  return (
    <button 
      type={type}
      onClick={disabled ? undefined : onClick} 
      className={`${baseStyle} ${variantStyle} ${className}`}
      disabled={disabled}
    >
      {children}
      {Icon && <Icon size={18} aria-hidden="true" className="shrink-0" />}
    </button>
  );
};