import { useState } from 'react';
import Header from './components/Header';
import { doors } from './data/doors';
import style from './app.module.scss';
import ProductCard from './components/ProductCard';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [visibleCart, setVisibleCart] = useState(false);

  const addItemToCart = (id) => {
    if (cartItems.find((item) => item.id === id)) {
      const newArr = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      return setCartItems(newArr);
    } else {
      const currentItem = doors.find((item) => item.id === id);
      return setCartItems([...cartItems, currentItem]);
    }
  };

  const changeCartItemCount = (id, action) => {
    const currentItem = cartItems.find((item) => item.id === id);

    if (currentItem.count === 1 && action === 'minus') {
      const newArr = cartItems.filter((item) => item.id !== id);
      return setCartItems(newArr);
    }
    const newArr = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          count: action === 'plus' ? item.count + 1 : item.count - 1,
        };
      }
      return item;
    });
    return setCartItems(newArr);
  };

  return (
    <div className={style.app}>
      <Header
        cartItems={cartItems}
        visibleCart={visibleCart}
        setVisibleCart={setVisibleCart}
        changeCartItemCount={changeCartItemCount}
      />
      <main className={style.app__main}>
        временные карты для демонстрации логики
        {doors.map((item) => (
          <ProductCard key={item.id} {...item} addItemToCart={addItemToCart} />
        ))}
      </main>
    </div>
  );
}

export default App;
