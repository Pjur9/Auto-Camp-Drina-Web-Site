import React from 'react';

export const SectionTitle = ({ title, subtitle, centered = true, className = '' }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      
      <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 font-['Montserrat'] uppercase tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className={`text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      <div className={`h-1 w-24 bg-secondary mt-4 rounded-full ${centered ? 'mx-auto' : ''}`} />
      
    </div>
  );
};