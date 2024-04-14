import { useState, useEffect } from 'react';
import { Categories, Sort, PizzaCard, Skeleton } from '../components';

const Catalog = () => {
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://661b801e65444945d04f9c13.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
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
          {isLoading
            ? [...new Array(12)].map((item, i) => <Skeleton key={i} />)
            : items.map((item, ind) => (
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
