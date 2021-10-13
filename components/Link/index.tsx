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
      <a className={`${className || 'text-green-600 hover:text-green-400 transition duration-500 ease-in-out'} ${activeClass}`}>
        {children}
      </a>
    </NextLink>
  );
};
