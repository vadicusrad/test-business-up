import React from 'react';
import style from './style.module.scss';
import addressIcon from '../../../assets/icons/address-icon.svg';
const AddressPanel = () => {
  return (
    <address className={style.address}>
      <img src={addressIcon} alt='address icon' />
      <span className={style.address__text}>
        Нижний Новгород, ул. Уличная, 1, оф. 15
      </span>
    </address>
  );
};

export default AddressPanel;
