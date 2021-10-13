import React from 'react';
import { Navbar } from './parts/Navbar';

export const Layout: React.FC = ({children, ...otherProps}) => {
  return (
    <div {...otherProps} className="flex flex-col pt-6">
        <Navbar />
        <main className="flex flex-col ">
            {children}
        </main>
    </div>
  );
};