import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSortType } from '../redux/slices/filterSlice';
import { ChevronIcon } from '../assets/icons';
import { sortList } from '../constants';

const Sort = () => {
  const [open, setOpen] = useState(false);
  const sort = useSelector((state) => state.filter.sortType);
  const dispatch = useDispatch();
  const sortRef = useRef();

  const onClickSelectedItem = (item) => {
    dispatch(setSortType(item));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!sortRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div onClick={() => setOpen(!open)} className="sort__label">
        <ChevronIcon className={open ? 'sort__icon down' : 'sort__icon'} />
        Sort by
        <span className="sort__selected">{sort.value}</span>
      </div>
      {open && (
        <ul className="sort__list">
          {sortList.map((item, i) => (
            <li
              onClick={() => onClickSelectedItem(item)}
              className={
                sort.sortProperty === item.sortProperty ? 'sort__item active' : 'sort__item'
              }
              key={i}>
              {item.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
