import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { setCatgoryId } from '../redux/slices/filterSlice';

import { Categories, Sort, PizzaCard, Skeleton } from '../components';

const Catalog = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const { categoryId, sortType, searchValue } = useSelector((state) => state.filter);

  const [isLoading, setIsLoading] = useState(true);
  const category = categoryId ? `&category=${categoryId}` : '';
  const sort = sortType.sortProperty.replace('-', '');
  const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc';
  const search = searchValue ? `&search=${searchValue}` : '';

  const onChangeCategory = (id) => {
    dispatch(setCatgoryId(id));
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://661b801e65444945d04f9c13.mockapi.io/items?sortBy=${sort}&order=${order}${category}${search} `,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        setItems([]);
        setIsLoading(false);
        console.log(err);
      });
  }, [categoryId, sortType, searchValue]);
  console.log(items);
  return (
    <section className="section catalog">
      <div className="container">
        <div className="catalog__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="title catalog__title">All Pizzas</h2>
        {!items.length && <p className="catalog__text">No results were found for your request</p>}
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
