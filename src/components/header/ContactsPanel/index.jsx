import React from 'react';
import style from './style.module.scss';
import telegramIcon from '../../../assets/icons/telegram-icon.svg';
import whatsUpIcon from '../../../assets/icons/whats-up-icon.svg';

const ContactsPanel = () => {
  return (
    <div className={style.contacts}>
      <div className={style.contacts__wrapper}>
        <a className={style.contacts__socialLink} href='/#' target='_blank'>
          <img src={telegramIcon} alt='telegram icon' />
        </a>
        <a className={style.contacts__socialLink} href='/#' target='_blank'>
          <img src={whatsUpIcon} alt='whats up icon' />
        </a>
      </div>
      <a className={style.contacts__tel} href='tel:8 (831) 219-97-81'>
        8 (831) 219-97-81
      </a>
      <button className={style.contacts__callMeButton}>Заказать звонок</button>
    </div>
  );
};

export default ContactsPanel;
