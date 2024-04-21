import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

import styles from './PizzaCard.module.scss';

const PizzaCard = ({ id, title, description, imageUrl, types, price }) => {
  const [typePizza, setTypePizza] = useState(0);
  const [countPizza, setCountPizza] = useState(0);
  const [selectedSize, setSelectedSize] = useState(Object.keys(price[1])[0]);
  const [selectedPrice, setSelectedPrice] = useState(price[1][selectedSize]);
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleSizeChange = (size, price) => {
    setSelectedSize(size);
    setSelectedPrice(price);
  };

  const onClickAdd = () => {
    const item = {
      id,
      title,
      imageUrl,
      price: selectedPrice,
      type: typePizza,
    };
    dispatch(addItem(item));
  };
  const typeNames = ['Classic', 'Italian'];

  return (
    <article className={styles.pizzaCard}>
      <a href="#" className={styles.pizzaCard__link}>
        <img
          className={styles.pizzaCard__img}
          src={imageUrl}
          alt={title}
          width={370}
          height={250}
          loading="lazy"
        />
      </a>

      <div className={styles.pizzaCard__content}>
        <div className={styles.pizzaCard__top}>
          <ul className={styles.pizzaCard__size}>
            {price.map((priceObj) => {
              const size = Object.keys(priceObj)[0];
              const price = priceObj[size];
              return (
                <li className={styles.pizzaCard__size} key={size}>
                  <button
                    onClick={() => handleSizeChange(size, price)}
                    className={
                      selectedSize === size
                        ? `${styles.pizzaCard__sizeBtn} ${styles.btn} ${styles.active}`
                        : `${styles.pizzaCard__sizeBtn} ${styles.btn}`
                    }>
                    {size}"
                  </button>
                </li>
              );
            })}
          </ul>
          <ul className={styles.pizzaCard__category}>
            {types.map((typeId, ind) => {
              return (
                <li className={styles.pizzaCard__category} key={ind}>
                  <button
                    onClick={() => setTypePizza(ind)}
                    className={
                      typePizza === ind
                        ? `${styles.pizzaCard__categoryBtn} ${styles.btn} ${styles.active}`
                        : `${styles.pizzaCard__categoryBtn} ${styles.btn}`
                    }>
                    {typeNames[typeId]}
                  </button>
                </li>
              );
            })}
          </ul>
          <h2 className={styles.pizzaCard__title}>{title}</h2>
          <p className={styles.pizzaCard__text}>{description}</p>
        </div>

        <div className={styles.pizzaCard__bottom}>
          <div className={styles.pizzaCard__price}>
            <span>$</span>
            {selectedPrice.toFixed(2)}
          </div>
          <button onClick={onClickAdd} className={`${styles.pizzaCard__button} ${styles.button}`}>
            <div>+</div>
            Add to Cart
            <span className={styles.pizzaCard__count}>{countPizza}</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default PizzaCard;
