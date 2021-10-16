import React from 'react';

export const Textarea: React.FC<
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
> = ({ ...otherProps }) => {
  return (
    <textarea
      className="transition duration-500 ease-in-out outline-none w-full placeholder-gray-400 border border-gray-200 rounded-md py-2 px-4 border-transparent focus:ring-1 focus:ring-green-400 focus:shadow-md"
      {...otherProps}
    />
  );
};
