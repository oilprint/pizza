import { categoriesList } from '../constants';

const Categories = () => {
  return (
    <ul className="categories">
      {categoriesList.map((item) => (
        <li className="categories__item" key={item.id}>
          <button className="categories__button" style={{ borderRadius: `${item.radius}` }}>
            {item.value}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
