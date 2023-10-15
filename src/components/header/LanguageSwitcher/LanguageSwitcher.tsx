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

  const onToggle = () => {
    const newLocale = locale === 'en' ? 'uk' : 'en';
    router.push(router.pathname, router.asPath, { locale: newLocale });
    setLocale(newLocale);
  };

  return (
    <button
      type='button'
      onClick={onToggle}
      className={s.button}
      aria-label={t('language.aria') as string}
    >
      <LanguageIcon aria-label={t('language.aria')} />
    </button>
  );
};
