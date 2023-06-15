import { PropsWithChildren } from 'react';
import Header from './Header/Header';
const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Header />
    {children}
    {/* <Footer/> */}
  </>
);

export default Layout;
