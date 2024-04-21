import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Logo } from '../../assets/images';
import { CartIcon } from '../../assets/icons';
import { Search } from '../../components';

import styles from './Header.module.scss';

const Header = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.header__inner}>
          <Search />
          <Link to="/">
            <img src={Logo} alt="Logo Pizzeria" className={styles.logo} width={140} height={110} />
          </Link>
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
