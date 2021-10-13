import React from 'react';
import { Link } from '../../components/Link';

const NavbarLink: React.FC<{ href: string }> = ({ children, href }) => (
  <Link
    className="text-gray-700 font-semibold p-4 hover:text-gray-500 transition duration-500 ease-in-out"
    // activeClassName="text-green-800"
    href={href}
  >
    {children}
  </Link>
);

export const Navbar = (): JSX.Element => {
  return (
    <nav className="bg-gray-300 w-full flex justify-between p-4 fixed top-0 shadow-md z-50">
      <div>
        <NavbarLink href="/#about">Miroslav Gannoha</NavbarLink>
      </div>
      <div>
        <NavbarLink href="/#about">Home</NavbarLink>
        <NavbarLink href="/#contact">Contact</NavbarLink>
        <NavbarLink href="/#cv">CV</NavbarLink>
      </div>
    </nav>
  );
};
