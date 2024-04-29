import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../redux/slices/cartSlice';

import styles from './SinglePizza.module.scss';

const SinglePizza = ({ id, title, bigImageUrl, description, imageUrl, types, price }) => {
  const [typePizza, setTypePizza] = useState(0);
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(Object.keys(price[1])[0]);
  const [selectedPrice, setSelectedPrice] = useState(price[1][selectedSize]);

  const typeNames = ['Classic', 'Italian'];

  const itemsCart = useSelector((state) => state.cart.items);

  const cartItem = itemsCart.find(
    (obj) => obj.id === id && obj.type === typeNames[typePizza] && obj.size === selectedSize,
  );

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
    <section className={styles.singlePizza}>
      <div className={styles.container}>
        <div className={styles.singlePizza__inner}>
          <img
            src={bigImageUrl}
            alt={title}
            className={styles.singlePizza__img}
            width={370}
            height={470}
            loading="lazy"
          />
          <div className={styles.singlePizza__top}>
            <div className={styles.singlePizza__info}>
              <h2 className={styles.singlePizza__title}>{title}</h2>
              <p className={styles.singlePizza__text}>{description}</p>

              <ul className={styles.singlePizza__size}>
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
              <ul className={styles.singlePizza__category}>
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
            </div>

            <div className={styles.singlePizza__bottom}>
              <div className={styles.singlePizza__price}>
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
        </div>
      </div>
    </section>
  );
};

export default SinglePizza;
