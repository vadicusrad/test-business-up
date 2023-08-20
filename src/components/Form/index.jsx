import React, { useState } from 'react';
import style from './style.module.scss';
import { useForm } from 'react-hook-form';
const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.form__inputWrapper}>
        <input
          type='text'
          placeholder='Имя*'
          className={style.form__input}
          {...register('name', {
            required: true,
            minLength: {
              value: 2,
              message: 'Минимальная длина 2 символа',
            },
            maxLength: {
              value: 30,
              message: 'Максимальная длина 30 символов',
            },
            pattern: {
              value: /^[a-zA-Zа-яА-Я]+$/,
              message: 'Имя может содержать только буквы',
            },
          })}
        />
        <span className={style.form__error}>
          {errors.name && (
            <span>
              {errors.name.message || 'Поле обязательно для заполнения'}
            </span>
          )}
        </span>
        <input
          type='number'
          placeholder='Телефон*'
          className={style.form__input}
          {...register('phone', {
            required: true,
            pattern: {
              value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
              message: 'Введите корректный номер телефона',
            },
          })}
        />
        <span className={style.form__error}>
          {errors.phone && (
            <span>
              {errors.phone.message || 'Поле обязательно для заполнения'}
            </span>
          )}
        </span>
      </div>

      <label htmlFor='policy' className={style.form__label}>
        <input
          // checked={checkState}
          // onChange={() => setCheckState(!checkState)}
          type='checkbox'
          id='policy'
          className={style.form__checkbox}
          {...register('policy', {
            required: true,
          })}
        />
        Даю свое согласие на обработку персональных данных
      </label>
      <span className={style.form__error}>
        {errors.policy && (
          <span>
            {errors.policy.message || 'Примите политику конфденциальности'}
          </span>
        )}
      </span>
      <button type='submit' className={style.form__button}>
        Заказать звонок
      </button>
    </form>
  );
};

export default Form;
