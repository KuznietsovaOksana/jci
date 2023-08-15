import { FC } from 'react';
import dynamic from 'next/dynamic';

import s from './LanguageSwitcher.module.css';

interface LanguageSwitcherProps {
  locale: string;
  onToggle: () => void;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  locale,
  onToggle,
}) => {
  const LanguageIcon = dynamic(
    () =>
      import(
        `public/icons/language_switch_${locale === 'en' ? 'Eng' : 'Ua'}.svg`
      ),
    { ssr: false }
  );

  return (
    <button type='button' onClick={onToggle} className={s.button}>
      <LanguageIcon />
    </button>
  );
};
