import NextLink, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

export const Link: React.FC<
  LinkProps & { className?: string; activeClassName?: string }
> = ({ children, className, activeClassName, ...otherProps }) => {
  const router = useRouter();
  
  const activeClass =
    activeClassName && router.asPath == otherProps.href
      ? activeClassName
      : '';
  return (
    <NextLink {...otherProps}>
      <a className={`text-gray-700 border-b-2 hover:text-green-400 transition duration-500 ease-in-out ${className || ''} ${activeClass}`}>
        {children}
      </a>
    </NextLink>
  );
};
