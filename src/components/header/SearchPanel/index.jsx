import React from 'react';
import style from './style.module.scss';
import lupeIcon from '../../../assets/icons/lupe-icon.svg';
const SearchPanel = () => {
  return (
    <div className={style.search}>
      <img src={lupeIcon} alt='search icon' />
      <input className={style.search__input} type='text' placeholder='Поиск' />
    </div>
  );
};

export default SearchPanel;
