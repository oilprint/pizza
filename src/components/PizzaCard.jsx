import { useState } from 'react';

const PizzaCard = ({ id, name, description, imageUrl, types, price }) => {
  const [typePizza, setTypePizza] = useState(0);

  const [selectedSize, setSelectedSize] = useState(Object.keys(price[1])[0]);
  const [selectedPrice, setSelectedPrice] = useState(price[1][selectedSize]);

  const handleSizeChange = (size, price) => {
    setSelectedSize(size);
    setSelectedPrice(price);
  };

  const [countPizza, setCountPizza] = useState(0);
  const onClickAdd = () => {
    setCountPizza(countPizza + 1);
  };
  const typeNames = ['Classic', 'Italian'];

  return (
    <article className="pizza-card">
      <a href="#" className="pizza-card__link">
        <img
          className="pizza-card__img"
          src={imageUrl}
          alt={name}
          width={370}
          height={250}
          loading="lazy"
        />
      </a>

      <div className="pizza-card__content">
        <div className="pizza-card__top">
          <ul className="pizza-card__size">
            {price.map((priceObj) => {
              const size = Object.keys(priceObj)[0];
              const price = priceObj[size];
              return (
                <li className="pizza-card__size-item" key={size}>
                  <button
                    onClick={() => handleSizeChange(size, price)}
                    className={
                      selectedSize === size
                        ? 'pizza-card__size-btn btn active'
                        : 'pizza-card__size-btn btn'
                    }>
                    {size}"
                  </button>
                </li>
              );
            })}
          </ul>
          <ul className="pizza-card__category">
            {types.map((typeId, ind) => (
              <li className="pizza-card__category-item" key={ind}>
                <button
                  onClick={() => setTypePizza(ind)}
                  className={
                    typePizza === ind
                      ? `pizza-card__category-btn btn active`
                      : `pizza-card__category-btn btn`
                  }>
                  {typeNames[typeId]}
                </button>
              </li>
            ))}
          </ul>
          <h2 className="pizza-card__title title">{name}</h2>
          <p className="pizza-card__text">{description}</p>
        </div>

        <div className="pizza-card__bottom">
          <div className="pizza-card__price">
            <span>$</span>
            {selectedPrice.toFixed(2)}
          </div>
          <button onClick={onClickAdd} className="pizza-card__button button">
            <div>+</div>
            Add to Cart
            <span className="pizza-card__count">{countPizza}</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default PizzaCard;
