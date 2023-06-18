import { PropsWithChildren } from 'react';

import s from './Container.module.css';

export const Container = ({ children }: PropsWithChildren) => {
  return <div className={s.container}>{children}</div>;
};
