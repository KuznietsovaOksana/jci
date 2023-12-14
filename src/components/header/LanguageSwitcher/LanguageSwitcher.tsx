import Link from 'next/link';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { useLocalization } from '@/contexts/LocalizationContext';

import s from './LanguageSwitcher.module.css';

export const LanguageSwitcher = () => {
  const { t } = useTranslation('common');
  const LanguageIcon = dynamic(
    () =>
      import(
        `public/icons/language_switch_${locale === 'en' ? 'Eng' : 'Ua'}.svg`
      ),
    { ssr: false }
  );

  const router = useRouter();

  const { locale, setLocale } = useLocalization();

  useEffect(() => {
    if (router.locale) {
      setLocale(router.locale);
    }
  }, [router.locale, setLocale]);

  const newLocale = locale === 'en' ? 'uk' : 'en';

  return (
    <Link
      href={router.pathname}
      locale={newLocale}
      className={s.button}
      aria-label={t('language.aria') as string}
    >
      <LanguageIcon aria-label={t('language.aria')} />
    </Link>
  );
};
