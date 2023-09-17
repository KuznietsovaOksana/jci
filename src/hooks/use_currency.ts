import { useState } from 'react';

type currency = 'uan' | 'usa' | 'euro';

export const useCurrency = () => {
  const [uanNumber, setUanNumber] = useState(-1);
  const [usaNumber, setUsaNumber] = useState(-1);
  const [euroNumber, setEuroNumber] = useState(-1);

  const onCopy = (ind: number, kind: currency) => {
    if (kind === 'uan') {
      setUanNumber(ind);
      setUsaNumber(-1);
      setEuroNumber(-1);
    }
    if (kind === 'usa') {
      setUsaNumber(ind);
      setUanNumber(-1);
      setEuroNumber(-1);
    }
    if (kind === 'euro') {
      setEuroNumber(ind);
      setUanNumber(-1);
      setUsaNumber(-1);
    }
  };
  return { uanNumber, usaNumber, euroNumber, onCopy };
};
