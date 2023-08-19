import React from 'react';
import style from './style.module.scss';

import catalogIcon from '../../../assets/icons/catalog-icon.svg';
const CatalogPanel = () => {
  return (
    <div className={style.catalog}>
      <button className={style.catalog__button}>
        <img src={catalogIcon} alt='catalog icon' />
        Каталог
      </button>
      <span className={style.catalog__text}>Более 3000 товаров</span>
    </div>
  );
};

export default CatalogPanel;
