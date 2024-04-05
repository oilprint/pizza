import { Link } from 'react-router-dom';
import { Logo } from '../assets/images';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__search">
          <input type="text" placeholder="Search..." />
        </div>
        <Link to="/">
          <img src={Logo} alt="Logo Pizzeria" className="logo" width={140} height={110} />
        </Link>
        <button className="header__cart">
          <span>$</span>142.00
          <CartIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
