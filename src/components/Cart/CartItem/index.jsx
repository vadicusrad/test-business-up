import React from 'react';
import style from './style.module.scss';
import minusIcon from '../../../assets/icons/minus-icon.svg';
import plusIcon from '../../../assets/icons/plus-icon.svg';
const CartItem = ({
  title,
  id,
  description,
  price,
  count,
  img,
  changeCartItemCount,
}) => {
  return (
    <div className={style.cartItem}>
      <img className={style.cartItem__img} src={img} alt='door' />
      <div className={style.cartItem__wrapper}>
        <h3 className={style.cartItem__title}>{title}</h3>
        <span className={style.cartItem__description}>{description}</span>
      </div>
      <div className={style.cartItem__priceWrapper}>
        <span className={style.cartItem__price}>{price} ₽</span>
        <div className={style.cartItem__counterWrapper}>
          <button
            className={style.cartItem__counterBtn}
            onClick={() => changeCartItemCount(id, 'minus')}
          >
            <img src={minusIcon} alt='minus' />
          </button>
          <span>{count}</span>
          <button
            className={style.cartItem__counterBtn}
            onClick={() => changeCartItemCount(id, 'plus')}
          >
            <img src={plusIcon} alt='plus' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
