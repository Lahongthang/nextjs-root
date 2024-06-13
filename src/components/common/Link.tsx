import clsx from 'clsx';
import NextLink, { LinkProps } from 'next/link';

type Props = {
  title: string;
  href: string;
  className?: string;
} & LinkProps;

export default function Link({ title, href, className, ...props }: Props) {
  return (
    <NextLink
      className={clsx('link', className)}
      href={href}
      scroll={false}
      {...props}
    >
      {title}
    </NextLink>
  );
}
