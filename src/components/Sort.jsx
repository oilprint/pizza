import { useState } from 'react';
import { ChevronIcon } from '../assets/icons';
import { sortList } from '../constants';

const Sort = () => {
  const [open, setOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(0);
  const sortName = sortList[selectedSort].value;

  const onClickSelectedItem = (i) => {
    setSelectedSort(i);
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
              className={selectedSort === i ? 'sort__item active' : 'sort__item'}
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
