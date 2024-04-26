import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';

import { BtnSmall, BtnLight } from '..';
import { MinusBtn, PlusBtn, DeleteBtn } from '../../assets/icons';
import styles from './CartPizza.module.scss';

const CartPizza = ({ id, title, type, size, imageUrl, count, price }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id, size, type }));
  };

  const onClickMinus = () => {
    if (`${count}` > 0) {
      dispatch(minusItem({ id, size, type }));
    }
  };

  const onClickRemove = () => {
    dispatch(removeItem({ id, size, type }));
  };

  return (
    <article className={styles.cartPizza}>
      <div className={styles.cartPizza__content}>
        <img
          className={styles.cartPizza__img}
          src={imageUrl}
          alt={title}
          width={120}
          height={80}
          loading="lazy"
        />
        <div className={styles.cartPizza__description}>
          <h3 className={`${styles.cartPizza__title} ${styles.title}`}>{title}</h3>
          <div className={styles.cartPizza__info}>
            <span className={styles.cartPizza__type}>{type}</span>
            <span className={styles.cartPizza__size}>{size} &quot;</span>
          </div>
        </div>
      </div>
      <div className={styles.cartPizza__countContent}>
        <div className={styles.cartPizza__count}>
          <BtnSmall icon={<MinusBtn />} onClick={onClickMinus} />
          <span className={styles.cartPizza__number}>{count}</span>
          <BtnSmall onClick={onClickPlus} icon={<PlusBtn />} />
        </div>
        <div className={styles.cartPizza__price}>$ {(price * count).toFixed(2)}</div>
      </div>
      <BtnLight icon={<DeleteBtn />} onClick={onClickRemove} />
    </article>
  );
};

export default CartPizza;
