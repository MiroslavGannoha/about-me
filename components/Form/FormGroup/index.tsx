import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const FormGroup: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { icon: IconDefinition }
> = ({ icon, className, children, ...otherProps }) => {
  return (
    <div
      className={`text-gray-400 focus-within:text-gray-600 relative transition duration-500 ease-in-out ${className || ''}`}
    >
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FontAwesomeIcon icon={icon} />
      </div>
      {children}
    </div>
  );
};
