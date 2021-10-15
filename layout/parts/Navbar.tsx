import React from 'react';
import { Link } from '../../components/Link';

const NavbarLink: React.FC<{ href: string }> = ({ children, href }) => (
  <Link
    className="font-semibold p-4 border-none"
    // activeClassName="text-green-800"
    href={href}
  >
    {children}
  </Link>
);

export const Navbar = (): JSX.Element => {
  return (
    <nav className="bg-gray-300 hover:bg-gray-400 w-full flex justify-between p-4 fixed top-0 shadow-md z-50 transition duration-500 ease-in-out">
      <div>
        <NavbarLink href="/#about">Miroslav Gannoha</NavbarLink>
      </div>
      <div>
        <NavbarLink href="/#about">Home</NavbarLink>
        <NavbarLink href="/#skills">Skills</NavbarLink>
        <NavbarLink href="/#contact">Contact</NavbarLink>
        <NavbarLink href="/#cv">CV</NavbarLink>
      </div>
    </nav>
  );
};
