import { CartPizza } from '../../components';
import styles from './CartList.module.scss';

const index = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.cartList__inner}>
          <h1 className={`${styles.title} ${styles.cartList__title}`}>Your Pizzas</h1>
          <ul className={styles.cartList__list}>
            <li className={styles.cartList__item}>
              <CartPizza />
            </li>
          </ul>
          <div className={styles.cartList__total}>
            <div className={styles.cartList__totalCount}>
              Count:<span>5</span>
            </div>
            <div className={styles.cartList__totalPrice}>
              Total: <span> $ 52</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
