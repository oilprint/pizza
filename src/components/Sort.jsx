import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSortId } from '../redux/slices/filterSlice';
import { ChevronIcon } from '../assets/icons';
import { sortList } from '../constants';

const Sort = () => {
  const [open, setOpen] = useState(false);
  const sortId = useSelector((state) => state.filter.sortId);
  const dispatch = useDispatch();
  // const [selectedSort, setSelectedSort] = useState(0);
  const sortName = sortList[sortId].value;

  const onClickSelectedItem = (id) => {
    dispatch(setSortId(id));
    setOpen(false);
  };

  return (
    <div className="sort">
      <div onClick={() => setOpen(!open)} className="sort__label">
        <ChevronIcon className={open ? 'sort__icon down' : 'sort__icon'} />
        Sort by
        <span className="sort__selected">{sortName}</span>
      </div>
      {open && (
        <ul className="sort__list">
          {sortList.map((item, i) => (
            <li
              onClick={() => onClickSelectedItem(i)}
              className={sortId === i ? 'sort__item active' : 'sort__item'}
              key={item.id}>
              {item.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
