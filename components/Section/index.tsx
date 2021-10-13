import React from 'react';

export const Section: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ children, className, ...otherProps }) => {
  return (
    <section className={`even:bg-gray-100 odd:bg-gray-50 p-20 text-center ${className}`} {...otherProps}>
      {children}
    </section>
  );
};
