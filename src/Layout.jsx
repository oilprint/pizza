import { Outlet } from 'react-router-dom';
import { Header, Footer } from './sections';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
