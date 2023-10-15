import { createContext, useState, useContext, ReactNode } from 'react';

type LocalizationContextType = {
  locale: string;
  setLocale: (locale: string) => void;
};

export const LocalizationContext = createContext<
  LocalizationContextType | undefined
>(undefined);

type LocalizationProviderProps = {
  children: ReactNode;
};

export const LocalizationProvider = ({
  children,
}: LocalizationProviderProps) => {
  const [locale, setLocale] = useState('en');

  const contextValue: LocalizationContextType = {
    locale,
    setLocale,
  };

  return (
    <LocalizationContext.Provider value={contextValue}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  return useContext(LocalizationContext) as LocalizationContextType;
};
