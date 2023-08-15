import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import s from './LanguageSwitcher.module.css';

export const LanguageSwitcher = () => {
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
    const currentLocale = locale;
    const newLocale = currentLocale === 'en' ? 'uk' : 'en';
    router.push(router.pathname, router.asPath, { locale: newLocale });
    setLocale(newLocale);
  };

  return (
    <button type='button' onClick={onToggle} className={s.button}>
      <LanguageIcon />
    </button>
  );
};
