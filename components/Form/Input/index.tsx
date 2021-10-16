import React from 'react';

export const Input: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ ...otherProps }) => {
  return (
    <input
      className="text-gray-900 transition duration-500 ease-in-out outline-none w-full placeholder-gray-400 border border-gray-200 rounded-md py-2 pl-10 focus:shadow-md focus:ring-1 focus:ring-green-400"
      {...otherProps}
    />
  );
};
