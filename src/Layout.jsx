import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Header, Footer } from './sections';

function Layout() {
  const [searchValue, setSearchValue] = useState('');

  console.log(searchValue);

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Outlet searchValue={searchValue} setSearchValue={setSearchValue} />
      <Footer />
    </>
  );
}

export default Layout;
