import React from 'react';
import style from './style.module.scss';
import SearchPanel from './SearchPanel';
import AddressPanel from './AddressPanel';
import NavigationPanel from './NavigationPanel';
import ContactsPanel from './ContactsPanel';
import LogoPanel from './LogoPanel';
import CatalogPanel from './CatalogPanel';
import ButtonsPanel from './ButtonsPanel';
const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header__wrapper}>
        <div className={style.header__item}>
          <LogoPanel />
        </div>
        <div className={style.header__item}>
          <SearchPanel />
        </div>
        <div className={style.header__item}>
          <AddressPanel />
        </div>
        <div className={style.header__item}>
          <ContactsPanel />
        </div>
      </div>
      <div className={style.header__divider} />
      <div className={style.header__wrapper}>
        <div className={style.header__item}>
          <CatalogPanel />
        </div>
        <div className={style.header__item}>
          <NavigationPanel />
        </div>
        <div className={style.header__item}>
          <ButtonsPanel />
        </div>
      </div>
    </div>
  );
};

export default Header;
