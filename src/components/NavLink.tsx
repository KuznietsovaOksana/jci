import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import css from './Header/Header.module.css';

export interface IPropsNavLink {
  href: string;
  exact: boolean;
  className: string;
}

NavLink.defaultProps = {
  exact: false,
};

export default function NavLink({
  href,
  exact,
  children,
  ...props
}: PropsWithChildren<IPropsNavLink>) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  if (isActive) {
    props.className += ` ${css.nav_link_active}`;
  }

  return (
    <Link {...props} href={href}>
      {children}
    </Link>
  );
}
