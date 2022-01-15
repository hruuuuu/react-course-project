import './App.css';
import OrderList from './components/OrderList';
import Summary from './components/Summary';
import React, { useState } from 'react';

const cartItems = [
  {
    id: 1,
    image: 'https://i.imgur.com/1GrakTl.jpg',
    category: 'Shirt',
    name: '咖啡色 T-shirt',
    price: 300,
  },
  {
    id: 2,
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    category: 'Shirt',
    name: '白色 T-shirt',
    price: 200,
  },
  {
    id: 3,
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    category: 'Shirt',
    name: '黑色 T-shirt',
    price: 450,
  },
  {
    id: 4,
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    category: 'Shirt',
    name: '黑色 T-shirt',
    price: 450,
  },
];

//用來讓useState知道陣列裡有幾個值(幾項商品)
const initState = (array) => {
  const state = [];
  array.forEach((item) => {
    state.push(1);
  });
  return state;
};

function App() {
  const [removeIndex, setRemoveIndex] = useState(0);
  const [newCartItems, setNewCartItems] = useState(cartItems);
  const [counts, setCounts] = useState(initState(newCartItems));
  const cartCount = () => {
    let totalCount = 0;
    for (let i = 0; i < newCartItems.length; i++) {
      totalCount += counts[i];
    }
    return totalCount;
  };
  const total = () => {
    let sum = 0;
    for (let i = 0; i < newCartItems.length; i++) {
      sum += counts[i] * newCartItems[i].price;
    }
    return sum;
  };
  return (
    <>
      <div className="card">
        <div className="row">
          <OrderList
            newCartItems={newCartItems}
            counts={counts}
            setCounts={setCounts}
            removeIndex={removeIndex}
            setRemoveIndex={setRemoveIndex}
            setNewCartItems={setNewCartItems}
          />
          <Summary cartCount={cartCount()} total={total()} />
        </div>
      </div>
    </>
  );
}

export default App;
