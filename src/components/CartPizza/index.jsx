import { BtnSmall, BtnLight } from '..';
import { MinusBtn, PlusBtn, DeleteBtn } from '../../assets/icons';
import styles from './CartPizza.module.scss';

const index = () => {
  return (
    <article className={styles.cartPizza}>
      <div className={styles.cartPizza__content}>
        <img
          className={styles.pizzaCard__img}
          src=""
          alt=""
          width={120}
          height={80}
          loading="lazy"
        />
        <div className={styles.cartPizza__description}>
          <h3 className={`${styles.cartPizza__title} ${styles.title}`}>Biznca</h3>
          <div className={styles.cartPizza__info}>
            <span className={styles.cartPizza__type}>italian</span>
            <span className={styles.cartPizza__size}>28 &quot;</span>
          </div>
        </div>
      </div>
      <div className={styles.cartPizza__countContent}>
        <div className={styles.cartPizza__count}>
          <BtnSmall icon={<MinusBtn />} />
          <span className={styles.cartPizza__number}>5</span>
          <BtnSmall icon={<PlusBtn />} />
        </div>
        <span className={styles.cartPizza__price}>$ 53</span>
      </div>
      <BtnLight icon={<DeleteBtn />} />
    </article>
  );
};

export default index;
