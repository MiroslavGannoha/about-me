import React from 'react';

export const Card: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({children, className, ...otherProps}) => {
  return (
    <figure className={`bg-white rounded-xl p-8 border hover:shadow-md transition duration-700 ease-in-out ${className || ''}`} {...otherProps}>
        {children}
    </figure>
  );
};