import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

import styles from './PizzaCard.module.scss';

const PizzaCard = ({ id, title, description, imageUrl, types, price, bigImageUrl }) => {
  const [typePizza, setTypePizza] = useState(0);
  const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = useState(Object.keys(price[1])[0]);
  const [selectedPrice, setSelectedPrice] = useState(price[1][selectedSize]);

  const typeNames = ['Classic', 'Italian'];

  const itemsCart = useSelector((state) => state.cart.items);

  const cartItem = itemsCart.find(
    (obj) => obj.id === id && obj.type === typeNames[typePizza] && obj.size === selectedSize,
  );

  // const cartItem = useSelector((state) =>
  //   state.cart.items.find(
  //     (obj) => obj.id === id && obj.type === typePizza && obj.size === selectedSize
  //   ),
  // );

  const addedCount = cartItem ? cartItem.count : 0;

  const handleSizeChange = (size, price) => {
    setSelectedSize(size);
    setSelectedPrice(price);
  };

  const onClickAdd = () => {
    const item = {
      id,
      title: title,
      imageUrl,
      bigImageUrl,
      price: selectedPrice,
      type: typeNames[typePizza],
      size: selectedSize,
    };
    dispatch(addItem(item));
    console.log(cartItem);
  };

  return (
    <article className={styles.pizzaCard}>
      <Link to={`/pizza/${id}`} className={styles.pizzaCard__link}>
        <img
          className={styles.pizzaCard__img}
          src={imageUrl}
          alt={title}
          width={370}
          height={250}
          loading="lazy"
        />
      </Link>

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
                        ? `${styles.sizeBtn} ${styles.btn} ${styles.active}`
                        : `${styles.sizeBtn} ${styles.btn}`
                    }>
                    {size}&quot;
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
                        ? `${styles.categoryBtn} ${styles.btn} ${styles.active}`
                        : `${styles.categoryBtn} ${styles.btn}`
                    }>
                    {typeNames[typeId]}
                  </button>
                </li>
              );
            })}
          </ul>
          <Link to={`/pizza/${id}`} className={styles.pizzaCard__link}>
            <h2 className={styles.pizzaCard__title}>{title}</h2>
            <p className={styles.pizzaCard__text}>{description}</p>
          </Link>
        </div>

        <div className={styles.pizzaCard__bottom}>
          <div className={styles.pizzaCard__price}>
            <span>$</span>
            {selectedPrice.toFixed(2)}
          </div>
          <button onClick={onClickAdd} className={styles.button}>
            <div>+</div>
            Add to Cart
            {addedCount > 0 && <span className={styles.pizzaCard__count}>{addedCount}</span>}
          </button>
        </div>
      </div>
    </article>
  );
};

export default PizzaCard;
