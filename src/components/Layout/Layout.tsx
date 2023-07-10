import { PropsWithChildren } from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer/Footer';

export interface ILayout {
  setShowModal: (show: boolean) => void;
}

export const Layout = ({
  children,
  setShowModal,
}: PropsWithChildren<ILayout>) => (
  <>
    <Header setShowModal={setShowModal} />
    {children}
    <Footer />
  </>
);
