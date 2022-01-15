import React, { useState } from 'react';

function CartItem(props) {
  const {
    newCartItems,
    id,
    image,
    category,
    name,
    price,
    count,
    setCount,
    removeIndex,
    setRemoveIndex,
    setNewCartItems,
  } = props;
  return (
    <>
      <div className="row main align-items-center">
        <div className="col-2">
          <img className="img-fluid" src={image} alt="" />
        </div>
        <div className="col">
          <div className="row text-muted">{category}</div>
          <div className="row">{name}</div>
        </div>
        <div className="col">
          <a
            href="#/"
            onClick={() => {
              //if (counts - 1 < 1) return; //也是一種return的寫法 如果<1就不執行
              //setCounts(counts - 1);
              //if (counts - 1 >= 1) setCounts(counts - 1);
              setCount(count - 1);
            }}
          >
            -
          </a>
          <a href="#/" className="border">
            {count}
          </a>
          <a
            href="#/"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </a>
        </div>
        <div className="col">
          ${price}
          <span
            className="close"
            onClick={() => {
              const removeItem = id;
              setRemoveIndex(id);
              console.log(removeItem);
              setNewCartItems(
                newCartItems.filter((item) => item.id !== removeItem)
              );
            }}
          >
            &#10005;
          </span>
        </div>
      </div>
    </>
  );
}

export default CartItem;
