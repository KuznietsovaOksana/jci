import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

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

  const [locale, setLocale] = useState<string | undefined>(router.locale);

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
