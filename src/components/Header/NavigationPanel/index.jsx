import React from 'react';
import style from './style.module.scss';

const NavigationPanel = () => {
  return (
    <nav className={style.navigation}>
      <ul className={style.navigation__list}>
        <li className={style.navigation__item}>
          <a href='/'>Акции</a>
        </li>
        <li className={style.navigation__item}>
          <a href='/'>Доставка и установка</a>
        </li>
        <li className={style.navigation__item}>
          <a href='/'>Оплата</a>
        </li>
        <li className={style.navigation__item}>
          <a href='/'>Сертификаты</a>
        </li>
        <li className={style.navigation__item}>
          <a href='/'>О нас</a>
        </li>
        <li className={style.navigation__item}>
          <a href='/'>Контакты</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationPanel;
