import React from 'react';

const PizzaCard = () => {
  return (
    <article className="pizzaCard">
      <a href="" className="pizzaCard__link">
        <img
          className="pizzaCard__img"
          src="./catalog/bianco.jpg"
          alt=""
          width={370}
          height={250}
          loading="lazy"
        />
      </a>

      <div className="pizzaCard__content">
        <ul className="pizzaCard__size">
          <li className="pizzacard__size-item">
            <button className="pizzaCard__size-btn btn">14"</button>
          </li>
          <li className="pizzacard__size-item">
            <button className="pizzaCard__size-btn btn active">20"</button>
          </li>
          <li className="pizzacard__size-item">
            <button className="pizzaCard__size-btn btn">28"</button>
          </li>
        </ul>
        <ul className="pizzaCard__category">
          <li className="pizzaCard__category-item">
            <button className="pizzaCard__category-btn btn">Classic</button>
          </li>
          <li className="pizzaCard__category-item">
            <button className="pizzaCard__category-btn btn active">Italian</button>
          </li>
        </ul>
        <h2 className="pizzaCard__title title">Bianco</h2>
        <p className="pizzaCard__text">
          No Base Sauce, Cheese topped with our Homemade Creamy White Sauce. ( Contains Egg )
        </p>
        <div className="pizzaCard__bottom">
          <div className="pizzaCard__price">
            <span>$</span>
            14.55
          </div>
          <button className="pizzaCard__button button">
            <div>+</div>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default PizzaCard;
