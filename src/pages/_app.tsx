import { FC } from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { LocalizationProvider } from '@/contexts/LocalizationContext';

import '@/styles/fonts.css';
import '@/styles/variables.css';
import '@/styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <LocalizationProvider>
      <Component {...pageProps} />
    </LocalizationProvider>
  );
};

export default appWithTranslation(App);
