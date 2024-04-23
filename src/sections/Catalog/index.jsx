import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import { setCatgoryId, setFilters } from '../../redux/slices/filterSlice';
import { fetchPizzas } from '../../redux/slices/pizzaSlice';

import { Categories, Sort, PizzaCard, Skeleton } from '../../components';
import { sortList } from '../../constants';

import styles from './Catalog.module.scss';

const Catalog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sortType, searchValue } = useSelector((state) => state.filter);
  const { items, status } = useSelector((state) => state.pizza);

  const onChangeCategory = (id) => {
    dispatch(setCatgoryId(id));
  };

  const skeleton = [...new Array(12)].map((item, i) => (
    <Skeleton className={styles.catalog__item} key={i} />
  ));
  const pizzas = items.map((item, ind) => (
    <li className={styles.catalog__item} key={ind}>
      <PizzaCard {...item} />
    </li>
  ));

  const getPizzas = async () => {
    const category = categoryId ? `&category=${categoryId}` : '';
    const sort = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc';
    const search = searchValue ? `&search=${searchValue}` : '';
    dispatch(
      fetchPizzas({
        category,
        sort,
        order,
        search,
      }),
    );
    window.scrollTo(0, 0);
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
    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sortType, searchValue]);
  console.log(items);

  return (
    <section className={`${styles.section} ${styles.catalog}`}>
      <div className={styles.container}>
        <div className={styles.catalog__top}>
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className={`${styles.title} ${styles.catalog__title}`}>All Pizzas</h2>

        <ul className={styles.catalog__list}>
          {status === 'error' ? (
            <p className={styles.catalog__text}>No results were found for your request</p>
          ) : status === 'loading' ? (
            skeleton
          ) : (
            pizzas
          )}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
