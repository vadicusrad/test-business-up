import React from 'react';
import style from './style.module.scss';
import logo from '../../../assets/logo/logo.png';

const LogoPanel = () => {
  return (
    <div className={style.logo}>
      <a href='/'>
        <img className={style.logo__img} src={logo} alt='logo' />
      </a>

      <span className={style.logo__text}>
        Интернет-магазин дверей в Нижнем Новгороде
      </span>
    </div>
  );
};

export default LogoPanel;
