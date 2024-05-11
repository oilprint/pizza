import { Catalog, SliderHero } from '../sections';
import { sliderContent } from '../constants';

const Home = () => {
  return (
    <main>
      <div className="wrapper">
        <SliderHero sliderContent={sliderContent} />
        <Catalog />
      </div>
    </main>
  );
};

export default Home;
