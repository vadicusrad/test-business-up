import React from 'react';
import style from './style.module.scss';
import comparisonIcon from '../../../assets/icons/comparison-icon.svg';
import heartIcon from '../../../assets/icons/heart-icon.svg';
import CartIcon from '../../../assets/icons/cart-icon.svg';
import profileIcon from '../../../assets/icons/profile-icon.svg';

const ButtonsPanel = ({ setVisibleCart, visibleCart, cartItemsLength }) => {
  const comparisonCount = 3;
  return (
    <div className={style.buttons}>
      <button className={style.buttons__btn}>
        <img src={comparisonIcon} alt='comparison icon' />
        {comparisonCount ? (
          <span className={style.buttons__counter}>{comparisonCount}</span>
        ) : null}
      </button>

      <button className={style.buttons__btn}>
        <img src={heartIcon} alt='heart icon' />
      </button>
      <button
        onClick={() => setVisibleCart(!visibleCart)}
        className={style.buttons__btn}
      >
        <img src={CartIcon} alt='Cart icon' />
        <span className={style.buttons__counter}>{cartItemsLength}</span>
      </button>
      <button className={style.buttons__btn}>
        <img src={profileIcon} alt='profile icon' />
      </button>
    </div>
  );
};

export default ButtonsPanel;
