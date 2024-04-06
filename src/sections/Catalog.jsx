import { Categories, Sort, PizzaCard } from '../components';

const Catalog = () => {
  return (
    <section className="section catalog">
      <div className="container">
        <div className="catalog__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="title catalog__title">All Pizzas</h2>
        <ul className="catalog__list">
          <li className="catalog__item">
            <PizzaCard />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
