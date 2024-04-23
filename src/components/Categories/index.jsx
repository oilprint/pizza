import { categoriesList } from '../../constants';
import styles from './Categories.module.scss';

const Categories = ({ value, onChangeCategory }) => {
  return (
    <div className={styles.categories}>
      <ul className={styles.categories__list}>
        {categoriesList.map((item, ind) => (
          <li className={styles.categories__item} key={item.id}>
            <button
              onClick={() => onChangeCategory(ind)}
              className={
                value === ind
                  ? `${styles.categories__button} ${styles.active}`
                  : `${styles.categories__button}`
              }
              style={{ borderRadius: `${item.radius}` }}>
              {item.value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
