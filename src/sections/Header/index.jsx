import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { Logo } from '../../assets/images';
import { CartIcon, OpenMenuBtn, CloseMenuBtn } from '../../assets/icons';
import { Search } from '../../components';

import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, totalPrice } = useSelector((state) => state.cart);
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.header__inner}>
          <Search />
          <Link to="/" className={styles.logo}>
            <img
              src={Logo}
              alt="Logo Pizzeria"
              className={styles.logo__img}
              width={140}
              height={110}
            />
          </Link>

          {/* <button onClick={() => setIsOpen((prev) => !prev)} className={styles.mobileBtn}>
            {isOpen ? <CloseMenuBtn /> : <OpenMenuBtn />}
          </button> */}

          <button className={styles.header__button}>
            <span>
              <span>$</span>
              {totalPrice.toFixed(2)}
            </span>
            <CartIcon width={32} height={32} />
            {items.length > 0 && <span className={styles.header__number}>{items.length}</span>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
