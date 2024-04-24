import { Outlet } from 'react-router-dom';
import { useState } from 'react';
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
