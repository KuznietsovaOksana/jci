import { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { router } from '@/utils/routes';

import LogoMain from 'public/icons/logo_JCI_Ukraine.svg';
import LogoWhite from 'public/icons/logo-white.svg';

import { LogoProps } from './Logo.props';
import s from './Logo.module.css';

export const Logo: FC<LogoProps> = ({ className, isWhite }) => {
  const { t } = useTranslation('common');

  const logoClassName = isWhite ? s.white : s.logo;
  const LogoIcon = isWhite ? LogoWhite : LogoMain;

  return (
    <Link
      href={router.HOME}
      className={className}
      aria-label={t('logo.destination') as string}
    >
      <LogoIcon className={logoClassName} aria-label={t('logo.aria')} />
    </Link>
  );
};
