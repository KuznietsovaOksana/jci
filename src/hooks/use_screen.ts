import { useMediaQuery } from 'react-responsive';

export const useScreen = () => {
  const isMobile = useMediaQuery({
    query: '(min-width: 320px) and (max-width: 767px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isDesk = useMediaQuery({ query: '(min-width: 1440px)' });
  return { isMobile, isTablet, isDesk };
};
