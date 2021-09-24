import NextLink, { LinkProps } from 'next/link';

export const Link: React.FC<LinkProps> = ({ children, ...otherProps }) => {
  return (
    <NextLink {...otherProps}>
      <a className="text-green-400">
        {children}
      </a>
    </NextLink>
  );
};