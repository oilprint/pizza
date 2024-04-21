import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import { setCatgoryId, setFilters } from '../redux/slices/filterSlice';

import { Categories, Sort, PizzaCard, Skeleton } from '../components';
import { sortList } from '../constants';

const Catalog = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sortType, searchValue } = useSelector((state) => state.filter);

  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCatgoryId(id));
  };
  const fetchPizzas = () => {
    setIsLoading(true);
    console.log(categoryId);

    const category = categoryId ? `&category=${categoryId}` : '';
    const sort = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc';
    const search = searchValue ? `&search=${searchValue}` : '';

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
  };

  //если не было первого рендера, то не нужно вшивать парметры в URL (вшивать только если первый рендер был и изменились параметры )
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType.sortProperty,
        categoryId,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType]);

  //если был первый рендер, то проверяем URL параметры и сохраняяем в Redux
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortType = sortList.find((obj) => obj.sortProperty === params.sortProperty);
      console.log(params.categoryId);

      dispatch(
        setFilters({
          ...params,
          sortType,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  //если был первый рендер, то запрашиваем пиццы
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sortType, searchValue]);

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
          {!items.length && <p className="catalog__text">No results were found for your request</p>}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
