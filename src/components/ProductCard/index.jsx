import React from 'react';
import style from './style.module.scss';

const ProductCard = ({ title, description, price, img, id, addItemToCart }) => {
  return (
    <div className={style.productCard}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <span>{description}</span>
      <span>{price}Р</span>
      <button
        className={style.productCard__button}
        onClick={() => addItemToCart(id)}
      >
        В корзину
      </button>
    </div>
  );
};

export default ProductCard;
