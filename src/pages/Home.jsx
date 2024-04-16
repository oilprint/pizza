import { Catalog } from '../sections';

const Home = ({ searchValue, setSearchValue }) => {
  return (
    <main>
      <Catalog searchValue={searchValue} setSearchValue={setSearchValue} />
    </main>
  );
};

export default Home;
