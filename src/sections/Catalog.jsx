import { Categories, Sort, PizzaCard } from '../components';
import pizzaList from '../assets/pizzaList.json';

const Catalog = () => {
  console.log(pizzaList);
  return (
    <section className="section catalog">
      <div className="container">
        <div className="catalog__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="title catalog__title">All Pizzas</h2>
        <ul className="catalog__list">
          {pizzaList.map((item, ind) => (
            <li className="catalog__item" key={ind}>
              <PizzaCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
