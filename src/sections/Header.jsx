import { Link } from 'react-router-dom';
import { Logo } from '../assets/images';
import { CartIcon } from '../assets/icons';
import { Search } from '../components';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__inner">
          <Search />
          <Link to="/">
            <img src={Logo} alt="Logo Pizzeria" className="logo" width={140} height={110} />
          </Link>
          <button className="header__button">
            <span>
              <span>$</span>142.00
            </span>
            <CartIcon width={32} height={32} />
            <span className="header__number">5</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
