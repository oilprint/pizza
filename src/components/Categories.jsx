import { useState } from 'react';
import { categoriesList } from '../constants';

const Categories = ({ value, onChangeCategory }) => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <ul className="categories">
      {categoriesList.map((item, ind) => (
        <li className="categories__item" key={item.id}>
          <button
            onClick={() => onChangeCategory(ind)}
            className={value === ind ? 'categories__button active' : 'categories__button'}
            style={{ borderRadius: `${item.radius}` }}>
            {item.value}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
