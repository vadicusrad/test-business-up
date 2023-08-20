import React from 'react';
import style from './style.module.scss';
import closeIcon from '../../assets/icons/close-icon.svg';
import Form from '../Form';

const ModalWindow = ({ visibleModal, setVisibleModal }) => {
  return (
    <div className={style.modalWindow}>
      <div
        onClick={() => setVisibleModal(!visibleModal)}
        className={style.modalWindow__close}
      >
        <img src={closeIcon} alt='close' />
      </div>
      <h3 className={style.modalWindow__title}>
        Заполните данные и мы свяжемся с вами в рабочее время и ответим на все
        интересующие вопросы
      </h3>
      <Form />
    </div>
  );
};

export default ModalWindow;
