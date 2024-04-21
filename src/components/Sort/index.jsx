import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSortType } from '../../redux/slices/filterSlice';
import { ChevronIcon } from '../../assets/icons';
import { sortList } from '../../constants';

import styles from './Sort.module.scss';

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
    <div ref={sortRef} className={styles.sort}>
      <div onClick={() => setOpen(!open)} className={styles.sort__label}>
        <ChevronIcon
          className={open ? `${styles.sort__icon} ${styles.down}` : `${styles.sort__icon}`}
        />
        Sort by
        <span className={styles.sort__selected}>{sort.value}</span>
      </div>
      {open && (
        <ul className={styles.sort__list}>
          {sortList.map((item, i) => (
            <li
              onClick={() => onClickSelectedItem(item)}
              className={
                sort.sortProperty === item.sortProperty
                  ? `${styles.sort__item} ${styles.active}`
                  : `${styles.sort__item}`
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
