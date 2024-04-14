import { useState, useEffect } from 'react';
import { Categories, Sort, PizzaCard } from '../components';
import pizzaList from '../assets/pizzaList.json';

const Catalog = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://661b801e65444945d04f9c13.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => setItems(arr));
  }, []);

  return (
    <section className="section catalog">
      <div className="container">
        <div className="catalog__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="title catalog__title">All Pizzas</h2>
        <ul className="catalog__list">
          {items.map((item, ind) => (
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
