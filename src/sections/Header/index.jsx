import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import { Logo } from '../../assets/images';
import { CartIcon } from '../../assets/icons';

import { Search } from '../../components';

import styles from './Header.module.scss';

const Header = () => {
  const location = useLocation();
  const isMounted = useRef(false);
  const { items, totalPrice, totalCount } = useSelector((state) => state.cart);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }

    isMounted.current = true;
  }, [items]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div
          className={
            location.pathname !== '/cart'
              ? `${styles.header__inner}`
              : `${styles.header__innerWithoutSearch}`
          }>
          {location.pathname !== '/cart' && <Search />}
          <Link to="/" className={styles.logo}>
            <img
              src={Logo}
              alt="Logo Pizzeria"
              className={styles.logo__img}
              width={140}
              height={88}
            />
          </Link>

          <Link to="/cart" className={`${styles.accentButton} ${styles.header__cart}`}>
            <span className={styles.header__price}>
              <span>$</span>
              {totalPrice.toFixed(2)}
            </span>
            <CartIcon width={32} height={32} />
            {items.length > 0 && <span className={styles.header__number}>{totalCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
