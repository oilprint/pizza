import { useSelector } from 'react-redux';

import { CartPizza, CartEmpty } from '../../components';

import styles from './CartList.module.scss';

const CartList = () => {
  const { items, totalPrice, totalCount } = useSelector((state) => state.cart);

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.cartList__inner}>
          <h1 className={`${styles.title} ${styles.cartList__title}`}>Your Pizzas</h1>
          <ul className={styles.cartList__list}>
            {items.map((item) => (
              <li className={styles.cartList__item} key={item.id}>
                <CartPizza {...item} />
              </li>
            ))}
          </ul>
          <div className={styles.cartList__total}>
            <div className={styles.cartList__totalCount}>
              Count:<span>{totalCount}</span>
            </div>
            <div className={styles.cartList__totalPrice}>
              Total: <span> $ {totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartList;
