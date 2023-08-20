import { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { router } from '@/utils/routes';
import LogoImg from 'public/icons/logo_JCI_Ukraine.svg';

import { LogoProps } from './Logo.props';
import s from './Logo.module.css';

export const Logo: FC<LogoProps> = ({ className, isWhite }) => {
  const { t } = useTranslation(['common']);
  const ariaLabel = t('logo.aria');
  const logoClassName = isWhite ? s.white : s.logo;

  return (
    <Link href={router.HOME} className={className}>
      <LogoImg className={logoClassName} aria-label={ariaLabel} />
    </Link>
  );
};
