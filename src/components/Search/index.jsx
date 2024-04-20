import { useRef, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

import { SearchIcon, ClearIcon } from '../../assets/icons';
import styles from './Search.module.scss';
import debounce from 'lodash.debounce';

const Search = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef();
  const dispatch = useDispatch();

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 250),
    [],
  );

  const onChangeValue = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClearClick = () => {
    setValue('');
    dispatch(setSearchValue(''));
    inputRef.current.focus();
  };

  return (
    <div className={styles.search}>
      <input
        ref={inputRef}
        className={styles.search__input}
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChangeValue}
      />
      <SearchIcon className={styles.search__icon} />
      {value && <ClearIcon className={styles.search__clearBtn} onClearClick={onClearClick} />}
    </div>
  );
};

export default Search;
