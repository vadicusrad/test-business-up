import React from 'react';
import style from './style.module.scss';
import CartItem from './CartItem';

const Cart = ({ cartItems, changeCartItemCount }) => {
  const cartItemsSumm = () => {
    return cartItems.reduce((sum, item) => {
      return sum + item.price * item.count;
    }, 0);
  };

  return (
    <div className={style.cart}>
      {cartItems.length ? (
        <>
          <div>
            {cartItems.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  {...item}
                  changeCartItemCount={changeCartItemCount}
                />
              );
            })}
          </div>
          <div className={style.cart__summary}>
            <h4>Сумма заказа: {cartItemsSumm()} ₽</h4>
            <button className={style.cart__button}>
              Перейти к оформлению →
            </button>
          </div>
        </>
      ) : (
        <h4 className={style.cart__cartEmpty}>Корзина пуста</h4>
      )}
    </div>
  );
};

export default Cart;
