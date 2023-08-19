import React from 'react';
import style from './style.module.scss';
import SearchPanel from './SearchPanel';
import AddressPanel from './AddressPanel';
import NavigationPanel from './NavigationPanel';
import ContactsPanel from './ContactsPanel';
import LogoPanel from './LogoPanel';
import CatalogPanel from './CatalogPanel';
import ButtonsPanel from './ButtonsPanel';
import Cart from '../Cart';
const Header = ({ cartItems, visibleCart, setVisibleCart, changeCartItemCount }) => {
  return (
    <div className={style.header}>
      <div className={style.header__wrapper_top}>
        <LogoPanel />
        <SearchPanel />
        <AddressPanel />
        <ContactsPanel />
      </div>
      <div className={style.header__divider} />
      <div className={style.header__wrapper_bottom}>
        <CatalogPanel />
        <NavigationPanel />
        <ButtonsPanel
          setVisibleCart={setVisibleCart}
          visibleCart={visibleCart}
          cartItemsLength={cartItems.length}
        />
      </div>
      <div className={style.header__divider} />
      {visibleCart && <Cart cartItems={cartItems}  changeCartItemCount={changeCartItemCount}/>}
    </div>
  );
};

export default Header;
