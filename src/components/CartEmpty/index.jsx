import { useNavigate } from 'react-router-dom';

import { Box } from '../../assets/images';

import styles from './CartEmpty.module.scss';

const CartEmpty = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section className={styles.cartEmpty}>
      <div className={styles.container}>
        <div className={styles.cartEmpty__inner}>
          <div className="img">
            <img
              className={styles.cartEmpty__img}
              src={Box}
              alt="Empty Box"
              loading="lazy"
              width={500}
              height={444}
            />
          </div>

          <div className={styles.cartEmpty__info}>
            <h1 className={styles.cartEmpty__title}>Your cart is currently Empty!</h1>
            <p className={styles.cartEmpty__text}>
              Before proceed to checkout you must add some products to your shopping cart.
            </p>
            <button onClick={goBack} className={`${styles.button} ${styles.cartEmpty__button}`}>
              Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartEmpty;
