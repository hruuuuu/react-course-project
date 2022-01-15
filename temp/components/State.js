import { useState } from 'react';

function App() {
  const [counts, setCounts] = useState([1, 1, 1, 1]);
  const [product, setProduct] = useState({
    name: 'Phone',
    price: 15000,
    stock: 5,
  });
  return (
    <>
      <div className="array">
        <div>
          <button
            onClick={() => {
              const newCounts = [...counts];
              newCounts[0] = newCounts[0] + 1;
              setCounts(newCounts);
            }}
          >
            +
          </button>
          {counts[0]}
          <button
            onClick={() => {
              const newCounts = [...counts];
              newCounts[0] = newCounts[0] - 1;
              setCounts(newCounts);
            }}
          >
            -
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              const newCounts = [...counts];
              newCounts[1] = newCounts[1] + 1;
              setCounts(newCounts);
            }}
          >
            +
          </button>
          {counts[1]}
          <button
            onClick={() => {
              const newCounts = [...counts];
              newCounts[1] = newCounts[1] + 1;
              setCounts(newCounts);
            }}
          >
            -
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              const newCounts = [...counts];
              newCounts[2] = newCounts[2] + 1;
              setCounts(newCounts);
            }}
          >
            +
          </button>
          {counts[2]}
          <button
            onClick={() => {
              const newCounts = [...counts];
              newCounts[2] = newCounts[2] + 1;
              setCounts(newCounts);
            }}
          >
            -
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              const newCounts = [...counts];
              newCounts[3] = newCounts[3] + 1;
              setCounts(newCounts);
            }}
          >
            +
          </button>
          {counts[3]}
          <button
            onClick={() => {
              const newCounts = [...counts];
              newCounts[3] = newCounts[3] + 1;
              setCounts(newCounts);
            }}
          >
            -
          </button>
        </div>
      </div>
      <div className="object">
        <button
          onClick={() => {
            const newProduct = { ...product };
            newProduct.price = 20000;
            setProduct(newProduct);
            /*
            如果沒有遵循三步驟 小規模寫法是還好 但大一點就建議遵循
            沒有遵循三步驟的話要把整個物件都寫出來 不然會只剩下price
            setProduct({
              name: 'iPhone', 
              price: 20000,
              stock: 5,
            });
            */
          }}
        >
          Change price to 20000
        </button>
      </div>
    </>
  );
}

export default App();
