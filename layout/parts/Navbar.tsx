import React, { useEffect, useState } from 'react';
import { Link } from '../../components/Link';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

const NavbarLink: React.FC<{ href: string }> = ({ children, href }) => (
  <Link
    className="font-semibold p-4 border-none"
    // activeClassName="text-green-800"
    href={href}
  >
    {children}
  </Link>
);

const navSections = [
  '/#profile',
  '/#skills',
  '/#experience',
  '/#contact',
] as const;

type NavSection = typeof navSections[number];

function findNextSection(section: NavSection): NavSection {
  const currentIndex = navSections.indexOf(section);
  return navSections[
    currentIndex === navSections.length - 1 ? 0 : currentIndex + 1
  ];
}

export const Navbar = (): JSX.Element => {
  const [cogScrollClass, setCogScrollClass] = useState('');
  const router = useRouter();
  const [nextSection, setNextSection] = useState<NavSection>(
    navSections.includes(router.asPath as NavSection)
      ? findNextSection(router.asPath as NavSection)
      : '/#skills'
  );
  console.log(router.asPath, nextSection);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    function handleScroll() {
      if (timer) {
        clearTimeout(timer);
      }
      setCogScrollClass('animate-spin-slow text-green-400');
      timer = setTimeout(() => setCogScrollClass(''), 100);
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="group bg-gray-300 hover:bg-gray-400 w-full flex justify-between p-4 fixed top-0 shadow-md z-50 transition duration-500 ease-in-out">
      <div>
        <NavbarLink href="/#profile">Miroslav Gannoha</NavbarLink>
      </div>
      <div>
        <NavbarLink href="/#profile">Profile</NavbarLink>
        <NavbarLink href="/#skills">Skills</NavbarLink>
        <NavbarLink href="/#experience">Experience</NavbarLink>
        <NavbarLink href="/#contact">Contact</NavbarLink>
      </div>
      <div
        onClick={() => {
          setNextSection(findNextSection(nextSection));
        }}
      >
        <NavbarLink href={nextSection}>
          <FontAwesomeIcon
            icon={faCog}
            className={`ml-4 text-xl ${cogScrollClass}`}
          />
          <FontAwesomeIcon icon={faCog} className={cogScrollClass} />
        </NavbarLink>
      </div>
    </nav>
  );
};
