import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { Logo } from '../assets/images';
import { CartIcon, SearchIcon } from '../assets/icons';

const Header = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.filter.searchValue);

  const inputRef = useRef();
  const setSearchValue = (e) => {
    dispatch(setSearchValue(e));
  };
  return (
    <header>
      <div className="container">
        <div className="header__inner">
          <div className="header__search">
            <input
              ref={inputRef}
              className="header__input"
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <SearchIcon className="header__input-icon" />
          </div>
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
