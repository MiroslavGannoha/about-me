import React from 'react';

export const Section: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ children, className, ...otherProps }) => {
  return (
    <section className={`even:bg-gray-100 odd:bg-gray-50 pt-14 pb-10 md:py-16 px-6 md:px-20 ${className || ''}`} {...otherProps}>
      {children}
    </section>
  );
};
