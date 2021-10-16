import React from 'react';

export const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, className, ...otherProps }) => {
  return (
    <button
      className={`p-2 bg-gray-500 text-white rounded-md active:shadow-none hover:shadow-lg  border-2 hover:bg-green-400 transition duration-500 ease-in-out ${className || ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
