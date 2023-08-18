import React from 'react';
import style from './style.module.scss';
import comparisonIcon from '../../../assets/icons/comparison-icon.svg';
import heartIcon from '../../../assets/icons/heart-icon.svg';
import cardIcon from '../../../assets/icons/card-icon.svg';
import profileIcon from '../../../assets/icons/profile-icon.svg';

const ButtonsPanel = () => {
  const [comparisonCount, setComparisonCount] = React.useState(3);
  const [carditemsCount, setCarditemsCount] = React.useState(14);

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
      <button className={style.buttons__btn}>
        <img src={cardIcon} alt='card icon' />
        <span className={style.buttons__counter}>{carditemsCount}</span>
      </button>
      <button className={style.buttons__btn}>
        <img src={profileIcon} alt='profile icon' />
      </button>
    </div>
  );
};

export default ButtonsPanel;
