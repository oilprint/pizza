import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCatgoryId, setSortType } from '../redux/slices/filterSlice';

import { Categories, Sort, PizzaCard, Skeleton } from '../components';

const Catalog = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sortType);

  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  // const search = searchValue ? `search=${searchValue}` : '';
  const category = categoryId ? `&category=${categoryId}` : '';
  const sort = sortType.sortProperty.replace('-', '');
  const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc';

  const onChangeCategory = (id) => {
    dispatch(setCatgoryId(id));
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://661b801e65444945d04f9c13.mockapi.io/items?sortBy=${sort}&order=${order}${category} `,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [categoryId, sortType]);

  return (
    <section className="section catalog">
      <div className="container">
        <div className="catalog__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
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
